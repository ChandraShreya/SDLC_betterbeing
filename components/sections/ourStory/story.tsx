"use client";

import Image from "next/image";
import styles from "../ourStory/story.module.css";

export default function OurStory() {
  return (
    <section className={`${styles.ourStorySec} cmn-gap`}>
      <div className="container">
        <div className={styles.ourStoryChild}>
          {/* LEFT */}
          <div className={styles.storyLeft}>
            <div className={styles.storyInnerText}>
              <span className="primary-color-text">our story</span>

              <h2>what the professionals say about better being.</h2>

              <p>
                "In a world overwhelmed by conflicting and often misleading health
                information, Better Being stands out as a beacon of clarity. The
                content is rigorously reviewed, highly actionable, and genuinely
                focuses on the holistic wellness journey. Their commitment to
                covering the full spectrum of health—from Diet to Personalized
                Wellness—makes them an essential resource. I confidently recommend
                Better Being to anyone serious about achieving sustainable health
                and clarity."
              </p>

              {/* PROFILE */}
              <div className={styles.profile}>
                <div className={styles.profileImg}>
                  <Image
                    src="/images/about-us-page-images/our-story-profile-img.png"
                    alt="profile"
                    width={100}
                    height={100}
                  />
                </div>

                <div className={styles.profileParent}>
                  <h3 className="heading-4">dr. ananda</h3>
                  <span className="primary-color-text">author</span>
                </div>
              </div>

              <a href="#" className="our-story-btn cmnBtn">
                read more
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.storyRight}>
            <div className={styles.storyImg}>
              <Image
                src="/images/about-us-page-images/our-story-img.png"
                alt="our story"
                width={600}
                height={500}
              />
            </div>

            <div className={styles.overlayImg}>
              <Image
                src="/images/about-us-page-images/our-story-overlay-img.png"
                alt="overlay"
                width={221}
                height={221}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

