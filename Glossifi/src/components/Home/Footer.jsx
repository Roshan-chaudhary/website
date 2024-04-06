import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5            px-9 py-10 bg-gray-200    gap-0  text-center items-stretch pl-[6%] ">
      {/* Column 1 */}

      <div className=" flex flex-col gap-2 items-center text-center  mr-[25%] ">
        <img src='services.png' alt='' className=''/>
      
        <div className=' grid grid-cols-4  text-center gap-7 mt-[10px]      '>

        <FaFacebookF className='text-blue-500 text-3xl font-semibold cursor-pointer hover:text-red-500  duration-[700px]'/>
        <FaTwitter className=' text-pink-500  text-3xl  font-semibold cursor-pointer hover:text-yellow-500 duration-[700px] ' />
        <FaLinkedin className='text-green-600  text-3xl font-semibold cursor-pointer hover:text-blue-500  duration-[700px]  '/>
        <FaYoutube className='text-red-600   text-3xl font-semibold cursor-pointer  hover:text-gray-600 duration-[700px]'/>

       </div> 
        </div>


      <div className="flex flex-col gap-2 ">
        <h1 className='text-2xl font-bold  text-black'>Services</h1>
        <Link href="/">Bulk SMS Service</Link>
        <Link href="/">Alert SMS Service</Link>
        <Link href="/">Dynamic SMS Service</Link>
        <Link href="/">Voice Call and IVR<br/>Service</Link>
        <Link href="/">SMS Shortcode</Link>
        <Link href="/">SMS API</Link>
        <Link href="/">Web Development <br/>and Hosting</Link>
        <Link href="/">Mobile Application<br/> Development</Link>
        <Link href="/">Digital Marketing</Link>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-2      ">
      <h1 className='text-2xl font-bold  text-black'>Industries</h1>    
        <Link href="/">Banking</Link>
        <Link href="/">Insurance</Link>
        <Link href="/">Financial<br/>Services</Link>
        <Link href="/">Healthcare</Link>
        <Link href="/">Ed Tech</Link>
        <Link href="/">Retail</Link>
        <Link href="/">MPE</Link>
        <Link href="/">Real Estate</Link>
        <Link href="/">Government</Link>
      </div>

   
      

      {/* Column 3 */}
      <div className="flex flex-col gap-2  pr-[70px] ">
      <h1 className='text-2xl font-bold  text-black'>Company</h1>     
        <Link href="/" >About Us</Link>
        <Link href="/">Team</Link>
        <Link href="/">News Room</Link>
        <Link href="/">Events &<br/> Talk</Link>
        <Link href="/">Career</Link>
      </div>



{/* Column 4 */}
      <div className="flex flex-col gap-2 ">
      <h1 className='text-2xl font-bold  text-black '>Let's Connect</h1>     
        <Link href="/">Budhhanagar-10,Kathmandu,<br/>Nepal</Link>
        <Link href="/">Contact:+977-1-5242098</Link>
        <Link href="/" >Email:info@easyservice.com.np</Link>
        <Link href="/" >Web:www.easydigital.com.np</Link>
      </div>



      

    </div>
  );
}

export default Footer;
