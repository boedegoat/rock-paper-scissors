import React from 'react'

const SelectFinger = ({ Icon, alt, bg, position }) => {
  return (
    <button className={`absolute p-3 rounded-full w-max shadow-md ${bg} ${position}`}>
      <div className='bg-white p-3 rounded-full w-20 h-20 flex items-center justify-center border-t-4 border-gray-300'>
        <img src={Icon} alt={alt} className='w-10' />
      </div>
    </button>
  )
}

export default SelectFinger
