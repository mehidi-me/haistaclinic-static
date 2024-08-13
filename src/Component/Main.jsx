import Image from 'next/image'
import React, { Suspense } from 'react'
import Form from './Form'

function Main() {
  return (
    <main>
    <img loading="eager" className="shape1" src="/images/shape1.svg" alt="" />
    <div className="mobile-hero">
      <h1>Hair Transplant in Turkey</h1>
      <Image
        className="bg"
        priority={true}
        src="/images/haista-clinic7-768x768.webp"
        alt="Clinic"
        //  width={0}
        //  height={0}
        layout="fill"
        loading="eager"
      />
 
      <div className="logos">
        <img loading="eager" src="/images/Logo_JCI-1.png" alt="" />
        <img loading="eager" src="/images/fda-logo-1.png" alt="" />
        <img loading="eager" src="/images/tursab-logo2-1.png" alt="" />
        <img loading="eager" src="/images/health-logo-1.png" alt="" />
      </div>
    </div>
    <div className="container">
      <div className="content">
        <div className="fx-wrap">
          <h1 className="pc">Expert Hair Transplant in Turkey</h1>
          <div className="list">
            <h3><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 0.25 19.75 4.61522 19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 19.75 0.25 15.3848 0.25 10ZM13.6103 8.18593C13.8511 7.84887 13.773 7.38046 13.4359 7.1397C13.0989 6.89894 12.6305 6.97701 12.3897 7.31407L9.1543 11.8436L7.53033 10.2197C7.23744 9.92678 6.76256 9.92678 6.46967 10.2197C6.17678 10.5126 6.17678 10.9874 6.46967 11.2803L8.71967 13.5303C8.87556 13.6862 9.09215 13.7656 9.31186 13.7474C9.53157 13.7293 9.73216 13.6153 9.8603 13.4359L13.6103 8.18593Z" />
              </svg>
              10,000+ Successful Treatments</h3>
            <h3><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 0.25 19.75 4.61522 19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 19.75 0.25 15.3848 0.25 10ZM13.6103 8.18593C13.8511 7.84887 13.773 7.38046 13.4359 7.1397C13.0989 6.89894 12.6305 6.97701 12.3897 7.31407L9.1543 11.8436L7.53033 10.2197C7.23744 9.92678 6.76256 9.92678 6.46967 10.2197C6.17678 10.5126 6.17678 10.9874 6.46967 11.2803L8.71967 13.5303C8.87556 13.6862 9.09215 13.7656 9.31186 13.7474C9.53157 13.7293 9.73216 13.6153 9.8603 13.4359L13.6103 8.18593Z" />
              </svg>
              95% Satisfaction Rate</h3>
            <h3><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 0.25 19.75 4.61522 19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 19.75 0.25 15.3848 0.25 10ZM13.6103 8.18593C13.8511 7.84887 13.773 7.38046 13.4359 7.1397C13.0989 6.89894 12.6305 6.97701 12.3897 7.31407L9.1543 11.8436L7.53033 10.2197C7.23744 9.92678 6.76256 9.92678 6.46967 10.2197C6.17678 10.5126 6.17678 10.9874 6.46967 11.2803L8.71967 13.5303C8.87556 13.6862 9.09215 13.7656 9.31186 13.7474C9.53157 13.7293 9.73216 13.6153 9.8603 13.4359L13.6103 8.18593Z" />
              </svg>
              Free Consultation Available</h3>
            <h3><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 0.25 19.75 4.61522 19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 19.75 0.25 15.3848 0.25 10ZM13.6103 8.18593C13.8511 7.84887 13.773 7.38046 13.4359 7.1397C13.0989 6.89894 12.6305 6.97701 12.3897 7.31407L9.1543 11.8436L7.53033 10.2197C7.23744 9.92678 6.76256 9.92678 6.46967 10.2197C6.17678 10.5126 6.17678 10.9874 6.46967 11.2803L8.71967 13.5303C8.87556 13.6862 9.09215 13.7656 9.31186 13.7474C9.53157 13.7293 9.73216 13.6153 9.8603 13.4359L13.6103 8.18593Z" />
              </svg>Competitive pricing with premium care</h3>
          </div>
          <p className="pc">Welcome to Turkey’s leading hair restoration clinic, serving clients since 2010. Our
            advanced hair
            transplant techniques
            and experienced team ensure natural-looking results tailored to your needs.
          </p>
           <a aria-label="empty" href="#"><button>Book Your Consultation</button></a>
        </div>
        <div className="trust">
          <img loading="eager" src="/images/Lead-Capture-Hero-Star.webp" alt="" />
          <p>4.7/5 on <span>TrustPilot</span>
          </p>
        </div>
      </div>
      <div className="form">
        <img loading="lazy" className="overlay1" src="/images/Lead-Capture-Hero-Ornament.webp" alt="" />
        <img loading="lazy" className="overlay2" src="/images/Lead-Capture-Hero-Ornament.webp" alt="" />
        <h2>30-Second Form for a Fuller Head of Hair</h2>
        <Suspense>
        <Form />
        </Suspense>
        
        
        <div className="privacy">
          <i><svg width={20} height={22} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.5157 1.1698C10.2265 0.895873 9.77353 0.895873 9.48428 1.1698C7.46752 3.07977 4.74624 4.25011 1.75 4.25011C1.70233 4.25011 1.65473 4.24981 1.60721 4.24922C1.27984 4.24515 0.987669 4.4539 0.885415 4.76491C0.472873 6.01968 0.25 7.35963 0.25 8.75015C0.25 14.6922 4.31406 19.6831 9.81306 21.0984C9.93569 21.13 10.0643 21.13 10.1869 21.0984C15.6859 19.6831 19.75 14.6922 19.75 8.75015C19.75 7.35963 19.5271 6.01968 19.1146 4.76491C19.0123 4.4539 18.7202 4.24515 18.3928 4.24922C18.3453 4.24981 18.2977 4.25011 18.25 4.25011C15.2538 4.25011 12.5325 3.07977 10.5157 1.1698ZM13.6103 9.18593C13.8511 8.84887 13.773 8.38046 13.4359 8.1397C13.0989 7.89894 12.6305 7.97701 12.3897 8.31407L9.1543 12.8436L7.53033 11.2197C7.23744 10.9268 6.76256 10.9268 6.46967 11.2197C6.17678 11.5126 6.17678 11.9874 6.46967 12.2803L8.71967 14.5303C8.87556 14.6862 9.09215 14.7656 9.31186 14.7474C9.53157 14.7293 9.73216 14.6153 9.8603 14.4359L13.6103 9.18593Z" />
            </svg>
          </i>
          <p>Your privacy is our priority.</p>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Main