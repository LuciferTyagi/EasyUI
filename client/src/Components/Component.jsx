import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import PageInfo from './PageInfo';
import BaseComponent from './BaseComponent';
const Component = () => {
    const[SideBar ,setSideBar] = useState(false);
    const [selectedItem, setSelectedItem] = useState("About this Page");
    const [categories , setCategories] = useState([]);
    const sidebarRef = useRef();
    const closeSidebar = (e) =>{
        if(sidebarRef.current === e.target){
            setSideBar(false)
        }
    }

    useEffect(()=>{
        const fetchCategories = async () =>{
            const response  = await fetch("https://easy-ui-server.vercel.app/api/categories")
            const data = await response.json();
            setCategories(data);
            console.log(data);
        }
        fetchCategories();
    },[]);
  return (
    <div className='container bg-green-500 mx-auto flex flex-col lg:flex-row font-inter h-[94vh] overflow-y-scroll'>
            <div className='lg:hidden flex items-center ml-auto mt-2 mr-2 p-2 border-[1px] border-[#3E362E] rounded-md  gap-2   bg--400 cursor-pointer'
              onClick={() => setSideBar(!SideBar)}
            >
                <FontAwesomeIcon icon={faArrowRight} className='text-[#3E362E]'/>
                <p className='text-[#3E362E] text-base'>Sidebar</p>
            </div>
            {SideBar && (
                <div ref={sidebarRef} onClick={closeSidebar} className='lg:hidden SideBar-inset fixed inset-0 backdrop-blur-sm  '>
                <div className='lg:hidden overflow-y-scroll absolute  top-0 Sidebar bg-[#A69080] w-[50%] md:w-[40%] h-screen'>
                    <div className='Close-button ml-auto mr-2 my-2 rounded-[100%] border-[1px] border-[#3E362E] size-8 flex items-center justify-center'>
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
                  
                </div>
                </div>
            )}
            <div className='hidden  lg:block Sidebar bg-[#A69080] w-[50%] md:w-[35%] 2xl:w-[30%] h-[100%]  overflow-y-scroll'>
                   
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
                  
            </div>
            <div className='Main-Body w-[100%] lg:w-[70%] bg--500'>
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
