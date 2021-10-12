import React from "react";
import { Heading } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  
  return (
    <footer style={{padding: '1.5rem', backgroundColor: '#363636'}}>   
        <Fade>
        <table>
          <tr style={{alignText: 'center'}}>
            <Heading textColor='white' style={{fontFamily: 'righteous, cursive', fontWeight: "bold", textAlign: 'center'}}>
               The venue
            </Heading>
          </tr>
          <tr>
            <Heading size="6" textColor='white' style={{fontFamily: "roboto"}}>
              <FontAwesomeIcon color='white' icon='copyright'/> The venue 2021 all rights reserved
            </Heading>
          </tr>
        </table>
        </Fade>
    </footer>
  );
}

export default Footer;
