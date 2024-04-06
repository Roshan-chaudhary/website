import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Blog() {
    const [roshan, setRoshan] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((response) => {
                // Assuming response.data is an array
                if(Array.isArray(response.data)) {
                    setRoshan(response.data);
                } else {
                    console.log('API response is not an array:', response.data);
                }
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });
    }, []); // empty dependency array to run effect only once

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 p-[10%] bg-gray-300">
            {roshan.map((product, index) => (
                <div key={index} className="border-rose-600 rounded-md bg-white text-center items-center hover:bg-yellow-600">
                    <h5 className="text-lg font-bold">{product.title}</h5>
                    <p>{product.brand}</p>
                </div>
            ))}
        </div>
    );
}

export default Blog;
