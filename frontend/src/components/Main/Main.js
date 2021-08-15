import React from 'react'
import { MainContainer, MainCard } from './Main.elements'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <MainContainer>
      <MainCard>
        <Link to='/Tictactoe' style={{ textDecoration: 'none' }}>
          TicTacToe
        </Link>
      </MainCard>
      <MainCard>
        <Link to='/Memory' style={{ textDecoration: 'none' }}>
          Memory
        </Link>
      </MainCard>
    </MainContainer>
  )
}

export default Main
