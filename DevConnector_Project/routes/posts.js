const express = require('express');
const router = express.Router();
const passport = require('passport');
const Post = require('../models/Post');
const Profile = require('../models/Profile');
const validatePostInput = require('../validation/post');

router.get('/test', (req, res) => res.json({ msg: "posts works" }));

router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(res.status(404).json({ postsNotFound: 'Posts not found' }));
});

router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(res.status(404).json({ postNotFound: 'Post by this id not found' }));
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
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
});

router.delete(
  '/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          if (post.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: 'User not authorized' });
          }
          post.remove().then(() => res.json({ success: true }));
        })
        .catch(res.status(404).json({ postnotfound: 'No post found' }));
    });
  }
);

router.post('/like/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOne({ user: req.user.id }).then(profile => {
    Post.findById(req.params.id)
      .then(post => {
        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
          return res.status(400).json({ alreadyLiked: 'User already liked this post' });
        }
        post.likes.unshift({ user: req.user.id });
        post.save()
          .then(post => res.json(post));
      })
      .catch(res.status(404).json({ postnotfound: 'No post found' }));
  });
}
);

router.post('/unlike/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOne({ user: req.user.id }).then(profile => {
    Post.findById(req.params.id)
      .then(post => {
        if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
          return res.status(400).json({ alreadyLiked: 'User already liked this post' });
        }
        const removeIndex = post.likes
          .map(item => item.user.toString())
          .indexOf(req.user.id);

        post.likes.splice(removeIndex, 1);
        post.save()
          .then(post => res.json(post));
      })
      .catch(res.status(404).json({ postnotliked: 'Yo have not yet liked this post' }));
  });
}
);

router.post('/comment/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
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
    .catch(res.status(404).json({ postnotfound: 'No post found' }));
});

router.delete('/comment/:id/:comment_id', passport.authenticate('jwt', { session: false }), (req, res) => {
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
    .catch(res.status(404).json({ postnotfound: 'No post found' }));
});

module.exports = router;