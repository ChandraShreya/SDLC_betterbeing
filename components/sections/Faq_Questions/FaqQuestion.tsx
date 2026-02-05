import React from 'react'
// import Style from './FaqQuestions.module.css'
import Style from "../Faq_Questions/FaqQuestions.module.css"
import Image from 'next/image'

const FaqQuestion = () => {
  return (
    <section className={Style.questionSection}>
            <div className="container">
                <div className={Style.questionWrapper}>

                    {/* <!-- Left Image --> */}
                    <div className={Style.questionImage}>
                        <Image src="/images/faq-banner-img/Frame 21.png" alt="Ask Question" width={500} height={500}/>
                    </div>

                    {/* <!-- Right Content --> */}
                    <div className={Style.questionContent}>
                        <h2>Still Curious? Submit Your Question Here</h2>
                        <p>
                            Sometimes, the most important questions are the ones that haven't been asked yet
                        </p>

                        <div className={Style.questionInput}>
                            <i className="fa-regular fa-message"></i>
                            <input type="text" placeholder="Ask Any"/>
                            <button>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
  )
}

export default FaqQuestion