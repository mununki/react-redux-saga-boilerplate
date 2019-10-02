import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import createRootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const history = createBrowserHistory()

const rootReducer = createRootReducer(history)

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
)

export type RootState = ReturnType<typeof rootReducer>

sagaMiddleware.run(rootSaga)

export default store
