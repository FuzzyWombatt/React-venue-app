import React, {Fragment, useState}  from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { List, Drawer, ListItemButton } from '@mui/material';
import { scroller } from 'react-scroll';


const Sidedrawer = () =>{
    const [over, setOver] = useState(false);
    const [drawerToggle, setToggle] = useState(false);
    //icon string must use the right suntax not fa since already in a library
    const refLinks = [
        {link: 'featured', value: 'To top', icon: 'level-up-alt'},
        {link: 'venuenfo', value: 'Venue Nfo', icon: 'warehouse'},
        {link: 'highlights', value: 'Highlights', icon: 'ticket-alt'},
        {link: 'pricing', value: 'Pricing', icon: 'dollar-sign'},
        {link: 'location', value: 'Location', icon: 'map-marker-alt'},

    ];

    const goToElement = (link) => {
        scroller.scrollTo(link, {
          duration: 1250,
          delay: 100,
          smooth: true,
          offset: -150
        })
    }

    const renderItems = (item) => {
        return(
            <ListItemButton className='bg-turqoise-90' onClick={() => goToElement(item.link)} sx={{borderBottom: 2, borderColor: '#b3ecec' }}>
                <div className='flex flex-row text-center text-white  hover:text-turqoise-100 text-2xl'>
                  <div className='w-54'>
                    <FontAwesomeIcon className='pr-4' size='2x' icon={item.icon}/>
                  </div>
                  <div className='self-center pr-2 font-Equinox-bold'>{item.value}</div>
                </div>
             </ListItemButton>
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
            <List component="nav" className='bg-turqoise-900 h-full'>
                {refLinks.map((item) => renderItems(item) )}
            </List>
        </Drawer>
       </Fragment>
    )
}
export default Sidedrawer;