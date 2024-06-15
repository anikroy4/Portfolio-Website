import React from 'react'
import Container from '../layers/Container'
import Image from '../layers/Image'


const Skills = () => {
  return (
    <>
      <Container className="bg-bgimage w-full h-ull items-center py-[128px]">
        <h2 className='text-[#12F7D6] text-[64px] font-semibold flex justify-center pt-16'>Skills</h2>
        <div className='flex gap-x-32 justify-center items-center mt-[160px]'>
          <div className='text-[#E54F26] text-center'>
            <Image src="../../../../src/assets/HTML.png"/>
            <h4 href=""className='my-6'>HTML</h4>
          </div>
          <div className='text-[#E54F26] text-center'>
            <Image src="../../../../src/assets/CSS.png"/>
            <h4 href=""className='my-6 text-[#0C73B8]'>CSS</h4>
          </div> <div className='text-[#E54F26] text-center'>
            <Image src="../../../../src/assets/JavaScript.png"/>
            <h4 href=""className='my-6 text-[#E7A020]'>JavaScript</h4>
          </div> 
          <div className='text-[#E54F26] text-center'>
            <Image src="../../../../src/assets/React.png"/>
            <h4 href=""className='my-6 text-[#28A9E0]'>React</h4>
          </div>
          <div className='text-center '>
            <Image className=" w-[144px] h-[144px] bg-[#FD9E43] p-12 rounded-full text-[#E54F26] " src="../../../../src/assets/Tailwind_CSS.png"/>
            <h4 href=""className='my-6 text-[#19B1B9] '>Tailwind CSS</h4>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Skills
