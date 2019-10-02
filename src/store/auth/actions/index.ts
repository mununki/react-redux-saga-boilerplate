export const SIGN_IN_EMAIL_REQUEST = 'SIGN_IN_REQUEST'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'
export const SIGN_IN_REDIRECT_CALLBACK = 'SIGN_IN_REDIRECT_CALLBACK'

export const SIGN_UP_EMAIL_REQUEST = 'SIGN_UP_EMAIL_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const OAUTH_SIGN_IN_SUCCESS = 'OAUTH_SIGN_IN_SUCCESS'
export const OAUTH_SIGN_IN_FAILURE = 'OAUTH_SIGN_IN_FAILURE'
export const OAUTH_SIGN_IN_CANCEL = 'OAUTH_SIGN_IN_CANCEL'

export const SIGN_IN_GOOGLE_REQUEST = 'SIGN_IN_GOOGLE_REQUEST'
export const SIGN_IN_FACEBOOK_REQUEST = 'SIGN_IN_FACEBOOK_REQUEST'

export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST'
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS'
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE'
export const SIGN_OUT_REDIRECT_CALLBACK = 'SIGN_OUT_REDIRECT_CALLBACK'

export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST'
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS'
export const REFRESH_TOKEN_FAILURE = 'REFRESH_TOKEN_FAILURE'
export const REFRESH_TOKEN_REDIRECT_CALLBACK = 'REFRESH_TOKEN_REDIRECT_CALLBACK'

export const SIGN_OUT = 'SIGN_OUT'

export const dispatchSignInRequest = () => ({ type: SIGN_IN_EMAIL_REQUEST })

export const dispatchSignInRedirectCallback = () => ({
  type: SIGN_IN_REDIRECT_CALLBACK
})

export const dispatchSignOutRequest = () => ({ type: SIGN_OUT_REQUEST })

export const dispatchSignOutRedirectCallback = () => ({
  type: SIGN_OUT_REDIRECT_CALLBACK
})

export const dispatchRefreshTokenRequest = () => ({
  type: REFRESH_TOKEN_REQUEST
})

export const dispatchRefreshTokenRedirectCallback = () => ({
  type: REFRESH_TOKEN_REDIRECT_CALLBACK
})
