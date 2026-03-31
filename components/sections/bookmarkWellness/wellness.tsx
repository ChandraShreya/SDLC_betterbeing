"use client";

import Image from "next/image";
import styles from "../bookmarkWellness/wellness.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarks } from "@/redux/slice/bookmarkSlice";

export default function WellnessSection() {
  const dispatch = useDispatch();

  const { bookmarks, loading } = useSelector(
    (state: any) => state.bookmark
  );

  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredBookmarks, setFilteredBookmarks] = useState<any[]>([]);

  // Fetch bookmarks
  useEffect(() => {
    dispatch(getBookmarks());
  }, [dispatch]);

  // Generate categories dynamically
  const categories = [
    "All",
    ...new Set(bookmarks?.map((b: any) => b.category_name)),
  ];

  // Filter logic
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredBookmarks(bookmarks);
    } else {
      setFilteredBookmarks(
        bookmarks.filter(
          (blog: any) => blog.category_name === activeCategory
        )
      );
    }
  }, [bookmarks, activeCategory]);

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

            {categories.map((cat) => (
              <label key={cat}>
                <input
                  type="radio"
                  checked={activeCategory === cat}
                  onChange={() => setActiveCategory(cat)}
                />
                {cat}
              </label>
            ))}

            <button className={`cmnBtn ${styles.btnApply}`}>
              apply now
            </button>
          </div>

          {/* RIGHT CARDS */}
          <div className={styles.wellnessRightPart}>

            {loading && <p>Loading...</p>}

            {!loading && filteredBookmarks.length === 0 && (
              <p>No bookmarks found</p>
            )}

            {!loading &&
              filteredBookmarks.map((blog: any) => (
                <div
                  key={blog.id}
                  className={`${styles.wellnessCards} cmn-card`}
                >
                  <div className={styles.cardImage}>
                    <div className={styles.cardImgDiv}>
                      <img
                        src={`http://127.0.0.1:8000${blog.cover_image}`}
                        alt={blog.title}
                        width={400}
                        height={250}
                      />
                    </div>

                    <span className={styles.tag}>
                      {blog.category_name}
                    </span>

                    <span className={styles.bookmark}>
                      <i className="fa-solid fa-bookmark"></i>
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
                        {blog.created_at?.split("T")[0]}
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

                    <h3>{blog.title}</h3>

                    <p>{blog.description}</p>

                    <Link
                      href={`/blog/${blog.id}`}
                      className={styles.readMore}
                    >
                      Learn More
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}

          </div>
        </div>
      </div>
    </section>
  );
}