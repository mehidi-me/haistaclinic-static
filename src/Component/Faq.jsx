"use client";
import React, { useEffect, useState } from "react";

function Faq() {
 

  const [activeIndex, setActiveIndex] = useState(0);

  const questions = [
    { question: "Why choose Turkey for a hair transplant?", answer: "Turkey is renowned for expert hair restoration at competitive prices. Our clinics offer state-of-the-art technology, experienced surgeons, and a chance to combine your treatment with a memorable trip to Istanbul." },
    { question: "How long does a hair transplant procedure take?", answer: "Most hair transplant procedures in Turkey take 6-8 hours, depending on the extent of hair loss and the technique used." },
    { question: "Is hair transplantation painful?", answer: "The procedure is performed under local anesthesia, ensuring minimal discomfort. Most patients report little to no pain during and after the treatment." },
    { question: "How soon will I see results after a hair transplant?", answer: "Initial growth usually starts 3-4 months after the procedure, with significant results visible around 6-9 months. Full results are typically seen after 12-18 months." },
    { question: "What hair loss treatments do you offer besides transplantation?", answer: "We offer a range of hair loss treatments including PRP therapy, mesotherapy, and medical treatments tailored to your specific needs." },
    { question: "How much does a hair transplant in Turkey cost?", answer: "Costs vary depending on the packages you choose. However, our treatments are typically 50-70% less expensive than in Western countries, without compromising on quality." },
    { question: "Are your hair transplant results natural-looking?", answer: "Yes, our expert surgeons use advanced techniques to ensure natural-looking results. We carefully plan each procedure to match your existing hair pattern and facial features." },
    { question: "How long do I need to stay in Turkey for a hair transplant?", answer: "Most patients stay for 2-3 days. This allows time for the initial consultation, the procedure, and a follow-up check before returning home." },
    { question: "What's included in your hair transplant packages?", answer: "Our packages typically include the procedure, hotel accommodation, airport transfers, and post-operative care products. We ensure a comfortable and stress-free experience." },
    { question: "How do I book a free consultation for hair restoration in Turkey?", answer: "Simply click the 'Book Your Free Consultation' button on this page, or call our clinic with WhatsApp. We’ll schedule a virtual consultation to discuss your needs and options." },
    { question: "Do I need a visa to visit Turkey for my hair transplant?", answer: "Visa requirements vary depending on your country of origin. Many countries have e-visa options or visa-free travel to Turkey. We can provide guidance on visa processes during your consultation." },
    { question: "Will language be a barrier during my treatment in Turkey?", answer: "Not at all. Our clinic staff and surgeons are fluent in English, and we offer translation services for many other languages. We ensure clear communication throughout your treatment journey." },
    { question: "How safe is the medical care in Turkey for hair transplants?", answer: "Turkey’s top hair clinics, including ours, adhere to strict international medical standards. Our facilities are state-of-the-art, and our surgeons are highly qualified with extensive experience in hair restoration." },
    { question: "Can I combine my hair transplant trip with some sightseeing in Turkey?", answer: "Absolutely! Many of our international patients enjoy exploring Istanbul or other parts of Turkey before or after their treatment. We can recommend tourist activities that won’t interfere with your recovery." },
    { question: "What kind of follow-up care do you provide for international patients?", answer: "We offer comprehensive post-operative care instructions and are available for online consultations after you return home. We also provide guidance on finding local professionals for any necessary in-person follow-ups." },
    { question: "How do I manage the post-operative care while traveling back to my country?", answer: "We provide detailed instructions and a post-operative care kit. Most patients can comfortably travel back 3-4 days after the procedure. We’ll advise you on all necessary precautions for your journey home." },
    { question: "How do currency exchange rates affect the cost of my treatment?", answer: "We offer transparent pricing in major currencies like USD and EUR to avoid confusion. Once you book your treatment, we can lock in the price to protect against currency fluctuations." },
    { question: "Do you offer package deals for groups or couples traveling together for hair transplants?", answer: "We do offer special rates for groups or couples traveling together for treatments. This can include discounts on procedures and shared accommodation options. Contact us for more details on our group packages." }
  ];
  

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="faq-wrap">
        {questions.map((item, index) => (
            <div className="faq" key={index}>
            <div
             className={`question ${activeIndex === index ? 'active' : ''}`}
             onClick={() => toggleQuestion(index)}
            >
              <p>{item.question}</p>
              <div className={`ico ${activeIndex === index ? 'open' : ''}`}>
                <span /> <span />
              </div>
            </div>
            <div className={`ans ${activeIndex === index ? 'show' : ''}`}>
              <p>
              {item.answer}
              </p>
            </div>
          </div>
        
      ))}
    </div>
  );
}

export default Faq;
