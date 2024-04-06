import React from 'react'

function Gallery() {
  return (
    <div className="container my-[3%]    mx-auto py-[4] px-4   bg-gray-100">
        <h2 className='text-center text-3xl font-medium text-blue-900  mb-[50px] hover:text-red-500 cursor-pointer   '>Our Clients</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6  gap-7 ">
            
        <div className="relative group">
                <img src="game.png" alt="" className="cursor-pointer  rounded-md hover:rounded-xl "/>
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-md transition-opacity duration-300"></div>
  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
    <p className="text-black text-center uppercase ">
    Just Do It - Nike
     </p>
  </div>
            </div>




            <div className="relative group">
                <img src="b.jpg" alt="" className="cursor-pointer  rounded-md hover:rounded-xl "/> 
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-md transition-opacity duration-300"></div>
  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
    <p className="text-black uppercase  text-center">Think different</p>
  </div>
            </div>


            <div className="relative group">
                <img src="c.jpg" alt="" className="cursor-pointer  rounded-md hover:rounded-xl "/>
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-md transition-opacity duration-300"></div>
  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
    <p className="text-black text-center  uppercase">A Diamond is Forever</p>
  </div>
            </div>


            <div className="relative group">
                <img src="d.jpg" alt="" className="cursor-pointer  rounded-md hover:rounded-xl "/>
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-md transition-opacity duration-300"></div>
  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
    <p className="text-black text-center  uppercase">The Best a Man Can Get</p>
  </div>
            </div>


            <div className="relative group">
                <img src="e.jpg" alt="" className="cursor-pointer  rounded-md hover:rounded-xl "/>
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-md transition-opacity duration-300"></div>
  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
    <p className="text-black uppercase text-center ">Belong anywhere</p>
  </div>
            </div>



            <div className="relative group">
                <img src="cc.jpg" alt="" className="cursor-pointer  rounded-md hover:rounded-xl "/> 
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-md transition-opacity duration-300"></div>
  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
    <p className="text-black  uppercase  text-center ">Save Money. Live Better</p>
  </div>
            </div>
            


            <div className="relative group">
                <img src="gg.jpg" alt="" className="cursor-pointer  rounded-md hover:rounded-xl "/>
            
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-md transition-opacity duration-300"></div>
  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
    <p className="text-black text-center uppercase  ">Let’s Go Places</p>
  </div>

            </div>



            
            <div className="relative group">
                <img src="ggg.jpg" alt="" className="cursor-pointer  rounded-md hover:rounded-xl "/>
            
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-md transition-opacity duration-300"></div>
  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
    <p className="text-black text-center uppercase  ">The Breakfast of Champions</p>
  </div>

            </div>


        <div className="relative group">
                <img src="h.jpg" alt="" className="cursor-pointer  rounded-md hover:rounded-xl "/>
            
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-md transition-opacity duration-300"></div>
  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
    <p className="text-black text-center uppercase ">We have a place for everyone</p>
  </div>

            </div>

            

            <div className="relative group">
                <img src="i.jpg" alt="" className="cursor-pointer  rounded-md hover:rounded-xl "/>
            
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-md transition-opacity duration-300"></div>
  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
    <p className="text-black  text-center uppercase ">The Citi Never Sleeps</p>
  </div>

            </div>



            
            <div className="relative group">
                <img src="k.jpg" alt="" className="cursor-pointer  rounded-md hover:rounded-xl "/>
            
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-md transition-opacity duration-300"></div>
  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
    <p className="text-black text-center uppercase">Trix are for kids</p>
  </div>

            </div>


            <div className="relative group">
                <img src="m.jpg" alt="" className="cursor-pointer  rounded-md hover:rounded-xl "/>
            
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-md transition-opacity duration-300"></div>
  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
    <p className="text-black uppercase text-center">It Keeps Going, and Going, and Going </p>
  </div>

            </div>

        </div>





    </div>
  )
}

export default Gallery