import React from 'react'
import AutoCompleteAdress from './AutoCompleteAdress'
import Cars from './cars'
import Cards from './Cards'

function Booking() {
  return (
    <div className='p-5 '>
        <h2 className=' text-[20px] font-semibold'>Booking</h2>
        <div className='border-[1px] p-5 rounded-md h-[70vh] md:h-[80vh] xl:h-[80vh] sm:h-[70vh]' >
            <AutoCompleteAdress/>
            <Cars/>
            <Cards/>
        </div>
    </div>
    
  )
}

export default Booking