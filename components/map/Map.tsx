import { LoadScript} from '@react-google-maps/api'
import React from 'react'

function Map() {
  return (
    <div className='p-5'>
      <h1 className='text-[20px] font-semibold'>maps</h1>
      <iframe className='w-full h-[300px] mt-2
                         md:h-[79vh]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbr!4v1692816061818!5m2!1sen!2sbr" ></iframe>
    </div>
  )
}

export default Map