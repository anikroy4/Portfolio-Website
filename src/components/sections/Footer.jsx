// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from '../layers/Container'
import Image from '../layers/Image'

const Footer = () => {
  return (
    <footer className='bg-[#0F1624]'>
      <Container className="flex items-center justify-between px-20 py-20">
        <div className='items-center '>
            <Image href='/' src="../../../../src/assets/Logo.png" alt="" /> 
        </div>
        <div className='flex text-xl text-center text-white gap-x-14 font-geo'>
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
