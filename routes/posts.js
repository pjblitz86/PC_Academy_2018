const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts');
const secureRoute = require('../config/passport').secure;

router.get('/test', postController.test);

router.get('/', postController.getAll);

router.get('/:id', postController.getOne);

router.post('/', secureRoute, postController.createPost);

router.delete('/:id', secureRoute, postController.deletePost);

router.post('/like/:id', secureRoute, postController.addLike);

router.post('/unlike/:id', secureRoute, postController.removeLike);

router.post('/comment/:id', secureRoute, postController.addCommentToPost);

router.delete('/comment/:id/:comment_id', secureRoute, postController.deleteCommentFromPost);

module.exports = router;