"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { InView, useInView } from "react-intersection-observer";
const DynamicSlider1 = dynamic(() => import("@/Component/Slider1"));
const DynamicSlider2 = dynamic(() => import("@/Component/Slider2"));
const DynamicSlider3 = dynamic(() => import("@/Component/Slider3"));
const DynamicSlider4 = dynamic(() => import("@/Component/Slider4"));
const DynamicVideos = dynamic(() => import("@/Component/Videos"));
const DynamicFaq = dynamic(() => import("@/Component/Faq"));

function Home() {
  // const { ref, inView, entry } = useInView();
  // console.log(inView)
  const [show,setShow] = useState(false)
  return (
   
    <>
     <InView onChange={(v) => {
        if(v) setShow(true)
     }}>
    {({ inView, ref, entry }) => (
      <div ref={ref}>
        {!show && <h2 style={{height:"50px"}}></h2>}
      </div>
    )}
  </InView>
    {show && (
        <div>
        <section className="bg relative bg-mb">
          <img
            loading="lazy"
            className="shape5"
            src="/images/shape5.svg"
            alt=""
          />
          <div className="container">
            <div className="title">
              <p>Honest Opinions After Operation</p>
              <h2>Hear From Our Patients</h2>
              <span>Hair Transplant Turkey</span>
            </div>
            <div className="grid-3">
              <DynamicVideos />
            </div>
            <a aria-label="empty" href="#">
              <button className="animated">
                <img
                  loading="lazy"
                  src="/images/Animation-1720298714540.gif"
                  alt=""
                  unoptimized={true}
                />
                Ask our representative for more results.
              </button>
            </a>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="title">
              <p style={{ color: "var(--secoundprimary)" }}>
                Expert-Guided Procedure Selection
              </p>
              <h2>Our Hair Loss Solutions</h2>
              <span>Hair Transplant Turkey</span>
            </div>
            <div className="grid-3">
              <div className="card">
                <h3>FUE Hair Transplant</h3>
                <p>
                  Minimally invasive technique where individual hair follicles are
                  extracted and implanted for natural-looking results. Ideal for
                  larger areas of hair loss with minimal scarring.
                </p>
              </div>
              <div className="card">
                <h3>DHI Hair Transplant</h3>
                <p>
                  Cutting-edge method using a specialized Choi pen for direct
                  implantation. Offers higher density and precision, perfect for
                  creating natural hairlines and filling in smaller areas.
                </p>
              </div>
              <div className="card">
                <h3>Sapphire Hair Transplant</h3>
                <p>
                  Advanced variation of FUE using sapphire blades for even more
                  precise incisions. Results in faster healing, reduced trauma,
                  and allows for denser hair placement.
                </p>
              </div>
            </div>
            <div className="mobile-cta">
              <h2>Discover Your New Look</h2>
              <h3>
                Start Your Hair Journey, Claim Your Free Hair Assessment Now
              </h3>
              <a aria-label="empty" href="#">
                <button>Risk-Free Consultation</button>
              </a>
            </div>
          </div>
        </section>
        <section className="bg2 relative">
          <img
            loading="lazy"
            className="shape2"
            src="/images/shape2.svg"
            alt=""
          />
          <div className="container">
            <div className="title t2">
              <h2>HAIR RESTORATION PACKAGES</h2>
              <h3>TAILORED SOLUTIONS FOR YOUR TRANSFORMATION</h3>
              <span>Hair Transplant Turkey</span>
            </div>
            <div className="grid-3">
              <div className="package-card">
                <div className="price">
                  <p>Essential Transplant Package</p>
                  <h4>
                    €<span>1650</span>
                  </h4>
                  <span className="tag">Best Value</span>
                </div>
                <div className="list">
                  <p>Package Includes:</p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{" "}
                    Maximum Graft Count (Up to 5000)
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{" "}
                    4★ Hotel for 2 Nights
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    VIP Airport Transfer (Round Trip)
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    Pre-Op Tests &amp; Consults
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    FUE Technique
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{" "}
                    6-Month Follow-Up Support
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    Translator in The Clinic
                  </p>
                </div>
                <a aria-label="empty" href="#">
                  <button>Chat with a Hair Expert Now</button>
                </a>
              </div>
              <div className="package-card">
                <div className="price">
                  <p>Essential Transplant Package</p>
                  <h4>
                    €<span>1650</span>
                  </h4>
                  <span className="tag">Best Value</span>
                </div>
                <div className="list">
                  <p>Package Includes:</p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{" "}
                    Maximum Graft Count (Up to 5000)
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{" "}
                    5★ Hotel Accommodation For 2 Nights
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    VIP Airport Transfer (Round Trip)
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    Pre-Op Tests &amp; Consults
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    FUE Technique
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{" "}
                    PRP Treatment Included
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    Post-Op Care Kit (3 Months Supply)
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    1-Year Follow-Up Support
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    Translator in The Clinic
                  </p>
                </div>
                <a aria-label="empty" href="#">
                  <button>Chat with a Hair Expert Now</button>
                </a>
              </div>
              <div className="package-card">
                <div className="price">
                  <p>Essential Transplant Package</p>
                  <h4>
                    €<span>1650</span>
                  </h4>
                  <span className="tag">Best Value</span>
                </div>
                <div className="list">
                  <p>Package Includes:</p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{" "}
                    Maximum Graft Count (Up to 5000)
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{" "}
                    5★ Hotel Accommodation For 2 Nights
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    VIP Airport Transfer (Round Trip)
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    Pre-Op Tests &amp; Consults
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    Advanced FUE or DHI Technique
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{" "}
                    PRP Treatment Included
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    Post-Op Care Kit (6 Months Supply)
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    24/7 Personal Assistant During Stay
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    Lifetime Follow-Up Support
                  </p>
                  <p>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-check"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    Istanbul Tour Included
                  </p>
                </div>
                <a aria-label="empty" href="#">
                  <button>Chat with a Hair Expert Now</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg2 relative">
          <img
            loading="lazy"
            className="shape2"
            src="/images/shape2.svg"
            alt=""
          />
          <div className="container">
            <div className="title t2">
              <h2>Hair Restoration Success Stories</h2>
              <h3>Before &amp; After</h3>
              <span>Hair Transplant Turkey</span>
            </div>
  
            <DynamicSlider1 />
            <a aria-label="empty" href="#">
              <button className="animated">
                <img
                  loading="lazy"
                  src="/images/Animation-1720298714540.gif"
                  unoptimized={true}
                  alt=""
                />
                Ask our representative for more results.
              </button>
            </a>
          </div>
        </section>
        <section className="bg3 relative">
          <img
            loading="lazy"
            className="shape3"
            src="/images/shape3.svg"
            alt=""
          />
          <img
            loading="lazy"
            className="shape4"
            src="/images/shape3.svg"
            alt=""
          />
          <div className="container">
            <div className="wp-card">
              <div className="ico">
                <img
                  loading="lazy"
                  src="/images/Animation-1720298714540.gif"
                  unoptimized={true}
                  alt=""
                />
              </div>
              <h2>Talk to Our Expert</h2>
              <p>
                Connect with us before your hair transplant operation and get a
                personalized pre-op meeting.
              </p>
              <a aria-label="empty" href="#">
                <button className="primary">Request a call</button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="title t2">
              <h3>Get Your Dream Hair in 3 Easy Steps!</h3>
            </div>
            <div className="grid-3">
              <div className="card">
                <h2>01</h2>
                <h3>ONLINE CONSULTATION</h3>
                <p>
                  For online consultation, we will ask for your medical history
                  and photos of your scalp from different angles.{" "}
                  <span>
                    We will discuss your hair restoration goals and address any
                    questions you have
                  </span>
                  (Depending on your hair loss pattern, additional details such as
                  close-up scalp images might be necessary).
                </p>
              </div>
              <div className="card">
                <h2>02</h2>
                <h3>Treatment Planning</h3>
                <p>
                  After reviewing your photos and information, our hair
                  restoration experts will recommend a personalized treatment
                  plan. We’ll also provide details on alternative options,
                  procedure duration, and costs.
                </p>
              </div>
              <div className="card">
                <h2>03</h2>
                <h3>Schedule Appointment</h3>
                <p>
                  Once you decide to proceed with the treatment, we will schedule
                  your appointment according to your preference and arrange all
                  necessary travel details, including arrival and return dates,
                  for you.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg5 relative">
          <img
            loading="lazy"
            className="shape3"
            src="/images/shape3.svg"
            alt=""
          />
          <div className="container">
            <div className="grid-2 align-center mb-d">
              <DynamicSlider2 />
              <div className="text-box">
                <div className="tag">BENEFITS</div>
                <h2>No need to plan anything; we handle it all. Just arrive.</h2>
                <p>Just focus on your treatment and relaxation.</p>
                <a aria-label="empty" href>
                  <button>Schedule a Consultation</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg">
          <div className="container">
            <div className="title t3">
              <h2>Exclusive Services</h2>
            </div>
            <div className="cards">
              <div className="card-2 div1">
                <div className="ico">
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg e-fas-building"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
                  </svg>
                </div>
                <h3>ALL IN ONE PACKAGES</h3>
                <p>
                  Discover Haista Clinic’s tailored hair restoration solutions in
                  Turkey. We focus on your best results, not the highest price.
                  Our clients’ satisfaction and natural-looking outcomes speak for
                  themselves.
                </p>
              </div>
              <div className="card-2 div2">
                <div className="ico">
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg e-fas-hand-holding-usd"
                    viewBox="0 0 576 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z"></path>
                  </svg>
                </div>
                <h3>No hidden fees</h3>
                <p>
                  We believe in transparency and honesty. That’s why there are no
                  hidden fees or surprises with our loans.
                </p>
              </div>
              <div className="card-2 div3">
                <div className="ico">
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg e-fas-hand-holding-heart"
                    viewBox="0 0 576 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"></path>
                  </svg>
                </div>
                <h3>AFTER CARE</h3>
                <p>
                  Maintaining the long-term results of your procedure is our
                  priority. Enjoy our post-operative care and support, helping you
                  develop lasting healthy habits.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="title t4">
              <small>WE ARE PROUD OF</small>
              <h2>Our Happy Patients</h2>
            </div>
            <DynamicSlider3 />
            <DynamicSlider4 />
          </div>
        </section>
        <section className="bg">
          <div className="container">
            <div className="title t4 t42">
              <div className="tag">FAQS</div>
              <h2>Frequently Asked Questions</h2>
            </div>
            <DynamicFaq />
          </div>
        </section>
        <section className="bg7">
          <div className="container">
            <div className="content-box">
              <h3 className="tag2">Join Us</h3>
              <h2>The Best Hair Transplant Clinic In Turkey</h2>
              <p>
                Start today for a safer, private, and uncompromised Hair
                Transplant Operation
              </p>
              <a aria-label="empty" href="#">
                <button>Claim Your Free Consultation</button>
              </a>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <p>Copyright: © 2024 Haista Clinic</p>
            <div className="links">
              <a aria-label="empty" href>
                Terms
              </a>
              <a aria-label="empty" href>
                Privacy
              </a>
              <a aria-label="empty" href>
                Cookies
              </a>
            </div>
          </div>
        </footer>
        <a aria-label="empty" href="#" className="wp">
          <img loading="lazy" src="/images/whatsapp.png" alt="" />
        </a>
      </div>
    )}
    </>
  );
}

export default Home;
