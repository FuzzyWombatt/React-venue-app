import React from 'react'
import { Zoom } from 'react-awesome-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'


const VenueNfo = () => {
    return (
        <div className='flex ptb-170 content-center bg-dark text-white'>
                <Zoom className='vn_item'>
                        <div className='vn_outer w-4/6'>
                            <div className='vn_inner'>
                                <div className='vn_icon_square bg-turqoise-300'></div>
                                <FontAwesomeIcon className='vn_icon' size='3x' icon={faCalendarAlt}/>
                                <div className='vn_title'>
                                    Event Date and Time  
                                </div>
                                <div className='vn_description'>
                                    Nov 20, 2022
                                    @01:20:00pm 
                                </div>
                            </div>
                        </div>
                </Zoom>
                <Zoom className='vn_item'>
                    <div className='vn_outer'>
                        <div className='vn_inner'>
                            <div className='vn_icon_square bg-turqoise-900'></div>
                            <FontAwesomeIcon className='vn_icon' size='3x' icon='ticket-alt'/>
                            <div className='vn_title'>
                                Event Date and Time  
                            </div>
                            <div className='vn_description'>
                                Nov 20, 2022
                                @01:20:00pm 
                            </div>
                        </div>
                    </div>
                </Zoom>
        </div>
    )
}

export default VenueNfo
