import React from "react";

import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

const ReviewCard = (props) => {
  return (
    <div className=" flex flex-col w-full lg:w-2/6 bg-green-500 p-3 rounded-lg gap-5">
      <div className=" flex flex-row items-center lg:justify-start justify-center">
        <div className="w-1/4">
          <img className=" rounded-full w-[700%] ml-[150%] " src={props.img} alt="img" />
        </div>
      </div>


      <div className="  text-center   ml-[40%]">
          <h2 className=" font-semibold text-lg mr-[50%]         ">{props.title}</h2>
          <div className=" flex text-center  items-center">
            <BsStarFill className="   text-center text-red-500" />
            <BsStarFill className="  text-red-500" />
            <BsStarFill className="   text-red-500" />
            <BsStarFill className="  text-red-500" />
            <BsStarHalf className=" text-brightColor" />
          </div>
        </div>





      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
        consequatur fuga suscipit perspiciatis totam. Eos esse nisi omnis dicta,
        aperiam distinctio fuga ipsam rerum rem.
      </p>

    </div>
  );
};

export default ReviewCard;