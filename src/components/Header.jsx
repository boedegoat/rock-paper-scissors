import React from 'react'
import ScoreBoard from './ScoreBoard'

const Header = () => {
  return (
    <header className='flex items-center justify-between rounded-md p-3 ring-2 ring-neutral-header'>
      <h1 className='leading-none text-lg ml-2'>
        ROCK
        <br />
        PAPER
        <br />
        SCISSORS
      </h1>
      <ScoreBoard />
    </header>
  )
}

export default Header
