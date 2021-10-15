import React from 'react'
import Carrousel from './carrousel';
import Timer from './Timer';

const Featured = () => {
    const height = window.innerHeight;
    //console.log(height)
    
    return (
        <div>
            <div className='relative overflow-hidden' style={{height: `${height}px`}}>
                <Carrousel/>
                <div className='artist_name'>
                    <div className = 'wrapper'>
                        Ariana Grande
                    </div>
                </div>
                <Timer/>
            </div>
        </div>
    );
}
export default Featured;