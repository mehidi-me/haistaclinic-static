'use client';

import React from 'react'
import Slider from 'react-slick';

function Slider2() {
    var settings1 = {
        dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      arrows: true,
      autoplay: true,
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
 
      <Slider className="slider-1 mn-w" {...settings1}>
    <div className="frame">
      <img loading="lazy" src="/images/hair-transplant-turkey-1-768x768.webp" alt="" />
    </div>
    <div className="frame">
      <img loading="lazy" src="/images/hair-transplant-turkey-2-768x768.webp" alt="" />
    </div>
    <div className="frame">
      <img loading="lazy" src="/images/hair-transplant-turkey-3-768x768.webp" alt="" />
    </div>
    <div className="frame">
      <img loading="lazy" src="/images/hair-transplant-turkey-4-768x767.webp" alt="" />
    </div>
    <div className="frame">
      <img loading="lazy" src="/images/hair-transplant-turkey-5-768x768.webp" alt="" />
    </div>
    <div className="frame">
      <img loading="lazy" src="/images/hair-transplant-turkey-6-768x768.webp" alt="" />
    </div>
    <div className="frame">
      <img loading="lazy" src="/images/hair-transplant-turkey-7-768x768.webp" alt="" />
    </div>
 
      </Slider>
  )
}

export default Slider2