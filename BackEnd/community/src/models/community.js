const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
  username: { type: String, required: false },
  _id: { type: mongoose.Schema.Types.ObjectId, required: false }
})

const CommunitySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: false },
    about: { type: String, required: false, unique: false },
    privacy: {
      type: String,
      required: true,
      enum: ['public', 'private'], // Only allow "public" and "private"
      unique: false
    },
    ownerID: { type: String, required: false, unique: false },
    isOwner: { type: Boolean, required: false, unique: false },
    members: [MemberSchema],
    files: { type: Array, required: false }
  },
  { timestamps: true }
)

const Community = mongoose.model('Community', CommunitySchema)

module.exports = Community
