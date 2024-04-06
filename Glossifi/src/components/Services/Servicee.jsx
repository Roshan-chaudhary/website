import React from 'react'

function Servicee() {
  return (
    
<div className='grid md  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  grid-cols-1   items-center my-[7%]       '>
        <div className="ml-[15%]">
<h1 className='text-5xl text-red-500 font-bold  mt-[20%] mb-[3%] mr-[35%]  ' >Our Services</h1>
<p className='text-lg '>
We excel at crafting customized tech solutions that <br/>perfectly match your brand's goals, driving your business <br/> forward. With a blend of creativity, technical expertise,<br/> and strategic guidance, we deliver unmatched service to<br/> all our clients.
   
   
    </p>

<button className='text-white bg-red-500 p-[3%] my-[8%] rounded-full  w-[35%]  text-center hover:bg-yellow-700 '>Find More</button>
        </div>
<img className='w-[80%]  ' src="services.png" alt="" />

    </div>




  )
}

export default Servicee