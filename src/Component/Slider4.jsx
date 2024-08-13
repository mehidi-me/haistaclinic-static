'use client';

import React from 'react'
import Slider from 'react-slick';

function Slider4() {
    var settings1 = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      arrows: true,
      autoplay: true,
      gap: 10,
      responsive: [
        {
          breakpoint: 744,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
      };
  return (
    <Slider className="slider-4" {...settings1}>
         
        <div className="frame">
          <img loading="lazy" src="/images/haista-clinic1-768x768.webp" alt="" />
        </div>
        <div className="frame">
          <img loading="lazy" src="/images/haista-clinic3-768x768.webp" alt="" />
        </div>
        <div className="frame">
          <img loading="lazy" src="/images/haista-clinic6-768x768.webp" alt="" />
        </div>
        <div className="frame">
          <img loading="lazy" src="/images/haista-clinic7-768x768.webp" alt="" />
        </div>
      
      </Slider>
  )
}

export default Slider4