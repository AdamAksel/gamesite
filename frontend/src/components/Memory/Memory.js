import React, { useState } from 'react'
import {
  MemoryContainer,
  MemoryHeader,
  MemoryBoard,
  MemoryLogo,
  MemoryCard,
  MemoryDiv,
  MemoryCardHidden,
} from './Memory.elements'
import { Link } from 'react-router-dom'
import Logo from './images/MemoryLogo.png'
import Clear from './images/clear.png'

const Memory = () => {
  var [memoryCards, setMemoryCards] = useState([])
  var [checkCards, setCheckCards] = useState([])
  var [lastRoundCard, setLastRoundCard] = useState([])
  var [allGuesses, setAllGuesses] = useState([])
  var [allCorrect, setAllCorrect] = useState(0)
  const [pairs, setPairs] = useState(0)

  function shuffle(arr) {
    var j, x, index
    for (index = arr.length - 1; index > 0; index--) {
      j = Math.floor(Math.random() * (index + 1))
      x = arr[index]
      arr[index] = arr[j]
      arr[j] = x
    }
    return arr
  }

  function HandleChange(e) {
    setPairs(e.target.value)
  }

  function CreateCards(e) {
    e.preventDefault()
    if (allGuesses.length > 0) {
      for (let i = 0; i < allGuesses.length; i++) {
        allGuesses[i][0].style.display = 'flex'
        allGuesses[i][1].style.display = 'none'
        allGuesses[i][2].style.display = 'none'
      }
      setAllGuesses((allGuesses = []))
      setAllCorrect(0)
    }
    let tempArray = []
    for (let i = 0; i < pairs; i++) {
      let red = Math.floor(Math.random() * 256)
      let green = Math.floor(Math.random() * 256)
      let blue = Math.floor(Math.random() * 256)

      tempArray.push([red, green, blue])
      tempArray.push([red, green, blue])
      let shuffleArray = shuffle(tempArray)
      setMemoryCards((memoryCards = shuffleArray))
    }
  }

  function cardChecker(e) {
    let id = e.currentTarget.id
    let elephantCard = e.currentTarget.firstChild
    let clearCard = e.currentTarget.firstChild.nextElementSibling
    let rgbCard = e.currentTarget.lastChild
    let tempArray = lastRoundCard
    let tempArray2 = allGuesses
    tempArray.push([elephantCard, clearCard, rgbCard])
    tempArray2.push([elephantCard, clearCard, rgbCard])
    setAllGuesses((allGuesses = tempArray2))
    setLastRoundCard((lastRoundCard = tempArray))
    let array = checkCards
    array.push(id)
    setCheckCards((checkCards = array))
    setTimeout(function () {
      if (checkCards.length === 2) {
        if (checkCards[0] === checkCards[1]) {
          lastRoundCard[1][2].style.display = 'none'
          lastRoundCard[0][2].style.display = 'none'
          lastRoundCard[1][1].style.display = 'flex'
          lastRoundCard[0][1].style.display = 'flex'
          setTimeout(function () {
            setLastRoundCard((lastRoundCard = []))
            setCheckCards((checkCards = []))
            setAllCorrect(allCorrect + 1)
          }, 100)
        } else if (checkCards[0] !== checkCards[1]) {
          lastRoundCard[1][2].style.display = 'none'
          lastRoundCard[0][2].style.display = 'none'
          lastRoundCard[1][0].style.display = 'flex'
          lastRoundCard[0][0].style.display = 'flex'
          setTimeout(function () {
            setLastRoundCard((lastRoundCard = []))
            setCheckCards((checkCards = []))
          }, 100)
          console.log(rgbCard)
        }
      }
    }, 1500)
  }

  function memoryHandler(e) {
    e.preventDefault()
    if (checkCards.length > 1) {
      return null
    } else {
      let firstChild = e.currentTarget.firstElementChild
      firstChild.style.display = 'none'
      let lastChild = e.currentTarget.lastElementChild
      lastChild.style.display = 'flex'

      cardChecker(e)
    }
  }

  return (
    <MemoryContainer>
      <MemoryHeader>
        <MemoryLogo src={Logo} />
        <h3>
          Guesses {allGuesses.length / 2} <br />
          Correct {allCorrect}
        </h3>
        <form onSubmit={CreateCards}>
          <label for='pairs'>How many Pairs of Cards?</label>
          <br />
          <input type='number' onChange={HandleChange} id='pairs' />
          <br />
          <input type='submit' value='Submit' />
        </form>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h3>Back to Main</h3>
        </Link>
      </MemoryHeader>

      <MemoryBoard>
        {memoryCards.map((card, index) => (
          <MemoryDiv id={card} key={index} onClick={memoryHandler}>
            <MemoryCardHidden src={Logo}></MemoryCardHidden>

            <MemoryCardHidden
              src={Clear}
              style={{
                display: 'none',
                backgroundColor: `rgba(${card[0]}, ${card[1]}, ${card[2]}, 1)`,
              }}
            ></MemoryCardHidden>

            <MemoryCard
              style={{
                display: 'none',
                backgroundColor: `rgba(${card[0]}, ${card[1]}, ${card[2]}, 1)`,
              }}
            >
              R {card[0]} <br />G {card[1]} <br />B {card[2]}
            </MemoryCard>
          </MemoryDiv>
        ))}
      </MemoryBoard>
    </MemoryContainer>
  )
}

export default Memory
