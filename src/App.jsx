import React from 'react'
import Header from './components/Header'
import GameBoard from './components/GameBoard'

const App = () => {
  return (
    <div className='bg-main min-h-screen text-white p-7 flex flex-col justify-between items-center'>
      <Header />
      <GameBoard />
      <button className='uppercase tracking-wider py-2 px-10 border-2 rounded-md text-xs text-gray-300 border-gray-300'>
        rules
      </button>
    </div>
  )
}

export default App
