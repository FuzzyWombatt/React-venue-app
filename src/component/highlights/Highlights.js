import React from 'react'
import Description from './Description'
import Discount from './Discount'

const Highlights = () => {
    return (
        <div className='flex flex-col bg-turqoise-900 items-center'>
            <Description/>
            <Discount/>
        </div>
    )
}

export default Highlights
