import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Main, Tictactoe, Memory } from './components'
import styled from 'styled-components'
import { GlobalStyle } from './globalstyles'

const StyledApp = styled.div``

function App() {
  return (
    <Router>
      <StyledApp>
        <GlobalStyle />

        <main>
          <Route path='/' component={Main} exact />
          <Route path='/Tictactoe' component={Tictactoe} exact />
          <Route path='/Memory' component={Memory} exact />
        </main>
      </StyledApp>
    </Router>
  )
}

export default App
