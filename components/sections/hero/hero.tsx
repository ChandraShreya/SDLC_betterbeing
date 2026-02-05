"use client";

import Link from "next/link";
import styles from "../hero/hero.module.css"

export default function Banner() {
  return (
    <section className={styles.bannerSection}>
      <div className="container">
        <div className={styles.bannerContent}>

          <h1 className={styles.titleAnimate}>
            Held By Nature, Guided By Calm
          </h1>

          <p
            className={` heading-3 ${styles.subTitle}`}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            A Gentle Space To Heal And Grow
          </p>

          <Link href="#" className="cmnBtn bannerBtn">
            Explore Now
          </Link>

          {/* <div className={styles.quoteWrapper}>
            <p id="quoteText" className={styles.quoteText}></p>
            <span id={styles.quoteAuthor}></span>
          </div> */}

        </div>
      </div>
    </section>
  );
}




