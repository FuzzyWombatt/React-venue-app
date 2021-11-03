import React from "react";

const Location = () => {
  return (
    <div className='relative'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20773.44356335518!2d-95.4105321661861!3d29.68635528212678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b0f6ec2399a9d57!2sNRG%20Stadium!5e0!3m2!1sen!2sus!4v1635978051556!5m2!1sen!2sus"
        className='w-full h-500'
      ></iframe>
      <div className='absolute bg-dark text-white top-95 text-2xl p-1 opacity-75 left-1/2 trans-50 font-roboto'>Event Location</div>
    </div>
  );
};

export default Location;
