import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Sidedrawer from "./Sidedrawer.js"


const Header = () => {
  const [headerTrans, setHeaderTrans] = useState(false);

  const scrollHandle = () => {
    if (window.scrollY > 0) {
      setHeaderTrans(true);
    } else {
      setHeaderTrans(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);
  }, []);
  //normally this would be in a seperate js file as a different componenet, but its easier to keep it here for the app size

  return (
    //tailwind CSS classname could be cleaner by creating tailwind component
    <nav
      className={
        headerTrans
          ? "bg-dark flex flex-row fixed z-10 w-screen"
          : "flex flex-row fixed z-10 w-screen"
      }
    >
      <div className="items-center flex flex-row">
        <FontAwesomeIcon
          icon="headphones-alt"
          size="3x"
          color="white"
          className="m-1 r-counter-45"
        />
        <table className="m-2">
          <tbody>
            <tr>
              <td className="text-white text-3xl font-Righteous font-bold">
                Vshoujo Idol
              </td>
            </tr>
            <tr>
              <td className="text-white text-sm font-roboto font-bold">
                Virtual Idol Musical Events
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-grow justify-end">
        <Sidedrawer/>
      </div>
    </nav>
  );
};

export default Header;
