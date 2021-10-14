import React from 'react'
import Carrousel from './carrousel';

const Featured = () => {
    return (
        <div className='overflow-hidden h-800 mt-16'>
            <Carrousel/>
            <div className='artist_name'>
                <div className = 'wrapper'>
                    Ariana Grande
                </div>
            </div>
        </div>
    );
}
export default Featured;