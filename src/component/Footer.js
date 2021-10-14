import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  
  return (
    <footer className='flex justify-center bg-dark p-2'> 
      <Fade>
        <table className=''>
          <tr className='text-center'>
            <h1 className='text-white text-center font-Righteous font-bold text-3xl'>
               The venue
            </h1>
          </tr>
          <tr>
            <h1 className='text-white font-roboto text-sm font-bold'>
              <FontAwesomeIcon color='white' icon={faCopyright}/> The venue 2021 all rights reserved
            </h1>
          </tr>
        </table>
      </Fade>
    </footer>
  );
}

export default Footer;
