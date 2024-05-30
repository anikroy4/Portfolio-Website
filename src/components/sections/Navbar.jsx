import React from 'react'
import Container from '../layers/Container'
import Image from '../layers/Image'
import List from '../layers/List'
import ListItem from '../layers/ListItem'


const Navbar = () => {
  return (
    <>
      <nav>
        <Container className="bg-[#292F36] flex items-center justify-between px-[128px] py-[64px]">
          <div className=' items-center '>
             <Image href='/' src="../../../../src/assets/Logo.png" alt="" /> 
          </div>
          <List className=" gap-x-8">
            <ListItem className="text-white hover:text-[#12F7D6] font-geo font-normal text-2xl " listInnerItem="Home" />
            <ListItem className="text-white hover:text-[#12F7D6] font-geo font-normal text-2xl " listInnerItem="About" />
            <ListItem className="text-white hover:text-[#12F7D6] font-geo font-normal text-2xl " listInnerItem="Education" />
            <ListItem className="text-white hover:text-[#12F7D6] font-geo font-normal text-2xl " listInnerItem="Project" />
            <ListItem className="text-white hover:text-[#12F7D6] font-geo font-normal text-2xl " listInnerItem="Contact" />

          </List>
        </Container>
      </nav> 
    </>
  )
}

export default Navbar
