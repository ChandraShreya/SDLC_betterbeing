import React from 'react'
import Style from "../faq_Banner/faqBanner.module.css"

const FaqBanner = () => {
  return (
        <section className={Style.bannerSec}>
            <div className="container">
                <div className={Style.bannerChild}>
                    <h1>FAQs</h1>
                    <p>Our FAQs provide science-backed tips on everything from better sleep to balanced eating, helping
                        you make informed decisions about your well-being.</p>
                </div>
            </div>
        </section>
  )
}

export default FaqBanner