import React from 'react'

const ResultDisplay = ({ result, resetGame, className }) => {
  return (
    <div className={`text-center ${className}`}>
      <h1 className='uppercase text-5xl whitespace-nowrap'>
        {result === 'draw' ? 'draw' : `you ${result}`}
      </h1>
      <button
        className='uppercase bg-white text-neutral-dark w-full py-2 tracking-widest mt-4 rounded-md text-sm'
        onClick={resetGame}
      >
        play again
      </button>
    </div>
  )
}

export default ResultDisplay
