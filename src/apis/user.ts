import { logger } from '../utils/logger'
import api from './api'

const getProfile = async () => {
  try {
    const action = '/user/current'
    const result = await api.getData(action)

    return result.data
  } catch (error) {
    logger('error.response', error)
    throw error
  }
}

const getProfileByUserId = async (userId: number) => {
  try {
    const action = `/profile/${userId}`
    const result = await api.getData(action)

    return result.data
  } catch (error) {
    throw error
  }
}

const postProfile = async (data: { createUserViewModel: IProfileRequest }) => {
  try {
    const action = '/user'
    const result = await api.postData(action, data)

    return result.data
  } catch (error) {
    logger('error post profile', error)
    throw error
  }
}

export default {
  getProfile,
  getProfileByUserId,
  postProfile
}
