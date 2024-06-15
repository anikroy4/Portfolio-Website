
import React from 'react'
import Container from '../layers/Container'

const About = () => {
  return (
    <>
        <Container className="bg-[#0F1624] max-w-container mx-auto py-[129px] px-[129px] font-geo text-white">
            <div className=" ">
                <h2 className='inline font-semibold text-[32px] px-[40px] py-4 rounded-tl-[16px] rounded-br-[30px] border-4 border-[#12F7D6] '>About Me</h2>
                <p className='mt-[98px] mb-6 text-xl'>
                I am an ambitious Dhaka-based tech enthusiast. I enjoy creating amazing web applications with HTML,CSS, Responsive Web Design, Bootstrap,   JavaScript, Tailwind CSS, React JS, and more. My distinct viewpoint and meticulous attention to detail, which enable me to find original solutions to problems, are what make me stand out. Aside from technology, I love to play the Badminton and am very passionate about aiding homeless people. 
                </p>
                <p className='text-xl'>
                I utilize my technological expertise to give them educational opportunities because I think that education has great power. My mission is to transform the tech sector, encourage people to pursue their passions, and improve society overall.
                </p>

            </div>
            {/* <div>

            </div> */}
        </Container>
    </>
  )
}

export default About
