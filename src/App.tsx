import React from 'react'
import { Provider, useSelector } from 'react-redux'
import styled from 'styled-components'
import { routes } from './routes/routes'
import store, { history } from './store'
import { ConnectedRouter } from 'connected-react-router'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppStart />
    </Provider>
  )
}

const AppStart = () => {
  const appStart = useSelector((state: RootState) => state.common.appStart)

  return appStart ? (
    <Container>
      <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </Container>
  ) : (
    <Container>Loading...</Container>
  )
}

const Container = styled.div``

export default App
