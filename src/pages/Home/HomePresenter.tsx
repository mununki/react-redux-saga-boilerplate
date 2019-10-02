import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  dispatchRefreshTokenRequest,
  dispatchSignInRequest,
  dispatchSignOutRequest
} from '../../store/auth/actions'

export default () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated)

  return (
    <div>
      <p>Home</p>
      <p>Auth State : {isAuth ? 'Authenticated' : 'Not authenticated'}</p>
      <div>
        {isAuth ? (
          <div>
            <button onClick={() => dispatch(dispatchSignOutRequest())}>
              Log Out
            </button>
            <button onClick={() => dispatch(dispatchRefreshTokenRequest())}>
              Renew Token
            </button>
          </div>
        ) : (
          <button onClick={() => dispatch(dispatchSignInRequest())}>
            Log In
          </button>
        )}
      </div>
    </div>
  )
}
