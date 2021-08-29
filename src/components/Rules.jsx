import React from 'react'
import ImageRules from '../assets/images/image-rules.svg'
import IconClose from '../assets/images/icon-close.svg'

const Rules = ({ setShowRules }) => {
  return (
    <div className='fixed flex flex-col justify-between items-center inset-0 bg-white text-center py-20'>
      <h1 className='text-neutral-dark uppercase font-bold text-3xl'>rules</h1>
      <img src={ImageRules} alt='image rules' className='w-56 mx-auto' />
      <button className='p-2' onClick={() => setShowRules(false)}>
        <img src={IconClose} alt='icon close' className='w-6 h-6' />
      </button>
    </div>
  )
}

export default Rules
