// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from '../layers/Container'
import Image from '../layers/Image'

const Education = () => {
  return (
    <>
      <Container className="bg-[#0F1624] pb-[100px]">
        <h2 className='text-[#12F7D6] text-[64px] font-semibold flex justify-center p-16'>Education
        </h2>
        <div className="flex justify-between px-10 text-2xl font-normal text-white gap-x-6 ">
           <div className='w-full'>
                <div className=' w-full flex items-center pb-[80px]'>
                    <Image className="!w-[55%] " src="../../../../src/assets/UIU.png"/>
                    <div className='w-full '>
                        <h2>United International University</h2>
                        <p>BS in Computer Science & Engineering</p>
                        <p>2023-2027 (Running)</p>
                    </div>
                </div>
                <div className='flex w-full '>
                    <Image className="!w-[55%]" src="../../../../src/assets/MGBHS.png"/>
                    <div className='w-full '>
                        <h2>Motijheel Govt. Boys High School</h2>
                        <p>SSC, Science , CGPA: 5.00</p>
                        <p>2014</p>
                    </div>
                </div>
           </div>
           <div className='!w-full'>
                <div className='flex w-full '>
                    <Image className="!w-[42%]" src="../../../../src/assets/DCC.png"/>
                    <div className='w-full '>
                        <h2>Dhaka City College</h2>
                        <p>HSC, Science , CGPA: 4.67</p>
                        <p>2016</p>
                    </div>
                </div>
           </div>
        </div>
      </Container>
    </>
  )
}

export default Education
