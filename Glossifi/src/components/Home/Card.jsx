import React from 'react'
import { RiShoppingBag3Line } from "react-icons/ri";
import { HiBriefcase } from "react-icons/hi2";
import { HiComputerDesktop } from "react-icons/hi2";
import { HiAcademicCap } from "react-icons/hi2";
import { FaAppleAlt } from "react-icons/fa";
import { FaMedapps } from "react-icons/fa";
import { BiLogoGraphql } from "react-icons/bi";
import { BiLogoMailchimp } from "react-icons/bi";
import { BiLogoVuejs } from "react-icons/bi";
import { FaDove } from "react-icons/fa";


function Card() {
  return (
    <div className="bg-white">
        <div className="">
            <h2 className='text-3xl  mt-[3%] text-center font-bold text-black'>INDUSTRIES WE WORK WITH</h2>
        <p className='text-center mt-[1%] text-sm'>Working for 14+ years deepens our knowledge in the diverse domains. We serve a wide range of industries including Logistics, Travel, Real-<br/>Estate, Healthcare, FMCG, Not-For-Profit, Banking, etc.</p>

<div className="grid lg:grid-cols-5  sm:grid-cols-2 grid-cols-2 ml-[4%]    mt-[3%] gap-y-9">


<div className=' w-[80%] p-[20%]  bg-gray-400  cursor-pointer   hover:bg-red-500 rounded-lg'>
<RiShoppingBag3Line className='text-7xl font-bold hover:text-yellow-500'/>
<p>Ecommerce</p>
</div>

<div className=' w-[80%] p-[20%] mr-[25%] bg-gray-400 cursor-pointer   hover:bg-red-500  rounded-lg '>
<HiBriefcase  className='text-7xl font-bold hover:text-blue-700'/>
<p className='ml-[18%]'>Job</p>
</div>

<div className=' w-[80%] p-[20%]     bg-gray-400 cursor-pointer   hover:bg-red-500  rounded-lg'>
<HiComputerDesktop  className='text-7xl font-bold hover:text-white'/>
<p>Computer</p>
</div>


<div className='w-[80%] p-[20%]  bg-gray-400 cursor-pointer hover:bg-red-500  rounded-lg'>
<HiAcademicCap className='text-7xl font-bold hover:text-pink-500'/>
<p>Education</p>
</div>


<div className=' w-[80%] p-[20%]    bg-gray-400 cursor-pointer   hover:bg-red-600 rounded-lg '>
<BiLogoVuejs className='text-7xl font-bold hover:text-green-600'/>
<p className='ml-[18%]' >V-mate</p>
</div>


<div className=' w-[80%] p-[20%]    bg-gray-400  cursor-pointer hover:bg-red-500 rounded-lg '>
<FaDove className='text-7xl font-bold hover:text-yellow-500'/>
<p>Quicker</p>
</div>


<div className=' w-[80%] p-[20%]    bg-gray-400  cursor-pointer hover:bg-red-500 rounded-lg'>
<BiLogoMailchimp className='text-7xl font-bold  hover:text-blue-500'/>
<p className='ml-[16%]'       >Boomcha</p>
</div>


<div className=' w-[80%] p-[20%]    bg-gray-400 cursor-pointer  hover:bg-red-500  rounded-lg'>
<FaMedapps className='text-7xl font-bold hover:text-red-700'/>
<p className='ml-[16%]'       >Broota</p>
</div>


<div className=' w-[80%] p-[20%]    bg-gray-400 cursor-pointer hover:bg-red-600 rounded-lg'>
<BiLogoGraphql  className='text-7xl font-bold hover:text-white'/>
<p className='ml-[18%]'>React</p>
</div>

<div className=' w-[80%] p-[20%]    bg-gray-400 cursor-pointer hover:bg-red-500 rounded-lg'>
<FaAppleAlt className='text-7xl font-bold hover:text-pink-800'/>
<p className='ml-[18%]'>Apple</p>
</div>

<button className=' flex p-[3%] lg:ml-[180%] md:ml-[20%]     sm:ml-[30%] ml-[30%]  w-[115%] text-white bg-blue-500 hover:bg-red-500  text-center text-xl font-semibold'>TALK TO OUR EXPERT</button>
</div>
        </div>
    </div>
  )
}

export default Card