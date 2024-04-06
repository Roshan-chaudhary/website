import React from "react";
import ReviewCard from "./ReviewCard";


const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-[#bb9d72] ">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 ">
        Customer's Reviews
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard       img='pic1.png' title="Olivia Ava" />
        <ReviewCard img='pic2.png ' title="John Deo" />
        <ReviewCard img='pic3.png' title="Sofia Zoe" />
      </div>
    </div>
  );
};

export default Review;