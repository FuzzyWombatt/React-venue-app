import React from 'react'
import { Zoom } from 'react-awesome-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'


const VenueNfo = () => {
    return (
        <div className='flex ptb-170 content-center bg-dark text-white h-700'>
                <Zoom className='vn_item'>
                        <div className='vn_outer h-full'>
                            <div className='vn_inner h-full'>
                                <div className='vn_icon_square bg-turqoise-300'></div>
                                <FontAwesomeIcon className='vn_icon' size='3x' icon={faCalendarAlt}/>
                                <div className='vn_title'>
                                    Event Date & Time  
                                </div>
                                <div className='vn_description text-2xl flex flex-col'>
                                    <div>Nov 20</div>
                                    <div>@01:20:00pm</div>
                                </div>
                            </div>
                        </div>
                </Zoom>
                <Zoom className='vn_item'>
                    <div className='vn_outer h-full'>
                        <div className='vn_inner h-full'>
                            <div className='vn_icon_square bg-turqoise-900'></div>
                            <FontAwesomeIcon className='vn_icon' size='3x' icon='ticket-alt'/>
                            <div className='vn_title'>
                                    Event Location  
                                </div>
                                <div className='vn_description text-2xl'>
                                    <div>NRG Pkwy, Houston, Texas 77054</div>
                                </div>
                        </div>
                    </div>
                </Zoom>
        </div>
    )
}

export default VenueNfo
