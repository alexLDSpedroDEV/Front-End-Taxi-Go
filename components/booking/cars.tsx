"use client";


import React, { useState } from 'react';
import CarsList from '../cars/CarsList';
import Image from 'next/image'


const selectedCar = () => {
        console.log("alex")
}

function Cars() {
    const [selectedCar,setSelectedCar]=useState<any>()

    


    
  return (
    <div className='mt-6'>
        <div>
            <h2>Select Car</h2>
        </div>
        <div className='grid grid-cols-3 mt-3 md:grid-cols-2 lg:grid-cols-3 m-2 p-2'>
            {CarsList.map((item,index) => (
                <div key={index} className={`m-2 p-2 border-[1px] rounded-md hover:border-yellow-300 cursor-pointer ${selectedCar == index ? "border-yellow-400 border-[2px]" : "null"}`} onClick={() => setSelectedCar(index)}>
                    <Image 
                        src={item.image}
                        alt={item.name} 
                        width={120}   
                        height={80}
                        className='w-full '
                    />
                    <h2 className='text-[14px] inline'>{item.name}</h2>
                    <span className='float-right '>{item.charges*8} $</span>
                </div>
            ))}
            
        </div>
        
        
    </div>
  )
}

export default Cars;