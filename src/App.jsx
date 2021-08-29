import React, { useState } from 'react'
import Header from './components/Header'
import GameBoard from './components/GameBoard'
import Rules from './components/Rules'
import GameProvider from './store/GameProvider'

const App = () => {
  const [showRules, setShowRules] = useState(false)

  return (
    <div className='bg-main min-h-screen text-white p-7 pb-10 flex flex-col justify-between items-center'>
      <GameProvider>
        <Header />
        <GameBoard />
        <button
          onClick={() => setShowRules(true)}
          className='uppercase tracking-wider py-2 px-10 border-2 rounded-md text-xs text-gray-300 border-gray-300'
        >
          rules
        </button>
        {showRules && <Rules setShowRules={setShowRules} />}
      </GameProvider>
    </div>
  )
}

export default App
