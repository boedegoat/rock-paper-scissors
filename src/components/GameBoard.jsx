import React from 'react'
import Triangle from '../assets/images/bg-triangle.svg'
import SelectFinger from './SelectFinger'
import IconPaper from '../assets/images/icon-paper.svg'
import IconRock from '../assets/images/icon-rock.svg'
import IconScissors from '../assets/images/icon-scissors.svg'

const GameBoard = () => {
  return (
    <div className='relative mt-20'>
      <div className='transform scale-[0.6]'>
        <img src={Triangle} alt='triangle' />
      </div>
      <SelectFinger
        Icon={IconPaper}
        bg='bg-paper'
        position='top-0 left-0'
        alt='select paper'
      />
      <SelectFinger
        Icon={IconScissors}
        bg='bg-scissors'
        position='top-0 right-0'
        alt='select scissors'
      />
      <SelectFinger
        Icon={IconRock}
        bg='bg-rock'
        position='bottom-0 left-1/2 transform -translate-x-1/2'
        alt='select rock'
      />
    </div>
  )
}

export default GameBoard
