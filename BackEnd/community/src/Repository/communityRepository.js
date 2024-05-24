const Community = require('../models/community')
const mongoose = require('mongoose')

class CommunityRepository {
  async createCommunity (communityData) {
    try {
      const newCommunity = await Community.create({
        ...communityData,
        members: communityData.members || []
      })
      return newCommunity.toObject()
    } catch (error) {
      throw new Error(`Community creation failed: ${error.message}`)
    }
  }

  async findCommunityById (_id) {
    try {
      const community = await Community.findById(_id).lean()
      console.log(`communityID: ${_id}`)

      return community
    } catch (error) {
      throw new Error(`Failed to fetch communityData: ${error.message}`)
    }
  }

  async joinCommunity (communityId, userId, username, userEmail, userProfilePic) {
    try {
      const community = await Community.findById(communityId)
      if (!community) {
        throw new Error('Community not found')
      }

      console.log('Community:', community)

      const isMember = community.members && community.members.some((member) => member._id.toString() === userId)

      if (isMember) {
        throw new Error('User is already a member of this community')
      }

      community.members.push({ _id: userId, username, email: userEmail, profilepic: userProfilePic })
      await community.save()

      return community.toObject()
    } catch (error) {
      throw new Error(`Failed to join community: ${error.message}`)
    }
  }

  async allCommunitiesforuser (userId) {
    try {
      const userIdObject = new mongoose.Types.ObjectId(userId)
      const communities = await Community.find({ 'members._id': userIdObject }).lean()
      console.log('communities:', communities)
      return communities
    } catch (error) {
      throw new Error(`Failed to fetch communities: ${error.message}`)
    }
  }

  async allMemberForCommunity (_id) {
    try {
      const communityObjectId = new mongoose.Types.ObjectId(_id) // Use 'new' keyword
      const community = await Community.findById(communityObjectId).lean()
      if (!community) {
        throw new Error('Community not found')
      }
      console.log('retrived community', community)
      const members = community.members.map(member => {
        if (member._id && mongoose.Types.ObjectId.isValid(member._id)) {
          const memberID = new mongoose.Types.ObjectId(member._id) // Use 'new' keyword
          const memberUserName = member.username
          return { _id: memberID, username: memberUserName }
        } else {
          throw new Error(`Invalid member ID: ${JSON.stringify(member)}`)
        }
      })

      console.log(`Fetching members with IDs: ${members}`)

      // Fetch only necessary fields
      console.log('membersssssssssssssss', members)
      return members
    } catch (error) {
      console.error(`Failed to fetch community members for community ID ${_id}: ${error.message}`)
      throw new Error(`Failed to fetch community members: ${error.message}`)
    }
  }

  async getTenCommunities () {
    try {
      const communities = await Community.find().limit(10).lean()
      return communities
    } catch (error) {
      throw new Error(`Failed to fetch users: ${error.message}`)
    }
  }

  async getAdditionalCommunities (excludedIds) {
    try {
      const additionalCommunities = await Community.find({ _id: { $nin: Array.from(excludedIds) } }).limit(10).lean()
      return additionalCommunities
    } catch (error) {
      throw new Error(`Failed to fetch additional communities: ${error.message}`)
    }
  }

  async updateUserRole (_id, isOwner) {
    const updateObject = { isOwner: Boolean(isOwner) }
    const community = await Community.findById(_id, updateObject, { new: true })
    return community
  }

  async uploadFile (communityId, userId, file) {
    try {
      const community = await Community.findById(communityId)
      if (!community) {
        throw new Error('Community not found')
      }

      if (community.ownerID !== userId) {
        throw new Error('You are not authorized to upload.')
      }

      community.files.push(`https://storage.googleapis.com/${file.bucket}/${file.originalname}`)

      await community.save()

      return { downloadURL: `https://storage.googleapis.com/${file.bucket}/${file.originalname}` }
    } catch (error) {
      throw new Error(`Failed to upload file: ${error.message}`)
    }
  }
}

module.exports = CommunityRepository
