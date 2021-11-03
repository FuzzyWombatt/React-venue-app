import React, {Fragment, useState}  from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer } from '@mui/material';


const Sidedrawer = () =>{
    const [over, setOver] = useState(false);
    const [drawerToggle, setToggle] = useState(false);

    return (
       <Fragment>
        <button
          className="mr-8 bg-transparent"
          //essentially a css::hover effect using state hooks
          onMouseOver={() => setOver(true)}
          onMouseLeave={() => setOver(false)}
          onClick={() => setToggle(true)}
        >
          <FontAwesomeIcon
            color="white"
            size="2x"
            icon="bars"
            //ternary operator to create effect based on mouse hover event
            className={over ? "text-turqoise-900" : "text-white"}
          />
        </button>
        <Drawer>
            
        </Drawer>
       </Fragment>
    )
}
export default Sidedrawer;