"use client";

import Image from "next/image";
// import styles from "./contactInfo.module.css";
import styles from "../contact_Info/contactInfo.module.css"

export default function ContactInfo() {
  return (
    <section className={`${styles.contactInfoSec} cmn-gap`}>
      <div className="container">
        <div className={styles.childContact}>
          {/* DECORATIVE IMAGES */}
          <div className={styles.leafImage}>
            <Image
              src="/images/contact-us-images/corner-image-contact.png"
              alt="corner decoration"
              width={300}
              height={300}
            />
          </div>

          <div className={styles.bottomLeafImage}>
            <Image
              src="/images/contact-us-images/bottom-corner-image.png"
              alt="bottom decoration"
              width={300}
              height={300}
            />
          </div>

          {/* HEADER */}
          <div className={styles.contactHead}>
            <div className={styles.contactLogo}>
              <Image
                src="/images/contact-us-images/contact-us-logo-image.svg"
                alt="contact logo"
                width={294}
                height={80}
              />
            </div>

            <h2 className={styles.contactHeading}>We're Here To Listen</h2>

            <p className={styles.headPara}>
              Contact the Better Being team for editorial inquiries,
              partnership opportunities, or personalized support regarding our
              health resources.
            </p>
          </div>

          {/* CONTENT */}
          <div className={styles.contactRow}>
            {/* LEFT COLUMN */}
            <div className={styles.leftColumn}>
              <div className={styles.leftColumnHead}>
                <h3>Contact Information</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <ul className={styles.contactInfo}>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-phone"></i> +(555) 012-3456
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-envelope"></i>{" "}
                      betterbeing@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        src="/images/location.png"
                        alt="location"
                        width={20}
                        height={20}
                      />
                      Street 123 New York, USA
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className={styles.rightColumn}>
              <form>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your full name" />
                </div>

                <div className={styles.formGroup}>
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your Mail" />
                </div>

                <div className={styles.formGroup}>
                  <label>Mobile Number (Optional)</label>
                  <input type="text" placeholder="Enter your Phone Number" />
                </div>

                <div className={styles.formGroup}>
                  <label>Your Message</label>
                  <textarea rows={4} placeholder="Leave a message"></textarea>
                </div>

                <div className={styles.formButtons}>
                  <button type="reset" className={`cmnBtn ${styles.btnClear}`}>
                    clear
                  </button>
                  <button type="submit" className={`cmnBtn ${styles.btnSubmit}`}>
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
