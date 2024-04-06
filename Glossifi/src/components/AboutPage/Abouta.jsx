import React from 'react'

function Abouta() {
  return (
    <div className='grid md  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  grid-cols-1   items-center        '>
        <div className="ml-[15%]">
<h1 className='text-5xl text-red-500 font-bold  mt-[20%] mb-[3%] mr-[35%]  ' >About Us</h1>
<p className='text-lg '>At Glossifi  IT Solutions, we specialize in delivering top-tier IT<br/> solutions to businesses, offering cutting-edge web<br/> solutions tailored for your success. With a seasoned team <br/>boasting experience across diverse industries, we <br/> consistently innovate to drive client success. Our<br/> approach prioritizes critical information, ensuring <br/>professionalism and post-implementation support for<br/> enduring results.<br/>
Driven by innovation, we constantly push boundaries,<br/> presenting fresh ideas and approaches to ensure your<br/> success. We prioritize essential information, maintaining <br/>a high level of professionalism while delivering impactful <br/>results.<br/>
Join us, and let's embark on a journey of growth,<br/>innovation, and unparalleled success together.</p>
<button className='text-white bg-red-500 p-[3%] my-[8%] rounded-full  w-[35%]  text-center hover:bg-yellow-700 '>Get in Touch</button>
        </div>
<img className='w-[65%] ml-[15%] mb-[40%]      '     src="Logo.png" alt="" />

    </div>
  )
}

export default Abouta