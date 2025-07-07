import React from 'react'
import DecryptedText from './DecryptedText';

const ContactSection = ({ id }) => {
  return (
    <div id = {id}>
      <div className='text-brightyellow'>
      <h2 className=''> / <DecryptedText text="CONTACT ME" /></h2>
    </div>
    </div>
  )
}

export default ContactSection
