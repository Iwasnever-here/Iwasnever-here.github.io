import React from 'react'
import DecryptedText from './DecryptedText';

const LabsSection = ({ id }) => {
  return (
    <div className='text-brightyellow mt-90' id = {id}>
      <h2> / <DecryptedText text="LEARNING" /></h2>
      <br></br>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='Card text-2xl'>
           / NOTES 
            <p className='text-xl mt-10'>Notes from my current learning: </p>
            <p className='text-xl text-neutral-700 text-center content-center'>COMING SOON</p>
        </div>
        <div className='Card text-2xl'>
           / LABS
          <p className='text-xl text-neutral-700 text-center content-center'>COMING SOON</p>
        </div>
      </div>
      
    </div>
  )
}

export default LabsSection
