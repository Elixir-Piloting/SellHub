import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function ProductCard() {
  return (
    <div className='flex flex-col gap-w w-80 h-80  shadow-2xl items-center rounded-2xl justify-between cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out '>
        <span className='text-2xl font-mono text-gray-600 border-b-2 border-gray-300 w-full text-center mt-2'>title</span>
        <div className='w-full h-full flex items-center justify-center border-b-2 border-gray-300'>
            <img src="https://i.imgur.com/PEksfrOb.jpg" alt="" />
        </div>
        <div className='flex justify-between w-full p-3 border-b-2 border-gray-300'>
            <span className='text-black font-mono'>price</span>
            <span>in stock</span>
        </div>
        <button className='flex items-center gap-2 justify-between w-3/4 m-2 p-1 rounded-full px-3 border-2 border-gray-300 cursor-pointer hover:bg-gray-300'>View details <ArrowRight/> </button>
    </div>
  )
}
