import React from 'react'
import { testimonialsData } from '../Utils/Constant'

const Testimonial = () => {
  return (
     <div className='Testimonials w-[85%] p-4 rounded bg-[#AC8968] font-inter text-lg flex flex-col gap-6 '>
                      <div className='Testimonials-heading flex flex-col items-center gap-1'>
                         <p className='text-[#3E362E] font-semibold'>Loved by <span className='text-[#ECE0D4]'>Developers</span></p>
                         <p className='text-center text-[#3E362E90]'>Real stories from users who have transformed their projects with EasyUI.</p>
                      </div>
                      {testimonialsData.map((item) =>(
                         <div key={item.id} className='Testimonials-Card flex flex-col gap-4 p-4 border-[1px] border-[#3E362E50] rounded'>
                         <div className='Name-Image flex items-center gap-2'>
                              <img src={item.image} alt='user' className='size-9 rounded-full'/>
                              <p className='text-[#3E362E] font-semibold'>{item.name}</p>
                         </div>
                         <p className='descrption text-[#3E362E90] text-base'>
                         {item.description}
                         </p>
                       </div>
                      ))}
                   
                </div>
  )
}

export default Testimonial
