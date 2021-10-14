import React from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import grande_1 from '../../resources/images/grande_1.jpg';
import grande_2 from '../../resources/images/grande_2.jpg';
import grande_3 from '../../resources/images/grande_3.jpg';


const Carrousel = () => {
    const settings = {
        dots: false,
        Infinity: true,
        autoplay: true,
        speed: 400

    }
    
    return (
           <Slider {...settings} >
                <img style={{height: `${window.innerHeight}`}} src={grande_1} alt=''></img>
                <img style={{height: `${window.innerHeight}`}}  src={grande_2} alt=''></img>
                <img style={{height: `${window.innerHeight}`}} src={grande_3}  alt=''></img>
           </Slider>
    );
}
 export default Carrousel;