import React,{useState, useEffect} from 'react'
import { Slide } from 'react-awesome-reveal'

const Timer = () => {
    const[time, setTime] = useState(0);
    
    //a little inefficient considering it runs all the operations rather than changing only the element that changes
    //could refactor component into context and reducer, but this is simpler
    const renderItem = (time) => {
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor((time/(1000*3600))%24);
        const days = Math.floor((time/(1000*3600*24)));
        
        return(
        <div className='flex flex-row bg-burnt-orange text-white font-roboto'>
            <div className='flex flex-col items-center border-r-2 border-tangelo lh-80'>
                <div className='mt-3 text-6xl pl-3 pr-3'>{days} </div>
                <div className='ml-6 mr-6 mb-3'>Days</div>
            </div>        
            <div className='flex flex-col items-center border-r-2 border-tangelo'>
                <div className='mt-3 text-6xl'>{hours} </div>
                <div className='ml-6 mr-6 mb-3'>Hours</div>
            </div>
            <div className='flex flex-col items-center border-r-2 border-tangelo'>
                <div className='mt-3 text-6xl'>{minutes} </div>
                <div className='ml-6 mr-6 mb-3'>Minutes</div>
            </div>
            <div className='flex flex-col items-center border-tangelo'>
                <div className='mt-3 text-6xl'>{seconds} </div>
                <div className='ml-6 mr-6 mb-3'>Seconds</div>
            </div>
        </div>
        )
    }
    
    useEffect(() => {
        setInterval(() => setTime(Date.parse('Nov, 20, 2022, 01:20:00') - Date.parse(new Date())), 1000)
    },[])   

    return (
        <Slide left delay={800}>
                <div className='flex flex-col w-min-content absolute bottom-0'>
                    <header className='bg-tangelo w-3/5 font-Righteous text-white text-xl text-center'>Event starts in</header>
                    {renderItem(time)}
                </div>
        </Slide>
    )
}
export default Timer