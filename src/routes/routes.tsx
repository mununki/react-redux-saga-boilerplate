import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import { PrivateRoute } from './PrivateRoute'

export const routes = (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </>
)
