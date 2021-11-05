import React from 'react'
import { Button } from '@mui/material'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const UtilButton = ({text, link, size, icon, style}) => {
    return (
        <Button
            href={link}
            size={size ? size: 'large'}
            style={{
                background: '#89ecda',
                color: '#ffffff',
                width: '40%',
                ...style
            }} 
        >
            {icon ? <FontAwesomeIcon size='2x' icon={icon} style={{paddingRight: 16}}/> : null}
            {text}
        </Button>
    )
}


export default UtilButton
