const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstname: { type: String, required: false, unique: false },
    lastname: { type: String, required: false, unique: false },
    profilepic: { type: String, required: false, unique: false, default: '' }
  }, { timestamps: true })

const User = mongoose.model('User', UserSchema)

module.exports = User
