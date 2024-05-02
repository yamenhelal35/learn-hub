const express = require('express')
const router = express.Router()
const CommunityController = require('../Controller/communityController')
const communityMiddlewares = require('../middlewares/communityMiddleware')
const multer = require('multer')
const upload = multer()
const communityController = new CommunityController()

router.post('/new', communityMiddlewares.userFromToken, communityController.addNewCommunity.bind(communityController))
router.get('/get/:communityId', communityController.findCommunityById.bind(communityController))
router.post('/joinCommunity/:communityId', communityMiddlewares.userFromToken, communityController.joinCommunity.bind(communityController))
router.get('/getallforuser', communityMiddlewares.userFromToken, communityController.getAllForUser.bind(communityController))
router.post('/uploadFile/:communityId', communityMiddlewares.userFromToken, upload.single('file'), communityController.uploadFile.bind(communityController))
/* router.patch('/:communityId', communityController.updateCommunity) */

module.exports = router
