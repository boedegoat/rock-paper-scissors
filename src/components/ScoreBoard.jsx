import React from 'react'
import { useGameContext } from '../store/GameProvider'

const ScoreBoard = () => {
  const [{ score }] = useGameContext()

  return (
    <div className='bg-white flex flex-col items-center justify-center px-5 py-2 rounded-md'>
      <small className='text-neutral-score uppercase text-[10px] font-bold'>score</small>
      <big className='text-neutral-dark text-4xl font-bold -mt-1'>{score}</big>
    </div>
  )
}

export default ScoreBoard
