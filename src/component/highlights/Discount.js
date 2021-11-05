import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Discount = () => {
    const [start, setStart] =  useState(0);
  
    const percentage = () => {
        //triggers the animation when scroll away again
        if(start > 0){
            setStart(1);
        }else if(start === 0){
            setStart(prevcount => prevcount+1)
        }
    }

    useEffect(()=>{
        if(start > 0 && start < 30){
            setTimeout(()=>{
                setStart(prevcount => prevcount+1)
            },45)
        }
    },[start])

    return (
    <div className="flex flex-row h-full w-1/2 text-white items-center justify-center mb-24">
        {/* when it comes into view  it triggers this and then trigger the effect*/}
      <Fade onVisibilityChange={(inView) => {if(inView){percentage()}}}>
        <div className="flex flex-col pr-16 pl-4">
          <span className="text-8xl text-turqoise-100">{start}%</span>
          <span className="text-4xl">OFF</span>
        </div>
      </Fade>
      <Slide right>
        <div className="flex flex-col flex-grow">
          <span className="text-center text-3xl md:text-4xl mb-8">
            Purchase tickets before 30th JULY
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
            quis imperdiet massa tincidunt nunc pulvinar sapien. Sed felis eget
            velit aliquet.
          </p>
        </div>
      </Slide>
    </div>
  );
};

export default Discount;
