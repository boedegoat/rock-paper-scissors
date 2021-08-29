import React, { Fragment, useState } from 'react'
import Header from './components/Header'
import GameBoard from './components/GameBoard'
import Rules from './components/Rules'

const App = () => {
  const [showRules, setShowRules] = useState(false)

  return (
    <div className='bg-main min-h-screen text-white p-7 flex flex-col justify-between items-center'>
      {showRules ? (
        <Rules setShowRules={setShowRules} />
      ) : (
        <Fragment>
          <Header />
          <GameBoard />
          <button
            onClick={() => setShowRules(true)}
            className='uppercase tracking-wider py-2 px-10 border-2 rounded-md text-xs text-gray-300 border-gray-300'
          >
            rules
          </button>
        </Fragment>
      )}
    </div>
  )
}

export default App
