export const APP_START = 'APP_START'

export const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST'
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS'
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE'

export const dispatchUpdateProfile = (profile: IProfileRequest) => ({
  type: UPDATE_PROFILE_REQUEST,
  profile
})
