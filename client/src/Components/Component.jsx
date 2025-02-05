import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faArrowRight, faX, faXmark } from '@fortawesome/free-solid-svg-icons';
import PageInfo from './Introduction';
import BaseComponent from './BaseComponent';
import { sidebarItems } from '../Utils/Constant';
import Footer from "../Components/Footer"
import Introduction from './Introduction';
const Component = () => {
    const[sideBar ,setSideBar] = useState(false);
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

    <section className=' w-full bg-gradient-to-tr bg-red-800 min-h-screen pt-4 px-4 md:px-8 lg:pt-10 font-inter '>
             <button onClick={() =>setSideBar(!sideBar)} className='lg:hidden ml-auto m flex items-center justify-center gap-2 py-2 px-4 bg-white rounded-xl font-inter outline-none border border-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
             <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13"></path>
              </svg>
              Sidebar
             </button>
             <div className=' bg-green-300    max-w-[1400px] mx-auto lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 transition ease-in duration-300'>
                {sideBar && (   
                    <div className=' fixed  inset-0 z-[200] backdrop-blur-sm lg:hidden'>          
                    <aside class=" h-screen w-full bg-red-400 sm:w-1/2">
                    <nav className='relative h-screen overflow-y-scroll bg-yellow-300  pt-4 pl-4  text-sm'> 
                        <FontAwesomeIcon icon={faX} className='absolute top-4 right-4 text-zinc-500 size-4' onClick={() => setSideBar(false)}/>                 
                        {sidebarItems.map((item) =>(
                            <ul key={item.title}>
                                <li>
                                    <h4 className='font-semibold text-zinc-700 mb-2'>{item.title}</h4>
                                    <ul className='space-y-2 mb-4'>
                                        {item.links.map((link) =>(
                                            <li className='text-zinc-500 bg--200    ' key={link.name}><a href={link.url} className='text-zinc-500 '>{link.name}</a></li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        ))}
                        {categories.map((category) =>(
                            <ul>
                                <li>
                                    <h4 className='font-semibold text-zinc-700 mb-2'>{category.name}</h4>
                                    <ul className='space-y-2 mb-4'>
                                        {category.items.map((item) =>(
                                            <li onClick={() => setSelectedItem(item.name)} className='text-zinc-500' ><span onClick={()=> setSideBar(false)} >{item.name}</span></li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        ))}
                    </nav>
                   </aside>
                   </div>
                )}
                
                <aside class="hidden z-30  sticky top-0  h-screen w-full shrink-0  lg:block lg:self-start bg--300 pr-6 pt-">
                    <nav className='h-full bg-yellow-300 overflow-y-scroll   text-sm'>                  
                        {sidebarItems.map((item) =>(
                            <ul key={item.title}>
                                <li>
                                    <h4 className='font-semibold text-zinc-700 mb-2'>{item.title}</h4>
                                    <ul className='space-y-2 mb-4'>
                                        {item.links.map((link) =>(
                                            <li className='text-zinc-500 bg--200    ' key={link.name}><a href={link.url} className='text-zinc-500 '>{link.name}</a></li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        ))}
                        {categories.map((category) =>(
                            <ul>
                                <li>
                                    <h4 className='font-semibold text-zinc-700 mb-2'>{category.name}</h4>
                                    <ul className='space-y-2 mb-4'>
                                        {category.items.map((item) =>(
                                            <li onClick={() => setSelectedItem(item.name)} className='text-zinc-500'><span >{item.name}</span></li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        ))}
                    </nav>
                </aside>
                <main className='bg-yellow-200 '>
                {selectedItem === "About this Page" ? (
                    <Introduction />
                ) : (
                    <BaseComponent name={selectedItem} categories={categories}/>
                )}
               </main>
         </div>
         <Footer/>
    </section>
  )
}

export default Component
