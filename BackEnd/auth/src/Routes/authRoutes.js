const express = require('express')
const router = express.Router()
const authMiddlewares = require('../middlewares/authMiddlewares')
const AuthController = require('../Controller/authController')
const authController = new AuthController()
const upload = require('../middlewares/multer')
const parser = require('../Config/multerConfig')

router.post('/register', authController.register.bind(authController))
router.post('/login', authController.login.bind(authController))
router.put('/editUser', authMiddlewares.isAuthenticated, parser.single('profileImage'), authController.updateUser.bind(authController))

router.get('/setcookie', authController.setcookie.bind(authController))
router.post('/uploadphoto', upload.single('image'), authMiddlewares.isAuthenticated, authController.uploadphoto.bind(authController))
router.post('/logout', authController.logout.bind(authController))

router.get('/profile', authMiddlewares.isAuthenticated, authController.getProfile.bind(authController))
router.get('/all', authController.getAll.bind(authController))
router.post('/addFriend', authMiddlewares.isAuthenticated, authController.addFriend.bind(authController))
router.get('/getFriendList', authMiddlewares.isAuthenticated, authController.getFriendList.bind(authController))

module.exports = router
