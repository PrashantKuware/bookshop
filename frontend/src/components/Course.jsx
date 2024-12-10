import React, { useEffect, useState } from "react";
import Card from './Card';
import {Link} from "react-router-dom";
import list from "../../public/ListPaid.json";

function Course() {

  const filterData = list.filter((data) => data.category === "Paid");
    


  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            Wr're delighted to have you{" "}
            <span className="text-pink-500 font-semibold">here : )</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            perspiciatis modi ea esse atque temporibus quisquam quia obcaecati
            debitis tempore eaque error nihil, dolorem enim provident numquam
            nisi et repudiandae.
          </p>
         <Link to='/'>
         <button className="mt-7 bg-pink-500 rounded-md text-white px-4 py-2 hover:bg-pink-700">Back</button>
      
         </Link>
           </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            
       {filterData.map((item)=>(
        <Card item = {item} key = {item.id} />
       ))}
            
        </div>
      </div>
    </>
  );
}

export default Course;
