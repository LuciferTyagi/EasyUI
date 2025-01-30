import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Searchbar = () => {
  return (
    <button className='Searchbar-Button relative flex items-center justify-center gap-2 py-2 px-4 bg-white rounded-xl font-inter outline-none border border-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='size-4 text-[#00000060]'/>
        <span className='text-sm text-[#00000060] font-medium'>Search</span>
        <kbd class="pointer-events-none  hidden h-5 select-none items-center gap-1 rounded border bg-white px-1.5 font-mono text-sm font-medium opacity-100 sm:flex"><span class="text-xs">⌘</span>K</kbd>
    </button>
  )
}

export default Searchbar
