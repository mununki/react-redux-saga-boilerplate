import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { dispatchSignInRequest } from '../store/auth/actions'

export const PrivateRoute = ({
  component: Component,
  ...rest
}: {
  component: any
  path: string
}) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated)

  return (
    <Route
      {...rest}
      render={props => (isAuth ? <Component {...props} /> : <Redirect />)}
    />
  )
}

const Redirect = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dispatchSignInRequest())
  })

  return <div>Redirecting...</div>
}
