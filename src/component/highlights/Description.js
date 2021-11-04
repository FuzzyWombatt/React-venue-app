import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Description = () => {
    return (
      <Fade>
        <div className="flex flex-col text-center items-center w-full text-white">
          <h2 className="text-4xl pb-8 pt-8 font-Righteous">HIGHLIGHTS</h2>
          <div className='border-t-2 border-b-2 border-turqoise-100 pt-4 pb-4 w-1/2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.

          </div>
        </div>
      </Fade>
    );
}

export default Description
