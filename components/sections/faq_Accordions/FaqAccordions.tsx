// import React from 'react'
// // import Style from './Faq.module.css'
// import Style from "../faq_Accordions/Faq.module.css"

// const FaqAccordions = () => {
//   return (
//     <section className={`${Style.accordionSec} cmn-gap `}>
//             <div className="container">
//                 <div className='sec-child'>
//                     <div className={Style.headingText}>
//                         <span className="primary-color-text">Frequently asked question</span>
//                         <h2>your questions and answered</h2>
//                         <p>Find quick answers to the most common questions about your health, nutrition, and wellness
//                             journey</p>
//                     </div>
                   
//                     <div className={Style.accordionPart}>
//                         {/* <!-- left-sec --> */}
//                         <div className={Style.leftSec}>
//                             <h3 className={Style.faqTitle}>Nutrition & Wellness – FAQs</h3>

//                             <div className={Style.faqList}>
//                                 <div className={Style.faqItem}>
//                                     <div className={Style.faqLeft}>
//                                         <i className="fa-regular fa-comment-dots faq-icon"></i>
//                                         <p>How often should I exercise in a week?</p>
//                                     </div>
//                                     <i className="fa-solid fa-chevron-down faq-arrow"></i>
//                                 </div>

//                                 <div className={Style.faqItem}>
//                                     <div className={Style.faqLeft}>
//                                         <i className="fa-regular fa-comment-dots faq-icon"></i>
//                                         <p>Is yoga enough as a full workout?</p>
//                                     </div>
//                                     <i className="fa-solid fa-chevron-down faq-arrow"></i>
//                                 </div>

//                                 <div className={Style.faqItem}>
//                                     <div className={Style.faqLeft}>
//                                         <i className="fa-regular fa-comment-dots faq-icon"></i>
//                                         <p>How can I reduce daily stress naturally?</p>
//                                     </div>
//                                     <i className="fa-solid fa-chevron-down faq-arrow"></i>
//                                 </div>

//                                 <div className={Style.faqItem}>
//                                     <div className={Style.faqLeft}>
//                                         <i className="fa-regular fa-comment-dots faq-icon"></i>
//                                         <p>How many meals should I eat per day?</p>
//                                     </div>
//                                     <i className="fa-solid fa-chevron-down faq-arrow"></i>
//                                 </div>

//                                 <div className={Style.faqItem}>
//                                     <div className={Style.faqLeft}>
//                                         <i className="fa-regular fa-comment-dots faq-icon"></i>
//                                         <p>How do I know if I’m getting enough protein?</p>
//                                     </div>
//                                     <i className="fa-solid fa-chevron-down faq-arrow"></i>
//                                 </div>

//                                 <div className={Style.faqItem}>
//                                     <div className={Style.faqLeft}>
//                                         <i className="fa-regular fa-comment-dots faq-icon"></i>
//                                         <p>difference between good fats and bad fats?</p>
//                                     </div>
//                                     <i className="fa-solid fa-chevron-down faq-arrow"></i>
//                                 </div>

//                             </div>

//                         </div>
//                         {/* <!-- right-sec --> */}
//                         <div className={Style.rightSec}>
//                             <h3 className={Style.faqTitle}>Fitness & Mind-Body Wellness – FAQs</h3>

//                             <div className={Style.faqList}>
//                                 <div className={Style.faqItem}>
//                                     <div className={Style.faqLeft}>
//                                         <i className="fa-regular fa-comment-dots faq-icon"></i>
//                                         <p>How much water should I drink daily?</p>
//                                     </div>
//                                     <i className="fa-solid fa-chevron-down faq-arrow"></i>
//                                 </div>

//                                 <div className={Style.faqItem}>
//                                     <div className={Style.faqLeft}>
//                                         <i className="fa-regular fa-comment-dots faq-icon"></i>
//                                         <p>What is the best way to start eating healthy?</p>
//                                     </div>
//                                     <i className="fa-solid fa-chevron-down faq-arrow"></i>
//                                 </div>

//                                 <div className={Style.faqItem}>
//                                     <div className={Style.faqLeft}>
//                                         <i className="fa-regular fa-comment-dots faq-icon"></i>
//                                         <p>Are supplements necessary for good health?</p>
//                                     </div>
//                                     <i className="fa-solid fa-chevron-down faq-arrow"></i>
//                                 </div>

//                                 <div className={Style.faqItem}>
//                                     <div className={Style.faqLeft}>
//                                         <i className="fa-regular fa-comment-dots faq-icon"></i>
//                                         <p>How many meals should I eat per day?</p>
//                                     </div>
//                                     <i className="fa-solid fa-chevron-down faq-arrow"></i>
//                                 </div>

//                                 <div className={Style.faqItem}>
//                                     <div className={Style.faqLeft}>
//                                         <i className="fa-regular fa-comment-dots faq-icon"></i>
//                                         <p>How do I know if I’m getting enough protein?</p>
//                                     </div>
//                                     <i className="fa-solid fa-chevron-down faq-arrow"></i>
//                                 </div>

//                                 <div className={Style.faqItem}>
//                                     <div className={Style.faqLeft}>
//                                         <i className="fa-regular fa-comment-dots faq-icon"></i>
//                                         <p>difference between good fats and bad fats?</p>
//                                     </div>
//                                     <i className="fa-solid fa-chevron-down faq-arrow"></i>
//                                 </div>

