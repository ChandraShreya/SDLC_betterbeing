"use client";
import Image from "next/image";
import styles from "./latestBlogs.module.css";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLatestBlogs } from "@/redux/slice/blogSlice";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { toast } from "sonner";
import { addBookmark, removeBookmark } from "@/redux/slice/bookmarkSlice";



export default function LatestBlogs() {
    const [bookmarked, setBookmarked] = useState<number[]>([]);
    const [showAll, setShowAll] = useState(false)
    const { token } = useSelector((state: any) => state.auth);
    const dispatch = useDispatch()

    const latestBlogs = useSelector((state) => state.blogs.latestBlogs) || []


    useEffect(() => {
        dispatch(getLatestBlogs())
    }, [dispatch])

    const visibleBlogs = showAll
        ? latestBlogs
        : latestBlogs.slice(0, 3);



    const toggleBookmark = async (blogId: number) => {
        if (!token) {
            toast.error("Please login to bookmark");
            return;
        }



        try {
            if (bookmarked.includes(blogId)) {
                // REMOVE
                await dispatch(removeBookmark(blogId)).unwrap();

                setBookmarked((prev) =>
                    prev.filter((id) => id !== blogId)
                );

                toast.success("Bookmark removed");
            } else {
                // ADD
                await dispatch(addBookmark(blogId)).unwrap();

                setBookmarked((prev) => [...prev, blogId]);

                toast.success("Bookmark added");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }

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
                                            toggleBookmark(blog.id);
                                        }}
                                    >
                                        {bookmarked.includes(blog.id) ? (
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
