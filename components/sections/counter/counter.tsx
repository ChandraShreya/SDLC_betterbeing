"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
// import styles from "./community.module.css";
import styles from "../counter/counter.module.css"

type Counter = {
  target: number;
  value: string | number;
};

export default function CommunitySection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const startedRef = useRef(false);

  const [counters, setCounters] = useState<Counter[]>([
    { target: 30, value: 0 },
    { target: 25, value: 0 },
    { target: 2000, value: 0 },
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          setTimeout(startCounters, 800);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  /* ---------- START COUNTERS ---------- */
  const startCounters = () => {
    counters.forEach((counter, index) => {
      if (counter.target === 2000) {
        animate2000(index);
      } else {
        animateSmall(index, counter.target);
      }
    });
  };

  /* ---------- 30 / 25 ---------- */
  const animateSmall = (index: number, target: number) => {
    let value = 0;

    const step = () => {
      setCounters((prev) =>
        prev.map((c, i) =>
          i === index ? { ...c, value } : c
        )
      );

      if (value === target) return;

      value++;
      setTimeout(step, 130);
    };

    step();
  };

  /* ---------- 2000 ---------- */
  const animate2000 = (index: number) => {
    let value = 0;

    const step = () => {
      if (value < 1000) {
        value += 20;
        update(index, value);
      } else if (value < 2000) {
        value += 100;
        update(index, (value / 1000).toFixed(1) + "k");
      } else {
        update(index, "2k");
        return;
      }

      setTimeout(step, 70);
    };

    step();
  };

  const update = (index: number, value: string | number) => {
    setCounters((prev) =>
      prev.map((c, i) =>
        i === index ? { ...c, value } : c
      )
    );
  };

  return (
    <section className={`cmn-gap ${styles.communitySec}`}ref={sectionRef}>
      <div className="container">
        <div className={styles.communityChild}>
          {/* LEFT */}
          <div className={styles.communityLeft}>
            <div className={styles.communityImg}>
              <Image
                src="/images/about-us-page-images/community-img.png"
                alt="community"
                width={498}
                height={487}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.communityRight}>
            <div className={styles.communityInnerText}>
              <h2>a growing community focused on your health</h2>
              <p>
                We provide clear, actionable wellness strategies across seven
                core pillars to positively impact your daily life and long-term
                health.
              </p>

              <div className={styles.communityLowerSec}>
                {/* BLOGS */}
                <Stat
                  icon="/images/about-us-page-images/blog-icon.svg"
                  value={counters[0].value}
                  label="blogs"
                />

                {/* AUTHORS */}
                <Stat
                  icon="/images/about-us-page-images/author-icon.svg"
                  value={counters[1].value}
                  label="author"
                />

                {/* READERS */}
                <Stat
                  icon="/images/about-us-page-images/reader-icon.svg"
                  value={counters[2].value}
                  label="readers"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SMALL COMPONENT ---------- */
function Stat({
  icon,
  value,
  label,
}: {
  icon: string;
  value: string | number;
  label: string;
}) {
  return (
    <div className={styles.communityBlogsText}>
      <div className={styles.communityIcon}>
        <Image src={icon} alt={label} width={35} height={35} />
        <span className={styles.count}>{value}</span>
        <span className={styles.plus}>+</span>
      </div>
      <div className={styles.communityText}>{label}</div>
    </div>
  );
}
