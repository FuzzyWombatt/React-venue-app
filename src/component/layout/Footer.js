import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  
  return (
    <footer className='flex justify-center bg-dark p-2'> 
      <Fade>
        <table className=''> 
          <tbody>
            <tr className='text-center'>
              <td className='text-white text-center font-Righteous font-bold text-3xl'>
                Vshoujo Idol
              </td>
            </tr>
            <tr>
              <td className='text-white font-roboto text-sm font-bold'>
                <FontAwesomeIcon color='white' icon={faCopyright}/> Vshoujo Idol 2021 all rights reserved
              </td>
            </tr>
          </tbody>
        </table>
      </Fade>
    </footer>
  );
}

export default Footer;
