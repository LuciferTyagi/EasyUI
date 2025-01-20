import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { heroCardData } from '../Utils/Constant.js'

const HeroCard = () => {
  return (
    <>
      {heroCardData.map((card) =>(
          <div key={card.id} className='Hero-Card w-[100%] border-[1px] rounded border-[#3E362E50] flex gap-4 p-2 shadow-md cursor-pointer '>
          <FontAwesomeIcon icon={card.icon}  className='text-[#865D36] size-7 md:size-8 mt-1'/>
          <div className='Card-info flex flex-col font-inter text-base md:text-lg gap-2  '>
          <p className='text-[#3E362E] font-semibold'>{card.title}</p>
          <p className='font-medium text-[#3E362E90]' >{card.description}</p>
          </div>          
          </div>
          ))}
    </>
  )
}

export default HeroCard
