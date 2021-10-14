import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => {
  const [open, setOpen] = useState(false)
  const [over, setOver] = useState(false)
  return (
    <nav className='bg-dark flex flex-row fixed z-10 w-screen'>
            <div className='items-center flex flex-row'>
                <FontAwesomeIcon 
                    icon='guitar' 
                    size="3x" 
                    color='white' 
                    className='m-1'/>
                <table className='m-2' >
                    <tbody>
                        <tr>
                            <td className='text-white text-3xl font-Righteous font-bold'>
                                The venue
                            </td>
                        </tr>
                        <tr>
                            <td className='text-white text-sm font-roboto font-bold'>
                                Musical Events
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex flex-grow justify-end'>
                <button className='mr-8 bg-transparent' 
                    //essentially a css::hover effect using state hooks        
                    onMouseOver={() => setOver(true)}
                    onMouseLeave={() => setOver(false)}>
                    <FontAwesomeIcon 
                        color='white' 
                        size='2x'
                        icon='bars'
                        //ternary operator to create effect based on mouse hover event
                        style = {over ? { color: 'orange'} : {}} />
                </button>
            </div>
        </nav>
  );
}

export default Header;
