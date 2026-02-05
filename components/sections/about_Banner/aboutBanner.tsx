'use client';
import styles from "../about_Banner/about.module.css"

const AboutBanner = () => {
  return (
    <section className={styles.aboutSec}>
            <div className="container">
                <div className={styles.bannerChild}>
                    <h1>about us</h1>
                    <p>Empowering Your Health Journey We are your dedicated source for clear, reliable, and actionable
                        health blogs across the seven pillars of wellness, from Diet to Mindfulness.
                    </p>
                </div>
            </div>
        </section>
  )
}

export default AboutBanner;
