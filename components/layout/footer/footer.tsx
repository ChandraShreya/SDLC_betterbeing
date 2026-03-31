"use client";

import Image from "next/image";
import styles from "../footer/footer.module.css";
import { toast } from "sonner";
import AxiosInstance from "@/api/axios/axios";
import { endpoints } from "@/api/endPoints/endpoints";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      const response = await AxiosInstance.post(
        endpoints.newsLetter.subscribe,
        { email }
      );

      toast.success(
        response?.data?.message || "Subscribed successfully!"
      );

      setEmail("");
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        "Something went wrong";

      toast.error(message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <footer className={styles.footerSec}>
      <div className="container">
        {/* TOP SECTION */}
        <div className={styles.footerTop}>
          <div className={`${styles.footerHeadingTop} heading-3`}>
            Stay Healthy & Informed: Subscribe to Our Newsletter
          </div>

          <p className="heading-6">
            Get the latest insights, recipes, and expert advice delivered straight
            to your inbox every week. We cover everything from mental clarity to
            fitness routines to help you live a balanced, vibrant life.
          </p>

          <form
            className={styles.subscribeForm}
            onSubmit={handleSubscribe}
          >
            <span className={styles.mailIcon}>✉</span>

            <div className={styles.inputBox}>
              <input
                type="email"
                className={styles.subscribeInput}
                placeholder=" "
                value={email || ""}                 // ✅ controlled input
                onChange={(e) => setEmail(e.target.value)}  // ✅ state update
              />
              <label className={styles.floatingLabel}>
                Enter your mail
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`${styles.subscribeBtn} cmnBtn`}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>

        {/* FOOTER COLUMNS */}
        <div className={styles.footerChild}>
          {/* COL 1 */}
          <div className={`${styles.cmnFooter} ${styles.footer1}`}>
            <a href="/" className={styles.footerLogo}>
              <Image
                src="/images/home-page-images/footer-logo.svg"
                alt="footer logo"
                width={160}
                height={60}
              />
            </a>

            <p className={styles.footerText}>
              Welcome to Better Being! Here, you can explore insightful articles
              and blogs covering fitness.
            </p>
          </div>

          {/* COL 2 */}
          <div className={styles.cmnFooter}>
            <div className={styles.footerHeading}>Quick links</div>
            <ul className={styles.footerLinks}>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/blog-list">Blog List</a></li>
              <li><a href="/bookmarks">Bookmarks</a></li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/terms-condition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* COL 3 */}
          <div className={styles.cmnFooter}>
            <div className={styles.footerHeading}>Support</div>
            <ul className={styles.footerLinks}>
              <li>
                <a href="tel:+15550123456">
                  <i className="fa-solid fa-phone"></i> +(555) 012-3456
                </a>
              </li>
              <li>
                <a href="mailto:betterbeing@gmail.com" className={styles.emailField}>
                  <i className="fa-solid fa-envelope"></i> betterbeing@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* COL 4 */}
          <div className={`${styles.cmnFooter} ${styles.newsletter}`}>
            <div className={styles.footerHeading}>social media</div>
            <ul className={styles.socialIcons}>
              <li>
                <a href="https://www.facebook.com/share/1HDWhpN3AB/" target="_blank">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/betterbeing7" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://x.com/BetterBein" target="_blank">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://pin.it/cpMc6sOsB" target="_blank">
                  <i className="fa-brands fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className={styles.footerEnd}>
          <div className={styles.copyRight}>
            copyright
            <i className={`fa-regular fa-copyright ${styles.copyrightIcon}`}></i>
            2025
            <a href="/" className={styles.brandA}> betterbeing</a>
            <span className={styles.reservedText}>
              all rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
