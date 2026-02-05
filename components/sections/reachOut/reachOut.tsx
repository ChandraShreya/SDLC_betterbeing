"use client";

import Image from "next/image";
import styles from "./reachOut.module.css";

export default function ReachOut() {
  return (
    <section className={`${styles.reachOutSec} cmn-gap`}>
      <div className="container">
        <div className={styles.reachOutChild}>
          
          {/* LEFT */}
          <div className={styles.reachOutLeft}>
            <div className={styles.reachOutImg}>
              <figure>
                <Image
                  src="/images/home-page-images/reach-out-img.png"
                  alt="reach out"
                  width={600}
                  height={500}
                />
              </figure>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.reachOutRight}>
            <div className={styles.rightInnerText}>
              <h2>from you to the world</h2>

              <span className="primary-color-text">
                pen your perspective
              </span>

              <p className={styles.textParagraph1}>
                Turn your thoughts into words and let your voice reach beyond the
                screen. This space is for readers who have meaningful ideas,
                experiences, or insights to share. Whether it’s a personal
                reflection, a lesson learned, or a perspective worth exploring,
                your words can inspire and connect with others.
              </p>

              <p className={styles.textParagraph2}>
                Writing is a powerful way to express yourself and contribute to
                conversations that matter. There’s no pressure for perfection—
                only an invitation to be honest and authentic. Every voice adds
                value here. Start writing, share your story, and become part of a
                growing community built on thoughtful expression.
              </p>

              <div className={styles.reachBtn}>
                <a href="#" className="cmnBtn">
                  reach out
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
