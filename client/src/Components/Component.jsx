import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import PageInfo from './PageInfo';
import BaseComponent from './BaseComponent';
const Component = () => {
    const[SideBar ,setSideBar] = useState(false);
    const [selectedItem, setSelectedItem] = useState("About this Page");
    const [categories , setCategories] = useState([]);

    useEffect(()=>{
        const fetchCategories = async () =>{
            const response  = await fetch("http://localhost:8000/api/categories")
            const data = await response.json();
            setCategories(data);
            console.log(data);
        }
        fetchCategories();
    },[]);
  return (
    <div className='flex flex-col'>
            <div className='flex items-center ml-auto mt-2 mr-2 p-2 border-[1px] border-[#3E362E] rounded-md  gap-2   bg--400 cursor-pointer'
              onClick={() => setSideBar(!SideBar)}
            >
                <FontAwesomeIcon icon={faArrowRight} className='text-[#3E362E]'/>
                <p className='text-[#3E362E] text-base'>Sidebar</p>
            </div>
            {SideBar && (
                <div className='absolute top-0 Sidebar bg-[#A69080] w-[70%] h-screen'>
                    <div className='Close-button ml-auto mr-2 mt-2 rounded-[100%] border-[1px] border-[#3E362E] size-8 flex items-center justify-center'>
                        <FontAwesomeIcon icon={faXmark} className='text-[#3E362E] cursor-pointer' onClick={() => setSideBar(!SideBar)}/>
                    </div>
                    <div className={`Default-Page flex gap-2 items-center mr-auto p-2 cursor-pointer ${selectedItem === "About this Page" ? "bg-[#3E362E] text-white" :"text-[#3E362E]"}`}
                    onClick={() => {
                      setSelectedItem("About this Page")
                      setSideBar(!SideBar)
                    }}
                    >
                    <FontAwesomeIcon icon={faAddressCard} />
                    <p className='text-base font-normal '>About this Page</p>
                    </div>
                    {categories.map((category) =>(
                        <>
                        <p className='text-base font-semibold ml-2 mt-4'>{category.name}</p>
                        <div className='Component-list flex flex-col gap-2 mt-2 ml-4'
                        onClick={()=> setSideBar(!SideBar)}
                        >
                            {category.items.map((item ,index) =>(
                                <p key={index} className={`text-base font-normal p-2 cursor-pointer ${selectedItem === item.name ? "bg-[#3E362E] text-white" : "text-[#3E362E]"}`}onClick={() => setSelectedItem(item.name)}>{item.name}</p>
                            ))}
                        </div>
                        </>
                    ))}
                    {/* <p className='text-base font-semibold ml-2 mt-4'>Base Components</p>
                    <div className='Component-list flex flex-col gap-2 mt-2 ml-4'
                    onClick={()=> setSideBar(!SideBar)}
                    >
                        {["Accordion", "Alerts", "Avatar", "Avatar Group", "Badge", "Buttons"].map((item) => (
                            <p key={item} className={`text-base font-normal p-2 cursor-pointer ${selectedItem === item ? "bg-[#3E362E] text-white" : "text-[#3E362E]"}`}onClick={() => setSelectedItem(item)}>{item}</p>
                        ))}
                    </div>   */}
                </div>
            )}
            <div className=' bg--500
            '>
                {selectedItem === "About this Page" ? (
                    <PageInfo />
                ) : (
                    <BaseComponent name={selectedItem} categories={categories}/>
                )}
            </div>
    </div>
  )
}

export default Component