//                             </div>

//                             <div className={Style.showAllBtn}>
//                                 <a href="#" className={Style.faqShowAll}>Show all →</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//   )
// }

// export default FaqAccordions

"use client";

import React, { useState } from "react";
import Style from "../faq_Accordions/Faq.module.css";

const FaqAccordions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftFaqs = [
    {
      question: "How often should I exercise in a week?",
      answer:
        "For most adults, exercising at least 3–5 times per week is recommended. A mix of strength training, cardio, and flexibility exercises ensures balanced fitness and overall health improvement.",
    },
    {
      question: "Is yoga enough as a full workout?",
      answer:
        "Yoga can be a complete workout depending on the style. Power yoga builds strength and endurance, while restorative yoga focuses more on flexibility and relaxation.",
    },
    {
      question: "How can I reduce daily stress naturally?",
      answer:
        "Practices such as deep breathing, meditation, regular exercise, and adequate sleep can significantly reduce daily stress levels naturally.",
    },
    {
      question: "How many meals should I eat per day?",
      answer:
        "There is no universal rule, but 3 balanced meals with 1–2 healthy snacks works well for most people.",
    },
    {
      question: "How do I know if I’m getting enough protein?",
      answer:
        "Most adults require around 0.8–1 gram of protein per kilogram of body weight daily depending on activity levels.",
    },
    {
      question: "difference between good fats and bad fats?",
      answer:
        "Unsaturated fats support heart health, while trans fats and excessive saturated fats may increase health risks.",
    },
  ];

  const rightFaqs = [
    {
      question: "How much water should I drink daily?",
      answer:
        "Most adults should aim for about 2–3 liters of water per day depending on activity level and climate.",
    },
    {
      question: "What is the best way to start eating healthy?",
      answer:
        "Start by adding more whole foods like fruits and vegetables while reducing processed foods gradually.",
    },
    {
      question: "Are supplements necessary for good health?",
      answer:
        "Supplements may help if you have deficiencies, but they should not replace a balanced diet.",
    },
    {
      question: "How many meals should I eat per day?",
      answer:
        "Meal frequency depends on your metabolism and lifestyle. Choose a pattern that keeps energy stable.",
    },
    {
      question: "How do I know if I’m getting enough protein?",
      answer:
        "Stable energy, muscle recovery, and healthy hair and nails are signs of adequate protein intake.",
    },
    {
      question: "difference between good fats and bad fats?",
      answer:
        "Healthy fats improve cholesterol balance, while unhealthy fats can increase cardiovascular risk.",
    },
  ];

  return (
    <section className={`${Style.accordionSec} cmn-gap`}>
      <div className="container">
        <div className="sec-child">
          <div className={Style.headingText}>
            <span className="primary-color-text">
              Frequently asked question
            </span>
            <h2>your questions and answered</h2>
            <p>
              Find quick answers to the most common questions about your health,
              nutrition, and wellness journey
            </p>
          </div>

          <div className={Style.accordionPart}>
            
            {/* LEFT SECTION */}
            <div className={Style.leftSec}>
              <h3 className={Style.faqTitle}>
                Nutrition & Wellness – FAQs
              </h3>

              <div className={Style.faqList}>
                {leftFaqs.map((faq, index) => (
                  <div key={index}>
                    <div
                      className={`${Style.faqItem} ${
                        openIndex === index ? Style.activeFaq : ""
                      }`}
                      onClick={() => toggleFaq(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className={Style.faqLeft}>
                        <i className="fa-regular fa-comment-dots faq-icon"></i>
                        <p>{faq.question}</p>
                      </div>
                      <i
                        className={`fa-solid fa-chevron-down faq-arrow ${
                          openIndex === index ? Style.rotateArrow : ""
                        }`}
                      ></i>
                    </div>

                    <div
                      className={`${Style.answerWrapper} ${
                        openIndex === index ? Style.open : ""
                      }`}
                    >
                      <div className={Style.answerInner}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className={Style.rightSec}>
              <h3 className={Style.faqTitle}>
                Fitness & Mind-Body Wellness – FAQs
              </h3>

              <div className={Style.faqList}>
                {rightFaqs.map((faq, index) => {
                  const globalIndex = index + 100;
                  return (
                    <div key={globalIndex}>
                      <div
                        className={`${Style.faqItem} ${
                          openIndex === globalIndex
                            ? Style.activeFaq
                            : ""
                        }`}
                        onClick={() => toggleFaq(globalIndex)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className={Style.faqLeft}>
                          <i className="fa-regular fa-comment-dots faq-icon"></i>
                          <p>{faq.question}</p>
                        </div>
                        <i
                          className={`fa-solid fa-chevron-down faq-arrow ${
                            openIndex === globalIndex
                              ? Style.rotateArrow
                              : ""
                          }`}
                        ></i>
                      </div>

                      <div
                        className={`${Style.answerWrapper} ${
                          openIndex === globalIndex ? Style.open : ""
                        }`}
                      >
                        <div className={Style.answerInner}>
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={Style.showAllBtn}>
                <a href="#" className={Style.faqShowAll}>
                  Show all →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordions;
