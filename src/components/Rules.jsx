import React, { Fragment } from 'react'
import ImageRules from '../assets/images/image-rules.svg'
import IconClose from '../assets/images/icon-close.svg'

const Rules = ({ setShowRules }) => {
  return (
    <Fragment>
      <div
        className='hidden md:block fixed inset-0 bg-black bg-opacity-50'
        onClick={() => setShowRules(false)}
      ></div>
      <div className='fixed flex flex-col justify-between items-center bg-white text-center w-full top-0 h-full md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:w-80 md:h-auto px-6 py-20 md:py-6 space-y-10 md:rounded-lg md:shadow-lg'>
        <h1 className='text-neutral-dark uppercase font-bold text-3xl md:w-full md:flex md:items-center md:justify-between'>
          rules
          <button className='hidden md:inline-block' onClick={() => setShowRules(false)}>
            <img src={IconClose} alt='icon close' className='w-4 h-4' />
          </button>
        </h1>
        <img src={ImageRules} alt='image rules' className='mx-auto md:m-0' />
        <button className='inline-block md:hidden' onClick={() => setShowRules(false)}>
          <img src={IconClose} alt='icon close' className='w-6 h-6' />
        </button>
      </div>
    </Fragment>
  )
}

export default Rules
