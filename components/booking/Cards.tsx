"use client";


import React, { useState } from 'react'
import PayList from '../cars/PayList'
import Image from 'next/image'

function Cards() {

    const [activeIndex, setActiveIndex] = useState<any>();
    return (

    <div className='mt-0 xl:mt-[120px] md:mt-[50px] '>
        <h2 className='text-[14px] font-medium'>Pay Method</h2>
        <div className='grid grid-cols-5 mt-5'>
            {PayList.map((item,index) => (
                <div key={index} className={`w-[50px] border-[1px] flex 
                items-center justify-center
                rounded-md cursor-pointer
                hover:scale-110 transition-all
                hover:border-yellow-300 ${activeIndex == index ? "border-yellow-400 border-[2px]" : "null"}`}
                    onClick={() => setActiveIndex(index)}>
                    <Image src={item.image}
                        alt={item.name}
                        height={50}
                        width={30}
                        />
                    
                </div>
            ))}
        </div>
        <div className='mt-5'>
            <button className='w-full bg-yellow-400 h-[40px] rounded-md'>Book</button>
        </div>
    </div>
  )
}

export default Cards