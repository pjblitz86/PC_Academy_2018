const validatePostInput = require('../validation/post');
const Post = require('../models/Post');

exports.test = function (req, res) {
  res.json({ msg: "posts works" });
};

exports.getAll = function (req, res) {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json(err));
};

exports.getOne = function (req, res) {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json(err));
};

exports.createPost = function (req, res) {
  const { errors, isValid } = validatePostInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newPost = new Post({
    text: req.body.text,
    name: req.body.name,
    avatar: req.body.avatar,
    user: req.user.id
  });

  newPost.save()
    .then(post => res.json(post));
};

exports.deletePost = function (req, res) {
  Post.findById(req.params.id)
    .then(post => {
      if (post.user.toString() !== req.user.id) {
        return res.status(401).json({ notauthorized: 'User not authorized' });
      }
      post.remove().then(() => res.json({ success: true }));
    })
    .catch(err => res.status(404).json(err));
};

exports.addLike = function (req, res) {
  Post.findById(req.params.id)
    .then(post => {
      if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
        return res.status(400).json({ alreadyLiked: 'User already liked this post' });
      }
      post.likes.unshift({ user: req.user.id });
      post.save()
        .then(post => res.json(post));
    })
    .catch(err => res.status(404).json(err));
};

exports.removeLike = function (req, res) {
  Post.findById(req.params.id)
    .then(post => {
      if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
        return res.status(400).json({ notLiked: 'You have not yet liked this post' });
      }
      const removeIndex = post.likes
        .map(item => item.user.toString())
        .indexOf(req.user.id);

      post.likes.splice(removeIndex, 1);
      post.save()
        .then(post => res.json(post));
    })
    .catch(err => res.status(404).json(err));
};

exports.addCommentToPost = function (req, res) {
  const { errors, isValid } = validatePostInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Post.findById(req.params.id)
    .then(post => {
      const newComment = {
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
      };

      post.comments.unshift(newComment);
      post.save().then(post => res.json(post));
    })
    .catch(err => res.status(404).json(err));
};

exports.deleteCommentFromPost = function (req, res) {
  Post.findById(req.params.id)
    .then(post => {
      if (post.comments.filter(comment => comment._id.toString() === req.params.comment_id).length === 0) {
        return res.status(404).json({ commentnotexists: 'Comment does not exist' });
      }
      const removeIndex = post.comments.map(item => item._id.toString())
        .indexOf(req.params.comment_id);

      post.comments.splice(removeIndex, 1);
      post.save().then(post => res.json(post));
    })
    .catch(err => res.status(404).json(err));
};
