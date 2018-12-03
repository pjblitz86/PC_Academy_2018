const express = require('express');
const router = express.Router();
const passport = require('passport');
const Post = require('../../models/Post');
const validatePostInput = require('../../validation/post');

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

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Post
    .findOneAndRemove({ _id: req.params.id, user: req.user.id })
    .then(post => {
      return !post
        ? res.status(401).json({ post: 'post not found' })
        : res.status(200).json({ post: 'post deleted' });
    })
    .catch(res.status(404).json({ post: 'It had a problem deleting the post' }));
});

module.exports = router;