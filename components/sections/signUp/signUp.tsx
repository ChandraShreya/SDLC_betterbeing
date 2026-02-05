"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../signUp/signUp.module.css"
import { signIn } from "next-auth/react";


export default function SignupSection() {
    const handleGoogleSignup = () => {
    signIn("google", {
      callbackUrl: "/", // redirect after login
    });
  };
  return (
    <section className={styles.authSection}>
      <div className="container">
        <div className={styles.signupChild}>
          {/* LEFT */}
          <div className={styles.authLeft}>
            <div className={styles.brand}>
              <Image
                src="/images/signup-page-imgaes/image.png"
                alt="Better Being"
                width={200}
                height={200}
              />
              <p>A Holistic World of Health & Well-Being</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.authRight}>
            <div className={styles.authBox}>
              <h2>Create an account</h2>

              <p className={styles.subtitle}>
                Explore simple, practical insights and mindful habits that help
                you build emotional balance, resilience, and long-term mental
                clarity in everyday life.
              </p>

              <form>
                {/* EMAIL */}
                <div className={styles.inputBoxSignup}>
                  <input type="email" required placeholder=" " />
                  <label>Email Address</label>
                </div>

                {/* PASSWORD */}
                <div className={styles.inputBoxSignup}>
                  <input type="password" required placeholder=" " />
                  <label>Password</label>
                </div>

                {/* CONFIRM PASSWORD */}
                <div className={styles.inputBoxSignup}>
                  <input type="password" required placeholder=" " />
                  <label>Confirm password</label>
                </div>

                {/* CHECKBOX */}
                <div className={styles.checkGroupSignup}>
                  <label>
                    <input type="checkbox" /> I have read Privacy policy & T&C.
                  </label>
                  <label>
                    <input type="checkbox" /> Allow to customize my experience
                  </label>
                </div>

                <button className={`cmn-btn ${styles.primaryBtn}`}>
                  Get started
                </button>
              </form>

              {/* BOTTOM */}
              <div className={styles.signupBtm}>
                <div className={styles.divider}>Or continue with</div>

                <div className={styles.socialBtns}>
                  <button type="button" className={styles.google}
                  onClick={handleGoogleSignup}
                  >
                    <Image
                      src="/images/signup-page-imgaes/google-icon-logo-svgrepo-com.svg"
                      alt="Google"
                      width={30}
                      height={30}
                    />
                  </button>

                  <button className={styles.facebook}>
                    <Image
                      src="/images/signup-page-imgaes/facebook-2-logo-svgrepo-com.svg"
                      alt="Facebook"
                      width={30}
                      height={30}
                    />
                  </button>
                </div>

                <p className={styles.loginLink}>
                  Already have an account?{" "}
                  <Link href="/login" className={styles.loginText}>
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
