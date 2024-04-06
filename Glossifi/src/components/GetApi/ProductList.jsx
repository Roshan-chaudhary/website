

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      // Fetch data from the API using Axios
      axios.get('https://fakestoreapi.com/products')
        .then((response) => {
          // Update the state with the fetched data
          setProducts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2   grid-cols-1 gap-4 ">
          {products.map((product) => (
            <div className="" key={product.id}>
                <img 
                  src={product.image}
                  className=" w-[70%] pl-[25%]"
                  alt={product.title}
                />
                <div className=" border-rose-600 rounded-md bg-gray-300 text-center items-center ">
                  <h5 className="text-lg  font-bold  ">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className="text-white bg-green-500 text-center p-[2%]  ml-[5%] rounded-md   w-[25%] hover:bg-black  ">${product.price}</button>
               </div>
            </div>
          ))}
       
      </div>
    );
  }
  
  export default ProductList;
  