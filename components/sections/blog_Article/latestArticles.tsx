

"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { getAllBlogs } from "@/redux/slice/blogSlice";
import { getCategories } from "@/redux/slice/categorySlice";
import Link from "next/link";
// import styles from "../latestBlogs/latestBlogs.module.css"
import styles from "../blog_Article/latestArticles.module.css"
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

export default function BlogListPage() {
  const dispatch = useDispatch();

  const allBlogs = useSelector((state) => state.blogs.blogs) || [];
  const loading = useSelector((state) => state.blogs.loading);
  const [bookmarked, setBookmarked] = useState<number[]>([]);
  const categories = useSelector(
    (state) => state.category.categories
  ) || [];

  const [active, setActive] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // LOAD DATA
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAllBlogs());
  }, [dispatch]);

  const toggleBookmark = (index: number) => {
    setBookmarked((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  // KEEP FILTERED BLOGS IN SYNC
  useEffect(() => {
    setFilteredBlogs(allBlogs);
  }, [allBlogs]);

  // FILTER HANDLER (FRONTEND ONLY)
  const handleFilter = (categoryName) => {
    setActive(categoryName);

    if (categoryName === "All") {
      setFilteredBlogs(allBlogs);
    } else {
      const filtered = allBlogs.filter(
        (blog) => blog.category_name === categoryName
      );
      setFilteredBlogs(filtered);
    }
  };

  return (
    <section className={styles.blogSec}>
      <div className="container">

        {/* HEADER */}
        <div className={styles.blogHeader}>
          <span className={styles.blogSubtitle}>Latest Articles</span>
          <h2 className={styles.title2}>
            Health And Wellness Articles
          </h2>
        </div>

        {/* CATEGORY FILTER */}
        <div className={styles.blogFilter}>
          <ul>
            <li
              className={`${styles.filterItem} ${active === "All" ? styles.active : ""}`}
              onClick={() => handleFilter("All")}
            >All
            </li>

            {categories.map((cat) => (
              <li
                key={cat.id}
                className={`${styles.filterItem} ${active === cat.name ? "active" : ""
                  }`}
                onClick={() => handleFilter(cat.name)}
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </div>

        {/* BLOG CARDS */}
        <div className="featured-card-sec">
          {loading && <p>Loading...</p>}

          {!loading && filteredBlogs.length === 0 && (
            <p>No blogs found</p>
          )}

          {!loading &&
            filteredBlogs.map((blog, index) => (
              <div className={styles.cmnCard} key={blog.id}>
                <div className={styles.cardImg}>
                  <img
                    src={`http://127.0.0.1:8000${blog.cover_image}`}
                    alt={blog.title}
                  />
                  <span className={styles.tag}>
                    {blog.category_name}
                  </span>

                  {/* BOOKMARK */}
                  <button
                    className={styles.bookmark}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(index);
                    }}
                  >
                    {bookmarked.includes(index) ? (
                      <FaBookmark />
                    ) : (
                      <FaRegBookmark />
                    )}
                  </button>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.meta}>
                    <span>
                      <Image
                        src="/images/home-page-images/calendar.png"
                        alt="calendar"
                        width={18}
                        height={18}
                      />
                      {blog.created_at.split("T")[0]}
                    </span>

                    <span>
                      <Image
                        src="/images/home-page-images/chat.png"
                        alt="comment"
                        width={16}
                        height={16}
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
    </section>
  );
}

