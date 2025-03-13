import { ShoppingCart, Star } from 'lucide-react'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-full shadow-2xs flex justify-between items-center top-0 sticky bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl'>
        {/* left side */}
        <div className=' cursor-pointer hover:bg-[#dddddd] rounded-2xl p-2 flex  gap-2 items-center' >
            <span className='h-10  w-10 object-contain '>
                <img className='w-10 rounded-full object-contain' src="https://i.imgur.com/PEksfrOb.jpg" alt="" />
            </span>
            <span className='text font-mono'>Elixir's Store</span>
        </div>

        {/* right side 'profile' */}
        <div className='flex justify-between items-center gap-2'>
            <div>
                <ul className='navList flex gap-2'>

                    <li>
                    <a href="#"> <ShoppingCart /> cart </a>
                    </li>
                    <li>
                        <a href="#"> <Star /> reviews </a>
                    </li>
                    

                </ul>
            </div>

            <div className='cursor-pointer'>
                <span>
                    <img className='h-10' src="https://avatar.iran.liara.run/public" alt="" />
                </span>
            </div>

        </div>
    </div>
  )
}
