import React from 'react'
import Container from '../layers/Container'
import Image from '../layers/Image'
import List from '../layers/List'
import ListItem from '../layers/ListItem'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const Navbar = () => {
  return (
    <>
      <nav>
        <Container className="bg-[#0F1624] flex items-center justify-between  py-[70px]">
          <div className=' items-center '>
             <Image href='/' src="../../../../src/assets/Logo.png" alt="" /> 
          </div>
          <List className=" gap-x-8">
            <ListItem className="text-white hover:text-[#12F7D6] font-geo font-normal text-2xl " listInnerItem="Home" />
            <ListItem className="text-white hover:text-[#12F7D6] font-geo font-normal text-2xl " listInnerItem="About" />
            <ListItem className="text-white hover:text-[#12F7D6] font-geo font-normal text-2xl " listInnerItem="Education" />
            <ListItem className="text-white hover:text-[#12F7D6] font-geo font-normal text-2xl " listInnerItem="Skills" />
            <ListItem className="text-white hover:text-[#12F7D6] font-geo font-normal text-2xl " listInnerItem="Projects" />
            <ListItem className="text-white hover:text-[#12F7D6] font-geo font-normal text-2xl " listInnerItem="Contact" />

          </List>

          <div className='text-2xl gap-x-[30px] flex justify-center'>
            <a href="https://github.com/anikroy4" className='text-white' >
            <FaGithub />
            </a>
            <a href="" className='text-white '>
            <FaLinkedin  />
            </a>
            <a href="" className='text-white '>
            <FaLinkedin  />
            </a>
          </div>
        </Container>
      </nav> 
    </>
  )
}

export default Navbar
