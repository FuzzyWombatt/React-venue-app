import React, {useState, useEffect} from "react";
import { Navbar, Heading} from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//this form will have a different coding style as a means of testing how I like it and its easer of use

const Header = () => {
  const [open, setOpen] = useState(false)
  const [over, setOver] = useState(false)
  return (
    <Navbar 
        fixed='top' 
        backgroundColor='dark'
    >
            <Navbar.Brand 
                alignItems='center'
            >
                <FontAwesomeIcon 
                    icon='guitar' 
                    size="3x" 
                    color='white' 
                    style={{margin: '.25rem'}}
                />
                <table 
                    style={{margin: ".5rem"}}
                >
                    <tr>
                        <Heading 
                            textColor='white' 
                            style={{fontFamily: 'righteous, cursive',
                                    fontWeight: "bold"}}
                        >
                            The venue
                        </Heading>
                    </tr>
                    <tr>
                        <Heading 
                            size="6" 
                            textColor='white' 
                            style={{fontFamily: "roboto"}}
                        >
                            Musical Events
                        </Heading>
                    </tr>
                </table>
            </Navbar.Brand>
            <Navbar.Menu justifyContent='right' alignItems='center'>
                <button 
                    style={{backgroundColor: 'transparent',
                            border: 'transparent',
                            marginRight: '1rem'}}
                    //essentially a css::hover effect         
                    onMouseOver={() => setOver(true)}
                    onMouseLeave={() => setOver(false)}
                >
                    <FontAwesomeIcon 
                        color='white' 
                        size='2x'
                        icon='bars'
                        //ternary operator to create effect based on mouse hover event
                        style = {over ? { color: 'orange'} : {}} 
                        flash
                    />
                </button>
            </Navbar.Menu>
    </Navbar>
  );
}

export default Header;
