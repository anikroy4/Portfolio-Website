// eslint-disable-next-line no-unused-vars
import React from 'react';
import Container from '../layers/Container'

const Hero = () => {
  return (
    <>
      <Container className="bg-[#0F1624] max-w-container mx-auto py- ">
        <div className='flex justify-between'>
            <div className="w-1/2 left font-geo">
                <img src="../../../../src/assets/Hero.png" alt="Hero.png" />
            </div>
            <div className="w-1/2 font-geo 
            my-8 items-center pb-[70px]">
                <h3 className=' text-[26px] text-white font-normal'>
                    Front-End Developer
                </h3>
                <h2 className='text-[64px] text-white font-normal'>
                    Anik Roy
                </h2>
                <p className='text-white items-center w-[75%] font-normal text-[20px]'>I will help your business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done.</p>
            </div>    
        </div>
      </Container>
    </>
  )
}

export default Hero
