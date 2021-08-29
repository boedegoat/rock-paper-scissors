import React, { useEffect, useState } from 'react'
import { useGameContext } from '../store/GameProvider'

const ScoreBoard = () => {
  const [{ score, result }] = useGameContext()
  const [scoreEffect, setScoreEffect] = useState('')

  console.log(result)

  useEffect(() => {
    if (!result) return
    switch (result) {
      case 'win':
        setScoreEffect('bg-green-200')
        break
      case 'lose':
        setScoreEffect('bg-red-200')
        break
    }
  }, [result])

  useEffect(() => {
    setTimeout(() => {
      setScoreEffect('')
    }, 400)
  }, [scoreEffect])

  return (
    <div
      className={`bg-white flex flex-col items-center justify-center px-5 py-2 rounded-md transition ${scoreEffect} `}
    >
      <small className='text-neutral-score uppercase text-[10px] font-bold'>score</small>
      <big className='text-neutral-dark text-4xl font-bold -mt-1'>{score}</big>
    </div>
  )
}

export default ScoreBoard
