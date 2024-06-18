// multerConfig.js
const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const cloudinary = require('./cloudinary')

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'profile_pics',
    allowed_formats: ['jpg', 'png']
  }
})

const parser = multer({ storage })

module.exports = parser
