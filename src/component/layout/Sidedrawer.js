import React, {Fragment, useState}  from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { List, Drawer, ListItem } from '@mui/material';


const Sidedrawer = () =>{
    const [over, setOver] = useState(false);
    const [drawerToggle, setToggle] = useState(false);

    const refLinks = [
        {link: 'featured', value: 'To top'},
        {link: 'venuenfo', value: 'Venue Nfo'},
        {link: 'highlights', value: 'Highlights'},
        {link: 'pricing', value: 'Pricing'},
        {link: 'location', value: 'Location'},

    ];

    const renderItems = (item) => {
        return(
            <ListItem>
                {item.value}
             </ListItem>
        )
    };


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
        <Drawer anchor={'right'} open={drawerToggle} onClose={() => setToggle(false)}>
            <List component="nav">
                {refLinks.map((item) => renderItems(item) )}
            </List>
        </Drawer>
       </Fragment>
    )
}
export default Sidedrawer;