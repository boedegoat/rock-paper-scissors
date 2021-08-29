import React from 'react'
import ScoreBoard from './ScoreBoard'
import Logo from '../assets/images/logo.svg'

const Header = () => {
  return (
    <header className='self-stretch flex items-center justify-between rounded-md p-3 ring-2 ring-neutral-header'>
      <div className='w-20 -mb-1'>
        <img src={Logo} alt='logo' />
      </div>
      <ScoreBoard />
    </header>
  )
}

export default Header
