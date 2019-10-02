interface IEmailSignUpResponse {
  id: string
  email: string
}

interface IAuthState {
  access_token: string
  refresh_token: string
  expires_in: number
  token_type: 'Bearer'
  scope: string
  error?: string
}

interface IRefreshTokenResponse {
  access_token: string
  refresh_token: string
  expires_in: number
}

// TODO: FIX the type against profile response
interface IProfile {
  id: string
  email: string
  firstName: string
  lastName: string
  fullname: string
  photo: string
  country: string
  state: string
  county: string
  city: string
  zipCode: string
  address: string
  dateOfBirth: string
}
