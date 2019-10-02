export const AUTH_TOKEN = 'auth_token'
export const REFRESH_TOKEN = 'refresh_token'

/* Let's save our user tokens so when the app resets we can try and get them later */
export const saveAuthTokenLocalStorage = ({
  access_token,
  refresh_token
}: {
  access_token: string
  refresh_token: string
}) => {
  localStorage.setItem(AUTH_TOKEN, access_token)
  localStorage.setItem(REFRESH_TOKEN, refresh_token)
}

export const getAuthTokenLocalStorage = () => {
  return localStorage.getItem(AUTH_TOKEN)
}

export const getRefreshTokenLocalStorage = () => {
  return localStorage.getItem(REFRESH_TOKEN)
}

export const clearAuthTokens = () => {
  localStorage.removeItem(AUTH_TOKEN)
  localStorage.removeItem(REFRESH_TOKEN)
}
