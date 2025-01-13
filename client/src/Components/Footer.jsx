import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
    <div className='flex flex-col gap-3 w-[100%] bg-[#865D36] p-2 font-inter text-lg'>
      <img src='/images/LOGO.png'  alt='logo' className='size-7'/>
      <div className='Socials flex gap-3 text-xl'>
      <FontAwesomeIcon icon={faLinkedin}  className='text-[#ECE0D4]'/>
      <FontAwesomeIcon icon={faGithub}    className='text-[#ECE0D4]'/>
      <FontAwesomeIcon icon={faXTwitter}  className='text-[#ECE0D4]'/>
      </div>
      <p className='text-[#ECE0D4] font-medium'>Information</p>
      <div className='flex gap-3 text-base text-[#3E362E] '>
        <p>About Us</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
      <p className='text-[#ECE0D4] font-medium'>Contact Us</p>
      <div className='flex gap-3 text-base text-[#3E362E]'>
        <p>+91XXXXXXXXXX</p>
        <p>yagyanshtyagi61@gmail.com</p>
      </div>
    </div>
      <p className=' bg-[#865D36] font-inter text-[#ECE0D4] w-full text-center'>Build by @YagyanshTyagi</p>
    </div>
  )
}

export default Footer
