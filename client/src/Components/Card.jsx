import React from 'react'
import { motion ,useMotionValue , useTransform } from 'motion/react'
const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100 , 100] , [30 , -30])
  const rotateY = useTransform(x, [-100 , 100] , [-30 , 30])
  return (
    <section className='relative h-[70vh] lg:h-auto flex justify-center items-center  bg--300  lg:pt-36 lg:pb-10 font-inter px-4  overflow-hidden'>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    <motion.div 
    style={{x , y ,rotateX , rotateY ,z:100}}
    drag
    dragElastic={0.18}
    dragConstraints={{top:0 , left:0 ,right:0 ,bottom:0}}
    whileTap={{cursor:'grabbing'}}
    className=' w-full max-w-[337px]   flex items-end '>
          <div className='relative w-full  rounded-xl bg-white px-2 sm:px-5 pb-6 cursor-grab'
          style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}
          >
                <motion.img 
                style={{x , y ,rotateX , rotateY ,z:100000}}
                src='/images/main.png' alt='food' width={224} className='absolute bottom-[72%] left-1/2 transform -translate-x-1/2 bg--400 w-[180px] lg:w-[224px]'/>
                <div className='flex flex-col gap-3 mt-36 items-start justify-center bg--300'>
                    <span className='text-[3E312D] text-base sm:text-xl font-bold'>Avocado Sandwich</span>
                    <div className='flex gap-0.5 sm:gap-1'>
                          <div className='flex justify-center gap-1 items-center px-2 sm:px-4 py-1 bg-[#ADBC76] rounded-full shadow-lg text-xs sm:text-base'><img src='/images/avocado.png' alt='avocado' className='size-4'/><span>Avocado</span></div>
                          <div className='flex justify-center gap-1 items-center px-2 sm:px-4 py-1 bg-[#F6F1F2] rounded-full shadow-lg text-xs sm:text-base'><img src='/images/garlic.png' alt='avocado' className='size-4'/><span>Garlic</span></div>
                          <div className='flex justify-center gap-1 items-center px-2 sm:px-4 py-1 bg-[#F6D6A2] rounded-full shadow-lg text-xs sm:text-base'><img src='/images/bread.png' alt='avocado' className='size-4'/><span>Bread</span></div>
                    </div>
                    <p className='text-sm text-[#3E312D]'>The top choice among all our customers, delicious, healthy and a part of an amazing breakfast!</p>
                    <div className='flex items-center justify-between w-full mt-2 sm:mt-4'>
                          <span className='text-[#3E312D] text-xl sm:text-3xl font-bold'>$15</span>
                          <motion.button 
                          style={{x , y ,rotateX , rotateY ,z:100000}}
                          className='flex items-center justify-center shadow-[1.5px_2px_1px_rgba(153,165,107,1)] rounded-xl gap-1 bg-[#C7E755] p-2 sm:p-4'>
                                  <img src='/images/cart.png' alt='cart' className='size-3 sm:size-5' />
                                  <span className='text-sm sm:text-base text-[#3E312D]'>Add to cart</span>
                          </motion.button>
                    </div>
                </div>
          </div>
    </motion.div>
    </section>
  )
}

export default Card
