import React from 'react'
import { installationSteps, stepData } from '../Utils/Constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

const Installation = () => {
  return (
    <div className='w-full bg-pink-300  flex flex-col'>
          <div className='First-Child flex flex-col sm:gap-2 bg-yellow-200'>
                <h1 className='text-2xl sm:text-3xl text-zinc-700 font-semibold'>Installation</h1> 
                <h3 className='text-base sm:text-xl text-zinc-700 font-medium'>Easy UI</h3>
                <p className='text-xs sm:text-sm text-zinc-500'>It is just a 3 steps process...</p> 
          </div>

          <div className='Stepper  w-full bg-red-300 flex items-center justify-center my-10'>
                
                    {stepData.map((step , index) =>(
                        <div key={index} className='bg-red-400 relative flex flex-col justify-center items-center w-full sm:w-40 before:absolute before:h-[1px] before:bg-black before:w-full before:top-1/3 before:right-2/4 before:-translate-y-2/4 before:first:hidden'>
                        
                        <div className='size-6 sm:size-10 text-xs sm:text-base font-semibold text-white flex items-center justify-center z-10 relative bg-slate-700 rounded-full '>{index + 1}</div>
                        <span className='text-xs sm:text-sm text-zinc-500 font-medium'>{step}</span>
                     </div>   
                    ))}
                
          </div>

      
            <div className="flex flex-col gap-10">
      {installationSteps.map((step) => (
        <div key={step.id} className="flex flex-col bg--600">
          <div className="flex items-start gap-1 sm:gap-3">
            <div className="bg-slate-900 rounded-full text-xs sm:text-base size-6 sm:size-10 flex justify-center items-center text-white font-semibold">{step.id}</div>
            <div className="w-full sm:w-[600px]">
              <h3 className="text-sm sm:text-lg text-zinc-700 font-medium">{step.title}</h3>
              <p className="text-zinc-500 text-xs sm:text-sm my-2">{step.description}</p>
              <div style={{boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",}}className="rounded-lg p-2 sm:p-4 text-xs sm:text-sm text-zinc-500 bg--600" >
                <div className="bg--700 flex items-start justify-between ">
                  <div>
                    {step.commands.map((command, index) => (
                      <p key={index} className="first:my-0 my-2">
                        {command}
                      </p>
                    ))}
                  </div>
                  <button>
                    <FontAwesomeIcon icon={faCopy} className="size-3 sm:size-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
           </div>
    </div>
  )
}

export default Installation
