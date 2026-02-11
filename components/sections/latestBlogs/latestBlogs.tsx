"use client";
import Image from "next/image";
import styles from "./latestBlogs.module.css";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLatestBlogs } from "@/redux/slice/blogSlice";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";



export default function LatestBlogs() {
    const [bookmarked, setBookmarked] = useState<number[]>([]);
    const [showAll, setShowAll] = useState(false)
    const dispatch = useDispatch()

    const latestBlogs = useSelector((state) => state.blogs.latestBlogs) || []


    useEffect(() => {
        dispatch(getLatestBlogs())
    }, [dispatch])

    const visibleBlogs = showAll
        ? latestBlogs
        : latestBlogs.slice(0, 3);



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

                        <button
                            className={styles.toggleBtn}
                            onClick={() => setShowAll((prev) => !prev)}
                        >
                            {showAll ? (
                                <>
                                    <FaArrowLeft />
                                    Show Less
                                </>
                            ) : (
                                <>
                                    Show All
                                    <FaArrowRight />
                                </>
                            )}
                        </button>

                    </div>

                    <div className={styles.featuredCardSec}>
                        {visibleBlogs.map((blog, index) => (
                            <div className={`${styles.cmnCard}`} key={blog.id || index}>
                                <div className={styles.cardImg}>
                                    <img
                                        src={`http://127.0.0.1:8000${blog.cover_image}`}
                                        alt="latest blog"
                                        width={500}
                                        height={350}
                                    />

                                    <span className={styles.tag}>{blog.category_name}</span>

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
            </div>
        </section>

    );
}
