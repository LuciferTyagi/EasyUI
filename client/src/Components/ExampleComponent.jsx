import { useTime, useTransform } from 'framer-motion'
import React from 'react'
import { motion } from 'framer-motion';
import Card from './Card';

const ExampleComponent = () => {
const time = useTime();
const rotate = useTransform(time , [0,3000] , [0,360],{
    clamp:false,
})
const rotatingBg = useTransform(rotate,(r) =>{
    return `conic-gradient(from ${r}deg, #00416A, #E4E5E6)`
})
  return (
    <section className='w-full  px-4 py-20 font-inter bg--300'>
             <div className='Parent w-full  max-w-[1400px]   mx-auto flex flex-col gap-4 bg-pnk-300'>
                    <div className='First-Child Information flex flex-col items-center gap-2 justify-center bg--300'>
                        <div className='relative'>
                            <div className='relative bg-white py-2 px-5 rounded-xl z-10'>
                                <span className='text-3xl bg-gradient-to-bl from-[#00416A] to-[#E4E5E6] font-bold text--600 bg-clip-text text-transparent'>100+</span>
                            </div>
                            <motion.div className='absolute -inset-[1px] rounded-xl'
                            style={{background:
                               rotatingBg
                            }}
                            />
                        </div>
                        <h2 className='text-2xl font-semibold mt-4 text-zinc-700'>Tailwind CSS Components</h2>
                        <p className='text-base text-center text-zinc-500'>Every component is styled with Tailwind CSS for easy customization using utility-first classes.</p>
                    </div>

                    <div className='Second-Child Component-Card bg--300 border-[1px] border-zinc-300 rounded-xl p-4 shadow-md'>
                        <h3 className='text-center mb-4 text-2xl font-medium text-zinc-700'>3D Card Effect</h3>
                        <div className='grid grid-cols-1 gap-2 '>
                             <Card/>
                        </div>
                    </div>
             </div>
    </section>
  )
}

export default ExampleComponent
