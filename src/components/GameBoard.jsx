import React, { Fragment, useEffect } from 'react'
import Triangle from '../assets/images/bg-triangle.svg'
import SelectFinger from './SelectFinger'

import { useGameContext } from '../store/GameProvider'

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

  return (
    <Fragment>
      {userFinger ? (
        <div className='w-full'>
          {/* finger display */}
          <div className='flex justify-between'>
            <div className='flex flex-col items-center'>
              <SelectFinger finger={userFinger} />
              <p className='uppercase text-sm tracking-wide mt-5'>you picked</p>
            </div>
            <div className='flex flex-col items-center'>
              <SelectFinger finger={compFinger} />
              <p className='uppercase text-sm tracking-wide mt-5'>the house picked</p>
            </div>
          </div>

          {/* result display */}
          <div
            className={`
          ${result ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          mt-10 px-10 text-center`}
          >
            <h1 className='uppercase text-5xl'>you {result}</h1>
            <button
              className='uppercase bg-white text-neutral-dark w-full py-2 tracking-widest mt-4 rounded-md text-sm'
              onClick={resetGame}
            >
              play again
            </button>
          </div>
        </div>
      ) : (
        <div className='relative'>
          <div className='transform scale-[0.6]'>
            <img src={Triangle} alt='triangle' />
          </div>
          <SelectFinger
            finger='paper'
            onClick={() => setUserFinger('paper')}
            className='cursor-pointer absolute top-0 left-0'
          />
          <SelectFinger
            finger='scissors'
            onClick={() => setUserFinger('scissors')}
            className='cursor-pointer absolute top-0 right-0'
          />
          <SelectFinger
            finger='rock'
            onClick={() => setUserFinger('rock')}
            className='cursor-pointer absolute bottom-0 left-1/2 transform -translate-x-1/2'
          />
        </div>
      )}
    </Fragment>
  )
}

export default GameBoard
