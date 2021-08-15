import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  TicContainer,
  TicBoard,
  TicSquare,
  TicNav,
  TicLogo,
  TicReset,
} from './Tictactoe.elements'
import Logo from './images/ticlogo.png'
import Red from './images/red.png'
import Blue from './images/blue.png'

const Tictactoe = () => {
  const [blueOrRed, setBlueOrRed] = useState(Red)
  var [blueScore, setBlueScore] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  var [redScore, setRedScore] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  function ticFunction(e) {
    if (e.target.src) {
      return null
    } else {
      e.target.setAttribute('src', blueOrRed)
    }

    let str = e.target.className
    str = str.slice(str.length - 1, str.length)
    let turn = []
    // eslint-disable-next-line
    if (blueOrRed == Red) {
      turn = redScore
    } else {
      turn = blueScore
    }
    // eslint-disable-next-line
    if (str == 1) {
      turn[0]++
      turn[3]++
      turn[6]++
      // eslint-disable-next-line
    } else if (str == 2) {
      turn[0]++
      turn[4]++
      // eslint-disable-next-line
    } else if (str == 3) {
      turn[0]++
      turn[5]++
      turn[7]++
      // eslint-disable-next-line
    } else if (str == 4) {
      turn[1]++
      turn[3]++
      // eslint-disable-next-line
    } else if (str == 5) {
      turn[1]++
      turn[4]++
      turn[6]++
      turn[7]++
      // eslint-disable-next-line
    } else if (str == 6) {
      turn[1]++
      turn[5]++
      // eslint-disable-next-line
    } else if (str == 7) {
      turn[2]++
      turn[3]++
      turn[7]++
      // eslint-disable-next-line
    } else if (str == 8) {
      turn[2]++
      turn[4]++
      // eslint-disable-next-line
    } else if (str == 9) {
      turn[2]++
      turn[5]++
      turn[6]++
    }
    // eslint-disable-next-line
    if (blueOrRed == Red) {
      setRedScore((redScore = turn))
    } else {
      setBlueScore((blueScore = turn))
    }
    // eslint-disable-next-line
    if (blueOrRed == Red) {
      setBlueOrRed(Blue)
    } else {
      setBlueOrRed(Red)
    }
    if (Math.max(...blueScore) === 3) {
      setTimeout(function () {
        alert('Winner is Blue!')
        return window.location.reload()
      }, 100)
    } else if (Math.max(...redScore) === 3) {
      setTimeout(function () {
        alert('Winner is Red!')
        return window.location.reload()
      }, 100)
    }
  }

  function Reset() {
    window.location.reload()
  }

  return (
    <>
      <TicNav>
        <TicLogo src={Logo} />

        <TicReset onClick={Reset}>Reset</TicReset>

        <Link to='/' style={{ textDecoration: 'none' }}>
          <h3>Back to Main</h3>
        </Link>
      </TicNav>
      <TicContainer>
        <TicBoard>
          <TicSquare className='1' onClick={ticFunction} />
          <TicSquare className='2' onClick={ticFunction} />
          <TicSquare className='3' onClick={ticFunction} />
          <TicSquare className='4' onClick={ticFunction} />
          <TicSquare className='5' onClick={ticFunction} />
          <TicSquare className='6' onClick={ticFunction} />
          <TicSquare className='7' onClick={ticFunction} />
          <TicSquare className='8' onClick={ticFunction} />
          <TicSquare className='9' onClick={ticFunction} />
        </TicBoard>
      </TicContainer>
    </>
  )
}

export default Tictactoe
