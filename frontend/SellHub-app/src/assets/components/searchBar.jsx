import { Search } from 'lucide-react'
import React from 'react'

export const SearchBar = () => {
  return (
    <div className='flex w-full justify-center items-center m-3'>
        <span className='flex items-center gap-2 p-2 rounded-full bg-gray-100 w-3/4'>
            <Search className='border-r-2 border-gray-300 mr-2'/>
            <input className='focus:outline-none' type="text" placeholder='Search' />
        </span>
    </div>
  )
}
