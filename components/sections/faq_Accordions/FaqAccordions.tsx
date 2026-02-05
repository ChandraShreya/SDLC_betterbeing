import React from 'react'
// import Style from './Faq.module.css'
import Style from "../faq_Accordions/Faq.module.css"

const FaqAccordions = () => {
  return (
    <section className={`${Style.accordionSec} cmn-gap `}>
            <div className="container">
                <div className='sec-child'>
                    <div className={Style.headingText}>
                        <span className="primary-color-text">Frequently asked question</span>
                        <h2>your questions and answered</h2>
                        <p>Find quick answers to the most common questions about your health, nutrition, and wellness
                            journey</p>
                    </div>
                   
                    <div className={Style.accordionPart}>
                        {/* <!-- left-sec --> */}
                        <div className={Style.leftSec}>
                            <h3 className={Style.faqTitle}>Nutrition & Wellness – FAQs</h3>

                            <div className={Style.faqList}>
                                <div className={Style.faqItem}>
                                    <div className={Style.faqLeft}>
                                        <i className="fa-regular fa-comment-dots faq-icon"></i>
                                        <p>How often should I exercise in a week?</p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down faq-arrow"></i>
                                </div>

                                <div className={Style.faqItem}>
                                    <div className={Style.faqLeft}>
                                        <i className="fa-regular fa-comment-dots faq-icon"></i>
                                        <p>Is yoga enough as a full workout?</p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down faq-arrow"></i>
                                </div>

                                <div className={Style.faqItem}>
                                    <div className={Style.faqLeft}>
                                        <i className="fa-regular fa-comment-dots faq-icon"></i>
                                        <p>How can I reduce daily stress naturally?</p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down faq-arrow"></i>
                                </div>

                                <div className={Style.faqItem}>
                                    <div className={Style.faqLeft}>
                                        <i className="fa-regular fa-comment-dots faq-icon"></i>
                                        <p>How many meals should I eat per day?</p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down faq-arrow"></i>
                                </div>

                                <div className={Style.faqItem}>
                                    <div className={Style.faqLeft}>
                                        <i className="fa-regular fa-comment-dots faq-icon"></i>
                                        <p>How do I know if I’m getting enough protein?</p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down faq-arrow"></i>
                                </div>

                                <div className={Style.faqItem}>
                                    <div className={Style.faqLeft}>
                                        <i className="fa-regular fa-comment-dots faq-icon"></i>
                                        <p>difference between good fats and bad fats?</p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down faq-arrow"></i>
                                </div>

                            </div>

                        </div>
                        {/* <!-- right-sec --> */}
                        <div className={Style.rightSec}>
                            <h3 className={Style.faqTitle}>Fitness & Mind-Body Wellness – FAQs</h3>

                            <div className={Style.faqList}>
                                <div className={Style.faqItem}>
                                    <div className={Style.faqLeft}>
                                        <i className="fa-regular fa-comment-dots faq-icon"></i>
                                        <p>How much water should I drink daily?</p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down faq-arrow"></i>
                                </div>

                                <div className={Style.faqItem}>
                                    <div className={Style.faqLeft}>
                                        <i className="fa-regular fa-comment-dots faq-icon"></i>
                                        <p>What is the best way to start eating healthy?</p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down faq-arrow"></i>
                                </div>

                                <div className={Style.faqItem}>
                                    <div className={Style.faqLeft}>
                                        <i className="fa-regular fa-comment-dots faq-icon"></i>
                                        <p>Are supplements necessary for good health?</p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down faq-arrow"></i>
                                </div>

                                <div className={Style.faqItem}>
                                    <div className={Style.faqLeft}>
                                        <i className="fa-regular fa-comment-dots faq-icon"></i>
                                        <p>How many meals should I eat per day?</p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down faq-arrow"></i>
                                </div>

                                <div className={Style.faqItem}>
                                    <div className={Style.faqLeft}>
                                        <i className="fa-regular fa-comment-dots faq-icon"></i>
                                        <p>How do I know if I’m getting enough protein?</p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down faq-arrow"></i>
                                </div>

                                <div className={Style.faqItem}>
                                    <div className={Style.faqLeft}>
                                        <i className="fa-regular fa-comment-dots faq-icon"></i>
                                        <p>difference between good fats and bad fats?</p>
                                    </div>
                                    <i className="fa-solid fa-chevron-down faq-arrow"></i>
                                </div>

                            </div>

                            <div className={Style.showAllBtn}>
                                <a href="#" className={Style.faqShowAll}>Show all →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default FaqAccordions