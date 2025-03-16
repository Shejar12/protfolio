import React from 'react'
import aboutImg from '../assets/about.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1400px] mx-auto my-12' id="about">
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left flex '>
          <div className='my-auto mx-6'>
            {/* header section */}
            <h2 className='text-4xl font-bold mb-4 primary-color'>
              About Me
            </h2>
            {/* paragraph section about me */}
            <p className='text-base lg:text-lg'>
            I am a web developer and UI/UX designer with expertise in HTML, CSS, JavaScript, React, WordPress, Bootstrap, Tailwind CSS,Node.js. I specialize in creating responsive, user-friendly, and visually appealing websites that enhance user experience and meet client requirements. My strong grasp of modern design principles and front-end technologies allows me to develop intuitive and functional digital solutions. Passionate about crafting seamless user experiences, I am committed to delivering high-quality designs and development that align with industry standards.
            </p>
          </div>

        </div>
        {/* Image section for about me*/}
        <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300} />
      </div>
    </div>
  )
}

export default About
