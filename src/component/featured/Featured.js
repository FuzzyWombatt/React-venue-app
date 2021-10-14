import React from 'react'
import Carrousel from './carrousel';
import Timer from './Timer';

const Featured = () => {
    return (
        <div>
            <div className='relative overflow-hidden' style={{height: `${window.innerHeight}`}}>
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