const express = require('express')
const router = express.Router()
const CommunityController = require('../Controller/communityController')
const communityMiddlewares = require('../middlewares/communityMiddleware')
const multer = require('multer')
const upload = multer()
const communityController = new CommunityController()

router.post('/new', communityMiddlewares.userFromToken, communityController.addNewCommunity.bind(communityController))
router.get('/get/:communityId', communityMiddlewares.userFromToken, communityMiddlewares.checkIsOwner, communityController.findCommunityById.bind(communityController))
router.post('/joinCommunity/:communityId', communityMiddlewares.userFromToken, communityController.joinCommunity.bind(communityController))
router.get('/getallforuser', communityMiddlewares.userFromToken, communityController.getAllForUser.bind(communityController))

router.get('/allMemberForCommunity/:communityId', communityMiddlewares.userFromToken, communityMiddlewares.checkIsOwner, communityController.allMemberForCommunity.bind(communityController))

router.get('/getTenCommunities', communityMiddlewares.userFromToken, communityController.getTenCommunities.bind(communityController))
router.post('/uploadFile/:communityId', communityMiddlewares.userFromToken, upload.single('file'), communityController.uploadFile.bind(communityController))
/* router.patch('/:communityId', communityController.updateCommunity) */

router.get('/getAllPostsforcommunity/:communityId', communityController.getAllPostsForCommunity.bind(communityController))
router.post('/createpost/:communityId', communityController.createPost.bind(communityController))
/* router.get('/getpost/:postId', communityController.getPostById.bind(communityController))
router.put('/update/:postId', communityController.updatePost.bind(communityController))
router.delete('/delete/:postId', communityController.deletePost.bind(communityController)) */
module.exports = router
