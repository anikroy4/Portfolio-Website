import React from 'react'
import Container from '../layers/Container'
import Image from '../layers/Image'

const Footer = () => {
  return (
    <footer className='bg-[#0F1624]'>
      <Container className="flex justify-between items-center py-20 px-20">
        <div className=' items-center '>
            <Image href='/' src="../../../../src/assets/Logo.png" alt="" /> 
        </div>
        <div className='flex gap-x-14 text-center font-geo text-white text-xl'>
          <div>
            <h3>Projects</h3>
            </div>
          <div>
            <h3>About</h3>
            
          </div>
          <div>
            <h3>Contact</h3>
          </div>
          
          
        </div>
      </Container>
    </footer>
  )
}

export default Footer
