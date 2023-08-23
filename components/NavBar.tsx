import Image from 'next/image'
import React from 'react'
import { UserButton } from "@clerk/nextjs";


function NavBar() {
  return (
    <div >
        <div className='flex justify-between p-4 border-b-[1px] shadow-md'>
            <Image 
                src='/logo.png' 
                alt="logo" 
                width={150} 
                height={60}
            />
            <div className='flex gap-8 items-center'>
                <div className=' hidden md:flex gap-8 items-center'>
                    <h2 className='hover:bg-gray-400 p-2 rounded-md cursor-pointer'>Home</h2>
                    <h2 className='hover:bg-gray-400 p-2 rounded-md cursor-pointer'>History</h2>
                    <h2 className='hover:bg-gray-400 p-2 rounded-md cursor-pointer'>Help</h2>
                </div>
                <div>
                    <UserButton afterSignOutUrl="/" />
                </div>
                
            </div>
            
                
            
        </div>
    </div>
  )
}

export default NavBar