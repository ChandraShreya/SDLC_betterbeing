"use client";

import Image from "next/image";
import styles from "./latestBlogs.module.css";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useState } from "react";

const blogs = [
    {
        img: "/images/home-page-images/latest-blog-img-1.jpg",
        tag: "nutrition",
        date: "May 4, 2025",
        title: "Superfoods on a Budget: Affordable Nutrition for Everyday",
        desc:
            "Healthy eating often feels expensive, especially when we hear the word “superfoods.” Many people think of pricey items like...",
    },
    {
        img: "/images/home-page-images/featured-card-2.jpg",
        tag: "Fitness",
        date: "Dec 12, 2025",
        title:
            "Strength Training: A Simple, Human Guide to Building a Stronger You",
        desc:
            "Strength training isn’t just for athletes or gym enthusiasts—it’s for anyone who wants to feel stronger, move more efficiently...",
    },
    {
        img: "/images/home-page-images/latest-blog-img-3.jpg",
        tag: "Mental Wellness",
        date: "May 17, 2025",
        title: "Nurturing Emotional Well-being: A Path to Holistic Health",
        desc:
            "Emotional well-being significantly influences overall health, defined as the capacity to manage emotional...",
    },
];

export default function LatestBlogs() {
    const [bookmarked, setBookmarked] = useState<number[]>([]);

    const toggleBookmark = (index: number) => {
        setBookmarked((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };
    return (
        <section className={`${styles.latestBlogSec} cmn-gap`}>
            <div className="container">
                <div className={styles.latestBlogChild}>
                    <div className={styles.latestBlogsTitle}>
                        <h2 className="section-title">latest Blogs</h2>

                        <a href="#" className={`${styles.showAllText} primary-color-text`}>
                            show all <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>

                    <div className={styles.featuredCardSec}>
                        {blogs.map((blog, index) => (
                            <div className={`${styles.cmnCard}`} key={index}>
                                <div className={styles.cardImg}>
                                    <Image
                                        src={blog.img}
                                        alt="latest blog"
                                        width={500}
                                        height={350}
                                    />

                                    <span className={styles.tag}>{blog.tag}</span>

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
                                                width={16}
                                                height={16}
                                            />
                                            {blog.date}
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
                                    <p>{blog.desc}</p>

                                    <a href="#" className={styles.readMore}>
                                        Learn More <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
