const CommunityService = require('../Service/communityService')
const { uploadFile } = require('../Config/firebaseeconfig')
const admin = require('firebase-admin')

class CommunityController {
  constructor () {
    this.communityService = new CommunityService()
  }

  async addNewCommunity (req, res) {
    try {
      const userId = req.mongouserId
      const memberusername = req.username
      const userEmail = req.useremail
      const userProfilePic = req.userProfilePic
      console.log(`userId: ${userId}`)
      console.log(`username: ${memberusername}`)
      const community = {
        ownerID: userId,
        name: req.body.name,
        members: [{
          username: memberusername,
          _id: userId,
          email: userEmail,
          profilepic: userProfilePic

        }],
        privacy: req.body.privacy,
        about: req.body.about

      }
      console.log(`community data: ${JSON.stringify(community)}`)
      const result = await this.communityService.newCommunity(community, memberusername)
      console.log(`ownerID : ${community.ownerID}`)
      res.json(result)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

  async findCommunityById (req, res) {
    try {
      const communityId = req.params.communityId
      console.log(`Community ID: ${communityId}`)

      const community = await this.communityService.getCommunityById(communityId)
      console.log('Fetched Community:', community)

      res.json({
        community,
        userRole: req.userRole
      })
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }

  async joinCommunity (req, res) {
    try {
      const communityId = req.params.communityId
      const userId = req.mongouserId
      const username = req.username
      const userEmail = req.useremail
      const userProfilePic = req.userProfilePic
      console.log('userProfilePifghfghfgc', userProfilePic)

      const updatedCommunity = await this.communityService.joinCommunity(communityId, userId, username, userEmail, userProfilePic)
      console.log(`Updated Community: ${JSON.stringify(updatedCommunity)}`)

      res.json({ ...updatedCommunity }) // Send isOwner as part of the response
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }

  async getAllForUser (req, res) {
    try {
      const userId = req.mongouserId
      const communities = await this.communityService.getAllCommunitiesforuser(userId)

      res.json({ communities })
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }

  async allMemberForCommunity (req, res) {
    try {
      const communityId = req.params.communityId
      const userRole = req.userRole
      const communityMembers = await this.communityService.allMemberForCommunity(communityId)
      console.log(`communityMembers::::${communityMembers}`)
      res.json({ communityMembers, userRole })
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }

  async getTenCommunities (req, res) {
    try {
      const userId = req.mongouserId
      const communities = await this.communityService.getTenCommunities(userId)
      console.log('Randomcommunities', communities)
      res.json(communities)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }

  async uploadFile (req, res) {
    try {
      const file = req.file
      const userId = req.mongouserId
      const communityId = req.params.communityId

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded.' })
      }

      const result = await this.communityService.uploadFile(communityId, userId, file)

      res.json(result)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}

module.exports = CommunityController
