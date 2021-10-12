import React,{useState, useEffect, useCallback} from 'react'
import { Slide } from 'react-awesome-reveal'

const Timer = () => {
    const renderItem = (props) => {
        <td></td>
    }
    
    const getTime = (startDate) => {
        const time =  Date.parse(startDate) - Date.parse(new Date())
    }
    
    useEffect(() => {
        setInterval(() => getTime('Nov, 20, 2021, 01:20:00'), 1000)
        if(time < 0){
            console.log('Concert Over')
        }else{

        }


    },[getTime])   

    return (
        <Slide left delay={1200}>
            <span>

            </span>
            <table>
                <tr>
                    <td></td>
                </tr>
            </table>
        </Slide>
    )
}
export default Timer