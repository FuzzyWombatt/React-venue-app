import React from 'react'
import { Box, Container } from 'react-bulma-components';
import Carrousel from './carrousel';

const Featured = () => {
    return (
        <div className='carrousel_wrapper'>
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