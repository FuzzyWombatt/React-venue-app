import React from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import miku_1 from '../../resources/images/Miku-Expo.png';
import miku_2 from '../../resources/images/Miku-two.jpg';
import miku_3 from '../../resources/images/Miku-three.jpg';


const Carrousel = () => {
    const settings = {
        dots: false,
        Infinity: true,
        autoplay: true,
        speed: 400
    }


    return (
        <div style={{height: `${window.innerHeight}px`}}>
           <Slider {...settings}>
                <img src={miku_1}></img>
                <img src={miku_2}></img>
                <img src={miku_3}></img>
           </Slider>
        </div>
    );
}
 export default Carrousel;