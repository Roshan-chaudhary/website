

import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ServiceApi() {

    const [roshan,setRoshan]=useState([])

useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then((response)=>{
       setRoshan(response.data)
    })

    .catch((error)=>{
        console.log(error);
    })

})

  return (
    
<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2   grid-cols-1 gap-4    p-[10%] bg-gray-300 ">
          {roshan.map((user) => (
                <div className=" border-rose-600 rounded-md bg-white text-center items-center hover:bg-yellow-600          ">
                  <h5 className="text-lg  font-bold  ">{user.name}</h5>
                  <p className="">{user.username}</p>
                  <li className=''>{user.email}</li>
                  <button className="text-white bg-green-500 text-center p-[2%]  ml-[5%] mt-[5%] mb-[5%] rounded-md   w-[40%] hover:bg-black  ">${user.website}</button>
              </div>
           
          ))}
       
      </div>




    
  )
}

export default ServiceApi