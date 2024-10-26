import React from 'react'
import Slider from 'react-slick'


export default function SliderItem({ settings, items }) {
   
    
    return (
        <Slider {...settings}>
            {items}
        </Slider>
    )
}
