import React from 'react'
import Description from './Description'
import Discount from './Discount'

const Highlights = () => {
    return (
        <div className='flex flex-col h-750 bg-turqoise-900'>
            <Description/>
            <Discount/>
        </div>
    )
}

export default Highlights
