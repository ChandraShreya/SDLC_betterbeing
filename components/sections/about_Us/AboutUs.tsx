"use client";
import Image from 'next/image'
import styles from "../about_Us/aboutUs.module.css"

const AboutUs = () => {
  return (
    <section className={`${styles.aboutSec} cmn-gap `}>
            <div className="container">
                <div className={styles.aboutChild}>
                    <div className={styles.aboutLeft}>
                        <div className={styles.aboutImg}>
                            <Image src="/images/about-us-page-images/about-img.png" alt="about-img" width={500} height={500}/>
                        </div>
                        <div className={`${styles.circle} ${styles.green}`}></div>
                        <div className={`${styles.circle} ${styles.yellow}`}></div>
                        <div className={`${styles.circle} ${styles.blue}`}></div>
                    </div>
                    <div className={styles.aboutRight}>
                        <div className={styles.aboutInnerText}>
                            <span className='primary-color-text'>about us</span>
                            <h2>who we are!</h2>
                            <p className={styles.aboutText1}>Better Being is your definitive guide to a vibrant, healthier life,
                                dedicated to cutting
                                through the noise of conflicting health advice. We are a trusted collective of wellness
                                professionals committed to providing clear, evidence-based, and actionable strategies
                                across the seven essential pillars of well-being: Nutrition and Diet, Fitness, Mental
                                Health, Preventive Care, and more. </p>
                            <p>Our core mission is to empower you with knowledge. You can easily read and explore our
                                extensive library of expert blogs, and use our handy bookmarking feature to save and
                                revisit the tips, recipes, and guides that matter most to your personal journey,
                                ensuring your path to sustainable health is organized, simple, and inspiring.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default AboutUs