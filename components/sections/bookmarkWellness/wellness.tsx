"use client";

import Image from "next/image";
// import styles from "./wellnessSection.module.css";
import styles from "../bookmarkWellness/wellness.module.css"

export default function WellnessSection() {
  return (
    <section className={`${styles.wellnessSection} cmn-gap`}>
      <div className="container">
        {/* TOP BAR */}
        <div className={styles.wellnessSectionUpper}>
          <button className={styles.filterToggle}>
            <i className="fa-solid fa-sliders"></i> Choose Category
          </button>
          <h2 className={styles.wellnessTitle}>Wellness Picks</h2>
        </div>

        <div className={styles.mainWellness}>
          {/* LEFT FILTER */}
          <div className={styles.wellnessLeftPart}>
            <span className={styles.filterClose}>&times;</span>
            <h4>Choose Category</h4>

            <label><input type="checkbox" defaultChecked /> All</label>
            <label><input type="checkbox" /> Nutrition</label>
            <label><input type="checkbox" /> Fitness</label>
            <label><input type="checkbox" /> Mental Wellness</label>
            <label><input type="checkbox" /> Preventive Care</label>
            <label><input type="checkbox" /> Alternative Therapy</label>
            <label><input type="checkbox" /> Sleep Health</label>
            <label><input type="checkbox" /> Personal Wellness</label>
            <label><input type="checkbox" /> Extended Care</label>

            <button className={`cmnBtn ${styles.btnApply}`}>
              apply now
            </button>
          </div>

          {/* RIGHT CARDS */}
          <div className={styles.wellnessRightPart}>

            {/* CARD */}
            {[
              "wellness-card-1.jpg",
              "wellness-card-2.jpg",
              "wellness-card-3.jpg",
              "wellness-card-4.png",
              "wellness-card-5.png",
            ].map((img, i) => (
              <div key={i} className={`${styles.wellnessCards} cmn-card`}>
                <div className={styles.cardImage}>
                  <div className={styles.cardImgDiv}>
                    <Image
                      src={`/images/bookmark-page-image/${img}`}
                      alt="wellness card"
                      width={400}
                      height={250}
                    />
                  </div>

                  <span className={styles.tag}>Nutrition</span>
                  <span className={styles.bookmark}>
                    <i className="fa-regular fa-bookmark"></i>
                  </span>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.content}>
                    <span>
                      <Image
                        src="/images/bookmark-page-image/calendar.png"
                        alt="calendar"
                        width={18}
                        height={18}
                      />
                      Dec 12, 2025
                    </span>
                    <span>
                      <Image
                        src="/images/bookmark-page-image/chat.png"
                        alt="chat"
                        width={18}
                        height={18}
                      />
                      0
                    </span>
                  </div>

                  <h3>
                    Acupuncture: Benefits, What to Expect & How It Works
                  </h3>

                  <p>
                    Acupuncture relieves pain, reduces stress, balances energy,
                    and promotes natural healing effectively.
                  </p>

                  <a href="#" className={styles.learnMore}>
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
