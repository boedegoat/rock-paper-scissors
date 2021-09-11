import React from 'react'
import IconPaper from '../assets/images/icon-paper.svg'
import IconRock from '../assets/images/icon-rock.svg'
import IconScissors from '../assets/images/icon-scissors.svg'

const SelectFinger = ({ finger, className, ...props }) => {
  const Icon =
    finger === 'paper'
      ? IconPaper
      : finger === 'rock'
      ? IconRock
      : finger === 'scissors'
      ? IconScissors
      : ''

  const alt =
    finger === 'paper'
      ? 'icon paper'
      : finger === 'rock'
      ? 'icon rock'
      : finger === 'scissors'
      ? 'icon scissors'
      : ''

  const bg =
    finger === 'paper'
      ? 'bg-paper'
      : finger === 'rock'
      ? 'bg-rock'
      : finger === 'scissors'
      ? 'bg-scissors'
      : 'bg-transparent'

  return (
    <div className={`p-3 rounded-full w-max ${bg} ${className}`} {...props}>
      <div
        className={`
          ${finger ? 'bg-white' : 'bg-neutral-dark'}
          p-3 rounded-full w-20 h-20 md:w-32 md:h-32 flex items-center 
          ${finger && 'border-t-4 border-gray-300'}
          justify-center
        `}
      >
        <img src={Icon} alt={alt} className='w-10 md:w-14' />
      </div>
    </div>
  )
}

export default SelectFinger
