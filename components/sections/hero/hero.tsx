



// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import gsap from "gsap";
// import styles from "../hero/hero.module.css";

// /* ---------- QUOTES ---------- */
// const quotes = [
//   { text: "Meditation is the delicate art of doing nothing.", author: "— Sri Sri Ravi Shankar" },
//   { text: "Happiness is the highest form of health", author: "— Dalai Lama" },
//   { text: "Health comes from within", author: "— Sadhguru" },
//   { text: "It is Health that is real Wealth and not pieces of gold", author: "— Mahatma Gandhi" },
//   { text: "The body is your temple. Keep it pure and clean", author: "— B.K.S. Iyengar" },
//   { text: "Strength is life, weakness is death", author: "— Swami Vivekananda" },
//   { text: "Health is a state of complete harmony of the body", author: "— B.K.S. Iyengar" },
//   { text: "Our bodies are our gardens, our wills are our gardeners", author: "— William Shakespeare" },
//   { text: "Mind is the master of the senses", author: "— B.K.S. Iyengar" },
//   { text: "You are what you eat", author: "— From Gita" },
// ];

// export default function Banner() {
//   const titleRef = useRef<HTMLHeadingElement | null>(null);
//   const quoteIndex = useRef(0);

//   const [quote, setQuote] = useState(quotes[0]);

//   /* ---------- TITLE GSAP ANIMATION ---------- */
//   useEffect(() => {
//     if (!titleRef.current) return;

//     const text = titleRef.current.innerText;

//     titleRef.current.innerHTML = text
//       .split("")
//       .map(
//         (char) =>
//           `<span class="${styles.char}">${char === " " ? "&nbsp;" : char}</span>`
//       )
//       .join("");

//     gsap.fromTo(
//       `.${styles.char}`,
//       { x: 150, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 0.7,
//         ease: "power4.out",
//         stagger: 0.04,
//       }
//     );
//   }, []);

//   /* ---------- QUOTE ROTATION ---------- */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       quoteIndex.current = (quoteIndex.current + 1) % quotes.length;
//       setQuote(quotes[quoteIndex.current]);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className={styles.bannerSection}>
//       <div className="container">
//         <div className={styles.bannerContent}>
//           {/* TITLE */}
//           <h1
//             ref={titleRef}
//             className={styles.titleAnimate}
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             Held By Nature, Guided By Calm
//           </h1>


//           {/* SUB TITLE */}
//           <p
//             className={`heading-3 ${styles.subTitle}`}
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             A Gentle Space To Heal And Grow
//           </p>


//           {/* BUTTON */}
//           <Link href="#" className="cmnBtn bannerBtn">
//             Explore Now
//           </Link>

//           {/* QUOTES */}
//           <div className={`${styles.quoteWrapper} ${styles.show}`}>
//             <p className={styles.quoteText}>"{quote.text}"</p>
//             <span className={styles.quoteAuthor}>{quote.author}</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// import styles from "./HeroBanner.module.css";
import styles from "../hero/hero.module.css"

export default function HeroBanner() {
  return (
    <section className={styles.bannerSection}>
      <Swiper
        className={styles.bannerSwiper}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        loop
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide
          className={styles.bannerSlide}
          style={{
            backgroundImage:
              "url('/images/home-page-images/Hero.png')",
          }}
        >
          <div className="container">
            <div className={styles.bannerContent}>
              <h1 className={styles.titleAnimate}>
                Health & Wellness Tips for a Balanced and Healthy Life
              </h1>

              <p className={`${styles.subTitle} heading-3`}>
                A Gentle Space to Heal and Grow
              </p>

              <a href="#" className={`${styles.bannerBtn} cmnBtn`}>
                Explore Now
              </a>

              <div className={styles.quoteWrapper}>
                <p>"Meditation is the delicate art of doing nothing."</p>
                <span>— Sri Sri Ravi Shankar</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide
          className={styles.bannerSlide}
          style={{
            backgroundImage:
              "url('/images/home-page-images/Home Hero Banner Animation 2.png')",
          }}
        >
          <div className="container">
            <div className={styles.bannerContent}>
              <h1 className={styles.titleAnimate}>
                Mindfulness for Inner Peace
              </h1>

              <p className={`${styles.subTitle} heading-3`}>
                Slow Down, Breathe & Reconnect
              </p>

              <a href="#" className={`${styles.bannerBtn} cmnBtn`}>
                Start Journey
              </a>

              <div className={styles.quoteWrapper}>
                <p>"Peace comes from within. Do not seek it without."</p>
                <span>— Buddha</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide
          className={styles.bannerSlide}
          style={{
            backgroundImage:
              "url('/images/home-page-images/Home Hero Banner Animation 3.png')",
          }}
        >
          <div className="container">
            <div className={styles.bannerContent}>
              <h1 className={styles.titleAnimate}>
                Healthy Body, Calm Mind
              </h1>

              <p className={`${styles.subTitle} heading-3`}>
                Balance Your Life Naturally
              </p>

              <a href="#" className={`${styles.bannerBtn} cmnBtn`}>
                Learn More
              </a>

              <div className={styles.quoteWrapper}>
                <p>"Health is a state of body. Wellness is a state of being."</p>
                <span>— J. Stanford</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}



