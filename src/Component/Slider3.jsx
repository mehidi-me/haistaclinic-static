'use client';

import React from 'react'
import Slider from 'react-slick';

function Slider3() {
    var settings1 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: false,
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
    <Slider className="slider-3" {...settings1}>
      
        <div className="review-card">
          <div className="details">
            <p>Aaron</p>
            <span>Hair Transpalant</span>
          </div>
          <div className="stars">
            <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.86804 0.88376C9.54694 0.111745 8.45329 0.111745 8.13219 0.88376L6.3014 5.28553L1.54932 5.6665C0.715863 5.73332 0.377908 6.77343 1.01291 7.31738L4.63349 10.4188L3.52735 15.056C3.33334 15.8693 4.21812 16.5122 4.93167 16.0763L9.00011 13.5913L13.0686 16.0763C13.7821 16.5122 14.6669 15.8693 14.4729 15.056L13.3667 10.4188L16.9873 7.31738C17.6223 6.77343 17.2844 5.73332 16.4509 5.6665L11.6988 5.28553L9.86804 0.88376Z" fill="#0F172A" />
            </svg>
            <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.86804 0.88376C9.54694 0.111745 8.45329 0.111745 8.13219 0.88376L6.3014 5.28553L1.54932 5.6665C0.715863 5.73332 0.377908 6.77343 1.01291 7.31738L4.63349 10.4188L3.52735 15.056C3.33334 15.8693 4.21812 16.5122 4.93167 16.0763L9.00011 13.5913L13.0686 16.0763C13.7821 16.5122 14.6669 15.8693 14.4729 15.056L13.3667 10.4188L16.9873 7.31738C17.6223 6.77343 17.2844 5.73332 16.4509 5.6665L11.6988 5.28553L9.86804 0.88376Z" fill="#0F172A" />
            </svg>
            <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.86804 0.88376C9.54694 0.111745 8.45329 0.111745 8.13219 0.88376L6.3014 5.28553L1.54932 5.6665C0.715863 5.73332 0.377908 6.77343 1.01291 7.31738L4.63349 10.4188L3.52735 15.056C3.33334 15.8693 4.21812 16.5122 4.93167 16.0763L9.00011 13.5913L13.0686 16.0763C13.7821 16.5122 14.6669 15.8693 14.4729 15.056L13.3667 10.4188L16.9873 7.31738C17.6223 6.77343 17.2844 5.73332 16.4509 5.6665L11.6988 5.28553L9.86804 0.88376Z" fill="#0F172A" />
            </svg>
            <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.86804 0.88376C9.54694 0.111745 8.45329 0.111745 8.13219 0.88376L6.3014 5.28553L1.54932 5.6665C0.715863 5.73332 0.377908 6.77343 1.01291 7.31738L4.63349 10.4188L3.52735 15.056C3.33334 15.8693 4.21812 16.5122 4.93167 16.0763L9.00011 13.5913L13.0686 16.0763C13.7821 16.5122 14.6669 15.8693 14.4729 15.056L13.3667 10.4188L16.9873 7.31738C17.6223 6.77343 17.2844 5.73332 16.4509 5.6665L11.6988 5.28553L9.86804 0.88376Z" fill="#0F172A" />
            </svg>
            <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.86804 0.88376C9.54694 0.111745 8.45329 0.111745 8.13219 0.88376L6.3014 5.28553L1.54932 5.6665C0.715863 5.73332 0.377908 6.77343 1.01291 7.31738L4.63349 10.4188L3.52735 15.056C3.33334 15.8693 4.21812 16.5122 4.93167 16.0763L9.00011 13.5913L13.0686 16.0763C13.7821 16.5122 14.6669 15.8693 14.4729 15.056L13.3667 10.4188L16.9873 7.31738C17.6223 6.77343 17.2844 5.73332 16.4509 5.6665L11.6988 5.28553L9.86804 0.88376Z" fill="#0F172A" />
            </svg>
          </div>
          <div className="feedback">
            <p>Great communication. Well organised, all transfers and hotel sorted. Friendly staff at clinic
              and
              translator makes a big
              difference to the day. Most of all, great aftercare, giving great advice and tips to keep
              mind
              at ease on progress.
              Looking forward to the results</p>
          </div>
        </div>
        <div className="review-card">
          <div className="details">
            <p>James O</p>
            <span>Hair Transpalant</span>
          </div>
          <div className="stars">
            <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.86804 0.88376C9.54694 0.111745 8.45329 0.111745 8.13219 0.88376L6.3014 5.28553L1.54932 5.6665C0.715863 5.73332 0.377908 6.77343 1.01291 7.31738L4.63349 10.4188L3.52735 15.056C3.33334 15.8693 4.21812 16.5122 4.93167 16.0763L9.00011 13.5913L13.0686 16.0763C13.7821 16.5122 14.6669 15.8693 14.4729 15.056L13.3667 10.4188L16.9873 7.31738C17.6223 6.77343 17.2844 5.73332 16.4509 5.6665L11.6988 5.28553L9.86804 0.88376Z" fill="#0F172A" />
            </svg>
            <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.86804 0.88376C9.54694 0.111745 8.45329 0.111745 8.13219 0.88376L6.3014 5.28553L1.54932 5.6665C0.715863 5.73332 0.377908 6.77343 1.01291 7.31738L4.63349 10.4188L3.52735 15.056C3.33334 15.8693 4.21812 16.5122 4.93167 16.0763L9.00011 13.5913L13.0686 16.0763C13.7821 16.5122 14.6669 15.8693 14.4729 15.056L13.3667 10.4188L16.9873 7.31738C17.6223 6.77343 17.2844 5.73332 16.4509 5.6665L11.6988 5.28553L9.86804 0.88376Z" fill="#0F172A" />
            </svg>
            <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.86804 0.88376C9.54694 0.111745 8.45329 0.111745 8.13219 0.88376L6.3014 5.28553L1.54932 5.6665C0.715863 5.73332 0.377908 6.77343 1.01291 7.31738L4.63349 10.4188L3.52735 15.056C3.33334 15.8693 4.21812 16.5122 4.93167 16.0763L9.00011 13.5913L13.0686 16.0763C13.7821 16.5122 14.6669 15.8693 14.4729 15.056L13.3667 10.4188L16.9873 7.31738C17.6223 6.77343 17.2844 5.73332 16.4509 5.6665L11.6988 5.28553L9.86804 0.88376Z" fill="#0F172A" />
            </svg>
            <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.86804 0.88376C9.54694 0.111745 8.45329 0.111745 8.13219 0.88376L6.3014 5.28553L1.54932 5.6665C0.715863 5.73332 0.377908 6.77343 1.01291 7.31738L4.63349 10.4188L3.52735 15.056C3.33334 15.8693 4.21812 16.5122 4.93167 16.0763L9.00011 13.5913L13.0686 16.0763C13.7821 16.5122 14.6669 15.8693 14.4729 15.056L13.3667 10.4188L16.9873 7.31738C17.6223 6.77343 17.2844 5.73332 16.4509 5.6665L11.6988 5.28553L9.86804 0.88376Z" fill="#0F172A" />
            </svg>
            <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.86804 0.88376C9.54694 0.111745 8.45329 0.111745 8.13219 0.88376L6.3014 5.28553L1.54932 5.6665C0.715863 5.73332 0.377908 6.77343 1.01291 7.31738L4.63349 10.4188L3.52735 15.056C3.33334 15.8693 4.21812 16.5122 4.93167 16.0763L9.00011 13.5913L13.0686 16.0763C13.7821 16.5122 14.6669 15.8693 14.4729 15.056L13.3667 10.4188L16.9873 7.31738C17.6223 6.77343 17.2844 5.73332 16.4509 5.6665L11.6988 5.28553L9.86804 0.88376Z" fill="#0F172A" />
            </svg>
          </div>
          <div className="feedback">
            <p>
              I picked haista clinic seen amazing results in my friend's hair .so that why pick them I got
              it
              done 2 weeks ago from
              start to finish ther team are on point from transport hotel and getting it done didn't feel
              alone wit the team very nice
              people from Ireland thanks again haista💯👍🧔🧔🧔</p>
          </div>
        </div>
        <div className="review-card">
          <div className="details">
            <p>Rus</p>
            <span>Dental Implants &amp; Hair Transplant</span>
          </div>
          <div className="stars">
            <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.86804 0.88376C9.54694 0.111745 8.45329 0.111745 8.13219 0.88376L6.3014 5.28553L1.54932 5.6665C0.715863 5.73332 0.377908 6.77343 1.01291 7.31738L4.63349 10.4188L3.52735 15.056C3.33334 15.8693 4.21812 16.5122 4.93167 16.0763L9.00011 13.5913L13.0686 16.0763C13.7821 16.5122 14.6669 15.8693 14.4729 15.056L13.3667 10.4188L16.9873 7.31738C17.6223 6.77343 17.2844 5.73332 16.4509 5.6665L11.6988 5.28553L9.86804 0.88376Z" fill="#0F172A" />
            </svg>
            <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.86804 0.88376C9.54694 0.111745 8.45329 0.111745 8.13219 0.88376L6.3014 5.28553L1.54932 5.6665C0.715863 5.73332 0.377908 6.77343 1.01291 7.31738L4.63349 10.4188L3.52735 15.056C3.33334 15.8693 4.21812 16.5122 4.93167 16.0763L9.00011 13.5913L13.0686 16.0763C13.7821 16.5122 14.6669 15.8693 14.4729 15.056L13.3667 10.4188L16.9873 7.31738C17.6223 6.77343 17.2844 5.73332 16.4509 5.6665L11.6988 5.28553L9.86804 0.88376Z" fill="#0F172A" />
            </svg>
            <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.86804 0.88376C9.54694 0.111745 8.45329 0.111745 8.13219 0.88376L6.3014 5.28553L1.54932 5.6665C0.715863 5.73332 0.377908 6.77343 1.01291 7.31738L4.63349 10.4188L3.52735 15.056C3.33334 15.8693 4.21812 16.5122 4.93167 16.0763L9.00011 13.5913L13.0686 16.0763C13.7821 16.5122 14.6669 15.8693 14.4729 15.056L13.3667 10.4188L16.9873 7.31738C17.6223 6.77343 17.2844 5.73332 16.4509 5.6665L11.6988 5.28553L9.86804 0.88376Z" fill="#0F172A" />
            </svg>
            <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.86804 0.88376C9.54694 0.111745 8.45329 0.111745 8.13219 0.88376L6.3014 5.28553L1.54932 5.6665C0.715863 5.73332 0.377908 6.77343 1.01291 7.31738L4.63349 10.4188L3.52735 15.056C3.33334 15.8693 4.21812 16.5122 4.93167 16.0763L9.00011 13.5913L13.0686 16.0763C13.7821 16.5122 14.6669 15.8693 14.4729 15.056L13.3667 10.4188L16.9873 7.31738C17.6223 6.77343 17.2844 5.73332 16.4509 5.6665L11.6988 5.28553L9.86804 0.88376Z" fill="#0F172A" />
            </svg>
            <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.86804 0.88376C9.54694 0.111745 8.45329 0.111745 8.13219 0.88376L6.3014 5.28553L1.54932 5.6665C0.715863 5.73332 0.377908 6.77343 1.01291 7.31738L4.63349 10.4188L3.52735 15.056C3.33334 15.8693 4.21812 16.5122 4.93167 16.0763L9.00011 13.5913L13.0686 16.0763C13.7821 16.5122 14.6669 15.8693 14.4729 15.056L13.3667 10.4188L16.9873 7.31738C17.6223 6.77343 17.2844 5.73332 16.4509 5.6665L11.6988 5.28553L9.86804 0.88376Z" fill="#0F172A" />
            </svg>
          </div>
          <div className="feedback">
            <p>I had a hair transplant and dental implant with Haista Clinic. Very professional from start
              to
              finish. I recommend with
              confidence. Thank you 🙏👍</p>
          </div>
        </div>
      
      </Slider>
  )
}

export default Slider3