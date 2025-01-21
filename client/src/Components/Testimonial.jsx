import React from 'react'
import { testimonialsData } from '../Utils/Constant'

const Testimonial = () => {
  return (
     <div className='Testimonials w-[100%] p-2 rounded bg-[#AC8968] font-inter text-lg my-4 md:my-6 lg:my-16 flex flex-col items-center '>
                      <div className='Testimonials-heading flex flex-col items-center gap-1 bg--300 py-2 lg:py-4'>
                         <p className='text-[#3E362E] font-semibold lg:text-2xl'>Loved by <span className='text-[#ECE0D4]'>Developers</span></p>
                         <p className='text-center text-[#3E362E90]'>Real stories from users who have transformed their projects with EasyUI.</p>
                      </div>
                      <div className='Cards flex flex-col gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-3 '>
                      {testimonialsData.map((item) =>(
                         <div key={item.id} className='Testimonials-Card flex flex-col gap-4 p-4 border-[1px] border-[#3E362E50] rounded'>
                         <div className='Name-Image flex items-center gap-2'>
                              <img src={item.image} alt='user' className='size-6 lg:size-9 rounded-full'/>
                              <p className='text-[#3E362E] font-semibold'>{item.name}</p>
                         </div>
                         <p className='descrption text-[#3E362E90] text-base'>
                         {item.description}
                         </p>
                       </div>
                      ))}
                     </div>
                     <button className='border-[1px]  border-[#3E362E90] text-[#ECE0D4] text-sm md:text-base lg:text-lg font-inter p-2 rounded mt-4 '>Share your Expeirence</button>
                </div>
  )
}

export default Testimonial
