import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { combineReducers } from 'redux'
import { auth } from './auth/reducer'
import { common } from './common/reducer'

const createRootReducer = (history: History<any>) =>
  combineReducers({ router: connectRouter(history), common, auth })

export default createRootReducer
