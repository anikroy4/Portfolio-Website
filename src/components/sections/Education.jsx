import React from 'react'
import Container from '../layers/Container'
import Image from '../layers/Image'

const Education = () => {
  return (
    <>
      <Container className="bg-[#0F1624]">
        <h2 className='text-[#12F7D6] text-[64px] font-semibold flex justify-center pt-16'>Education
        </h2>
        <Container>
            <div className='w-1/2 flex items-center '>
                <Image className="!w-1/2" src="../../../../src/assets/UIU.png"/>
                <div className='w-1/2 '>
                    <h2>United International University</h2>
                    <p>BS in Computer Science & Engineering</p>
                    <p>2023-2027(Running)</p>
                </div>
            </div>
            <div className='w-1/2 flex items-center '>
                <Image className="!w-1/2" src="../../../../src/assets/UIU.png"/>
                <div className='w-1/2 '>
                    <h2>United International University</h2>
                    <p>BS in Computer Science & Engineering</p>
                    <p>2023-2027(Running)</p>
                </div>
            </div>
            <div>

            </div>
        </Container>
      </Container>
    </>
  )
}

export default Education
