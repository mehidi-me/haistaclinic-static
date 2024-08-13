'use client';

import React from 'react'
import Slider from 'react-slick';

function Slider1() {
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
    <Slider className="slider-1" {...settings1}>
        <div className="frame">
          <img loading="lazy" src="/images/hair-transplant-before-after1-768x768.webp" alt="" />
        </div>
        <div className="frame">
          <img loading="lazy" src="/images/hair-transplant-before-after2-768x768.webp" alt="" />
        </div>
        <div className="frame">
          <img loading="lazy" src="/images/hair-transplant-before-after3-768x768.webp" alt="" />
        </div>
        <div className="frame">
          <img loading="lazy" src="/images/hair-transplant-before-after4-768x768.webp" alt="" />
        </div>
        <div className="frame">
          <img loading="lazy" src="/images/hair-transplant-before-after5-768x768.webp" alt="" />
        </div>
      </Slider>
  )
}

export default Slider1