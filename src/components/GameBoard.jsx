import React, { useEffect } from 'react'
import Triangle from '../assets/images/bg-triangle.svg'
import SelectFinger from './SelectFinger'

import { useGameContext } from '../store/GameProvider'
import ResultDisplay from './ResultDisplay'

const GameBoard = () => {
  const [{ userFinger, compFinger, result }, dispatch] = useGameContext()

  function setUserFinger(finger) {
    dispatch({
      type: 'SET_USER_FINGER',
      userFinger: finger,
    })

    setTimeout(() => {
      setCompFinger()
    }, 600)
  }

  function setCompFinger() {
    const random = Math.floor(Math.random() * 3)

    let finger = ''
    switch (random) {
      case 0:
        finger = 'rock'
        break
      case 1:
        finger = 'paper'
        break
      case 2:
        finger = 'scissors'
        break
    }

    dispatch({
      type: 'SET_COMP_FINGER',
      compFinger: finger,
    })

    dispatch({
      type: 'CALCULATE_RESULT',
    })
  }

  function resetGame() {
    dispatch({
      type: 'RESET',
    })
  }

  useEffect(() => {
    if (!result) return
    switch (result) {
      case 'win':
        dispatch({ type: 'INCREMENT_SCORE' })
        break
      case 'lose':
        dispatch({ type: 'DECREMENT_SCORE' })
        break
    }
  }, [result])

  if (!userFinger) {
    return (
      <div className='relative'>
        <div className='transform scale-[0.6] md:scale-[0.8]'>
          <img src={Triangle} alt='triangle' />
        </div>
        <SelectFinger
          finger='paper'
          onClick={() => setUserFinger('paper')}
          className='cursor-pointer absolute top-0 left-0 md:-top-8 md:-left-8'
        />
        <SelectFinger
          finger='scissors'
          onClick={() => setUserFinger('scissors')}
          className='cursor-pointer absolute top-0 right-0 md:-top-8 md:-right-8'
        />
        <SelectFinger
          finger='rock'
          onClick={() => setUserFinger('rock')}
          className='cursor-pointer absolute bottom-0 md:-bottom-8 left-1/2 transform -translate-x-1/2'
        />
      </div>
    )
  }

  // if user has selected a finger
  return (
    <div className='w-full'>
      {/* finger display */}
      <div className='flex justify-between md:items-center md:justify-center md:space-x-52'>
        <div className={`flex flex-col items-center ${result ? 'translate-x-20' : ''}`}>
          <SelectFinger finger={userFinger} className='md:order-2 md:scale-[1.7]' />
          <p className='uppercase text-sm whitespace-nowrap tracking-wide md:text-xl md:order-1 mt-5 md:mt-0 md:mb-20'>
            you picked
          </p>
        </div>
        <ResultDisplay
          result={result}
          resetGame={resetGame}
          className={`hidden translate-y-10 ${result ? 'md:block' : ''}`}
        />
        <div className={`flex flex-col items-center ${result ? '-translate-x-20' : ''}`}>
          <SelectFinger finger={compFinger} className='md:order-2 md:scale-[1.7]' />
          <p className='uppercase whitespace-nowrap text-sm tracking-wide md:text-xl md:order-1 mt-5 md:mt-0 md:mb-20'>
            the house picked
          </p>
        </div>
      </div>

      <ResultDisplay
        result={result}
        resetGame={resetGame}
        className={`mt-8 md:hidden ${
          result ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />
    </div>
  )
}

export default GameBoard
