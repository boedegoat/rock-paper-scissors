import React from 'react'
import Header from './components/Header'
import GameBoard from './components/GameBoard'

const App = () => {
  return (
    <div className='bg-main min-h-screen text-white p-7'>
      <Header />
      <GameBoard />
      {/* rules button */}
    </div>
  )
}

export default App
