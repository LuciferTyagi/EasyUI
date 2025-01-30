import { faUpload, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import { checkValidData } from '../Utils/validate.js'

const TestimonialPopup = ({onClose}) => {
    const name = useRef(null);
    const email = useRef(null);
    const feedback = useRef(null);
    const photo = useRef(null);
    const [validationError , setValidationError] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);
    const handleButtonClick = ()=>{
        const message =  checkValidData(name.current.value,email.current.value);
        setValidationError(message);
        if (!message) {
            name.current.value = '';
            email.current.value = '';
            feedback.current.value = '';
            setPhotoPreview(null);
            if (photo.current) photo.current.value = '';
        }
        
    }
    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => setPhotoPreview(reader.result);
          reader.readAsDataURL(file);
        }
      };
      const handleImageClick = () =>{
        photo.current.click();
      }
  return (
    <div className='fixed inset-0 backdrop-blur-sm font-inter flex items-center justify-center'>
        <div className='w-[30%] font-he  bg-green-400   flex flex-col gap-2 p-4'>
            <FontAwesomeIcon onClick={onClose} icon={faX} className='mr-auto cursor-pointer'/>
            <form onSubmit={(e) => e.preventDefault()} className=' flex justify-between items-center   bg-red-400'>
                <div className='w-[65%] flex flex-col gap-2 bg--300 '>   
                <input ref={name} type='name' placeholder='Full Name' className='w-fit p-2 rounded-md outline-none'/>
                <input ref={email} type='email' placeholder='Email Address' className='w-fit p-2 rounded-md outline-none' />
                <textarea ref={feedback} type='text' placeholder='Your Feedback' className='w-[] min-h-[80px] p-2 rounded-md outline-none'/>
                <p>{validationError}</p>
                <button onClick={handleButtonClick} className='border-[1px] border-[#3E362E] py-2 px-4 w-fit rounded-md ' >Submit</button>
                </div>
                <div className='flex flex-col'>

                <div onClick={handleImageClick} className='Photo size-40 bg-white flex items-center justify-center rounded-full overflow-hidden'
                style={{
                    backgroundImage: photoPreview ? `url(${photoPreview})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                > 
                    {/* {!photoPreview ? <FontAwesomeIcon icon={faUpload} className=''/> : } */}
                    
      
                </div>
                <input ref={photo} type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                </div>

               
            </form>
            
        </div>
    </div>
  )
}

export default TestimonialPopup
