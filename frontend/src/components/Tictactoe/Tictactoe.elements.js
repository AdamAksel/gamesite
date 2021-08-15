import styled from 'styled-components'

export const TicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  min-width: 100vw;
  min-height: 90vh;
`

export const TicNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 10vh;
`
export const TicLogo = styled.img`
  max-height: 9vh;
  width: auto;
`

export const TicBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vw;
  width: 25vw;
  flex-wrap: wrap;
`

export const TicSquare = styled.img`
  width: 33.3%;
  height: 33.3%;
  border: 1px solid black;
`

export const TicReset = styled.h3`
  &:hover {
    cursor: pointer;
    color: red;
  }
`
