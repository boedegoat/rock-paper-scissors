import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import GameBoard from './components/GameBoard'
import Rules from './components/Rules'
import { useGameContext } from './store/GameProvider'

const App = () => {
  const [showRules, setShowRules] = useState(false)
  const [_, dispatch] = useGameContext()

  useEffect(() => {
    dispatch({
      type: 'SET_SCORE_FROM_LOCALSTORAGE',
    })
  }, [])

  return (
    <div className='bg-main'>
      <div className='mx-auto max-w-2xl min-h-screen text-white p-7 md:py-10 flex flex-col justify-between md:justify-start items-center'>
        <Header />
        <GameBoard />
        <button
          onClick={() => setShowRules(true)}
          className='uppercase tracking-wider py-2 px-10 border-2 rounded-md text-xs text-gray-300 border-gray-300 md:absolute md:bottom-4 md:right-4 transition transform md:hover:-translate-y-2'
        >
          rules
        </button>
        {showRules && <Rules showRules={showRules} setShowRules={setShowRules} />}
      </div>
    </div>
  )
}

export default App
