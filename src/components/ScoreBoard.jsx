import React from 'react'

const ScoreBoard = () => {
  return (
    <div className='bg-white flex flex-col items-center justify-center px-5 py-2 rounded-md'>
      <small className='text-neutral-score uppercase text-[10px] font-bold'>score</small>
      <big className='text-neutral-dark text-4xl font-bold -mt-1'>12</big>
    </div>
  )
}

export default ScoreBoard
