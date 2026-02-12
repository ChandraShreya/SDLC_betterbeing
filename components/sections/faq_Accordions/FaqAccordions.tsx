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
    question: "How much sleep do I need for a healthy lifestyle?",
    answer:
      "Most adults need 7–9 hours of sleep each night for proper recovery, hormonal balance, and mental clarity. Poor sleep can affect mood, metabolism, and immune function. To improve sleep quality, maintain a consistent schedule, avoid screens before bed, and create a calm environment. Proper rest boosts physical performance, reduces stress, and supports overall wellness.",
  },
  {
    question: "Does stretching really make a difference?",
    answer:
      "Yes, stretching improves flexibility, posture, circulation, and reduces muscle stiffness. Regular stretching can enhance mobility, prevent injuries, and support muscle recovery. Even 5–10 minutes of daily stretching can significantly improve overall body function and reduce tension.",
  },
  {
    question: "How can I stay consistent with workouts?",
    answer:
      "Staying consistent requires building habits you genuinely enjoy. Start with small, achievable goals like a 10-minute walk or a short home stretch session. Track your progress, schedule workouts like appointments, and mix activities to keep them interesting. Consistency matters more than perfection—just keep moving.",
  },
  {
    question: "Do I need a gym to stay fit, or can I exercise at home?",
    answer:
      "You don’t need a gym to stay fit—home workouts can be just as effective. Bodyweight exercises like squats, push-ups, lunges, and planks build strength without equipment. Yoga, walking, running, or resistance bands also support overall fitness. The key is consistency.",
  },
  {
    question: "Can I improve my posture during daily activities?",
    answer:
      "Improving posture starts with awareness. Keep your shoulders relaxed, your spine neutral, and avoid slouching—especially while using phones or laptops. Strengthening your core and back muscles through yoga and simple exercises like bridges or rows improves alignment. Small habits make a big difference over time.",
  },
  {
    question: "What are the benefits of meditation for daily life?",
    answer:
      "Meditation helps reduce stress, improve focus, and support emotional balance. Regular practice calms the nervous system, lowers anxiety, and enhances mental clarity. Even 5–10 minutes daily can boost mood, improve sleep, and increase self-awareness.",
  },
  {
    question: "How can I reduce daily stress naturally?",
    answer:
      "Stress can be managed through breathing exercises, meditation, yoga, nature walks, journaling, and reducing screen time. Staying active, maintaining social connections, and practicing gratitude also improve mental well-being.",
  },
];


 const rightFaqs = [
  {
    question: "How much water should I drink daily?",
    answer:
      "Most adults should aim for 2–3 liters of water per day, but needs vary based on climate, activity level, and body size. A good rule is to drink enough so your urine stays pale yellow throughout the day.",
  },
  {
    question: "What is the best way to start eating healthy?",
    answer:
      "Healthy eating starts with small, consistent changes. Add more whole foods like fruits, vegetables, lean proteins, whole grains, nuts, and seeds. Reduce sugary drinks and processed foods. Balanced meals with protein, fiber, and healthy fats help maintain steady energy.",
  },
  {
    question: "Are supplements necessary for good health?",
    answer:
      "Supplements can help if you have a specific deficiency like vitamin D, iron, or B12. However, nutrients from whole foods are usually best. Consult a healthcare professional before starting supplements.",
  },
  {
    question: "How many meals should I eat per day?",
    answer:
      "There is no universal rule. Some people prefer three balanced meals, while others eat smaller frequent meals. The key is maintaining steady energy levels and choosing nutrient-rich foods.",
  },
  {
    question: "How do I know if I’m getting enough protein?",
    answer:
      "Most adults need around 0.8–1.6g of protein per kilogram of body weight depending on activity level. Include protein sources like eggs, dairy, legumes, nuts, tofu, chicken, or fish in every meal.",
  },
  {
    question: "What is the difference between good fats and bad fats?",
    answer:
      "Good fats (unsaturated fats) from nuts, seeds, olive oil, avocado, and fatty fish support heart and brain health. Trans fats and excessive saturated fats may increase health risks.",
  },
  {
    question: "Are plant-based diets healthier than regular diets?",
    answer:
      "Plant-based diets can be very healthy because they are rich in fiber and antioxidants. However, they must include enough protein, iron, omega-3s, and B12. Both plant-based and non-plant-based diets can be healthy if balanced.",
  },
  {
    question: "How can I reduce sugar cravings?",
    answer:
      "Sugar cravings often happen when blood sugar drops. Eat balanced meals with protein and fiber, stay hydrated, sleep well, and manage stress. Try fruits, nuts, or dark chocolate instead of processed sweets.",
  },
  {
    question: "What is mindful eating and why is it important?",
    answer:
      "Mindful eating means paying attention to your food and hunger cues. It helps prevent overeating, improves digestion, and builds a healthier relationship with food.",
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
                    className={`${Style.faqItem} ${openIndex === index ? Style.activeFaq : ""
                      }`}
                    onClick={() => toggleFaq(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className={Style.faqLeft}>
                      <i className="fa-regular fa-comment-dots faq-icon"></i>
                      <p>{faq.question}</p>
                    </div>
                    <i
                      className={`fa-solid fa-chevron-down faq-arrow ${openIndex === index ? Style.rotateArrow : ""
                        }`}
                    ></i>
                  </div>

                  <div
                    className={`${Style.answerWrapper} ${openIndex === index ? Style.open : ""
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
                      className={`${Style.faqItem} ${openIndex === globalIndex
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
                        className={`fa-solid fa-chevron-down faq-arrow ${openIndex === globalIndex
                            ? Style.rotateArrow
                            : ""
                          }`}
                      ></i>
                    </div>

                    <div
                      className={`${Style.answerWrapper} ${openIndex === globalIndex ? Style.open : ""
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
