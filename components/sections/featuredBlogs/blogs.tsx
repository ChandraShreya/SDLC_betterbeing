"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./blogs.module.css";

import { FaAngleLeft, FaAngleRight, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedBlogs } from "@/redux/slice/blogSlice";
import { log } from "console";
import Link from "next/link";
import { toast } from "sonner";
import {  addBookmark, removeBookmark } from "@/redux/slice/bookmarkSlice";



export default function FeaturedBlogs() {
    const swiperRef = useRef(null);
    const dispatch = useDispatch()
    const { featuredBlogs = [], loading } = useSelector((state) => state.blogs)

    const [bookmarked, setBookmarked] = useState<number[]>([]);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const { token } = useSelector((state: any) => state.auth);

    useEffect(() => {
        dispatch(getFeaturedBlogs())
    }, [dispatch])
    console.log("kkk", featuredBlogs);


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

    const handleSwiperUpdate = (swiper: any) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <section className={`${styles.featuredBlogSection} cmn-gap`}>
            <div className="container">

                {/* HEADER */}
                <div className={styles.headerRow}>
                    <h2 className={styles.sectionTitle}>Featured Blogs</h2>

                    <div className={styles.navButtons}>
                        <button
                            className={`${styles.navBtn} ${isBeginning ? styles.disabled : ""}`}
                            onClick={() => swiperRef.current?.slidePrev()}
                            disabled={isBeginning}
                            aria-label="Previous slide"
                        >
                            <FaAngleLeft />
                        </button>

                        <button
                            className={`${styles.navBtn} ${isEnd ? styles.disabled : ""}`}
                            onClick={() => swiperRef.current?.slideNext()}
                            disabled={isEnd}
                            aria-label="Next slide"
                        >
                            <FaAngleRight />
                        </button>
                    </div>
                </div>

                {/* SWIPER */}
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        handleSwiperUpdate(swiper)
                    }}
                    onSlideChange={handleSwiperUpdate}
                    onResize={handleSwiperUpdate}
                    slidesPerView={3}
                    spaceBetween={10}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className={styles.swiper}
                >
                    {featuredBlogs?.map((blog, index) => (
                        <SwiperSlide key={blog.id || index}>
                            <div className={styles.card}>

                                {/* IMAGE */}
                                <div className={styles.cardImg}>
                                    <img
                                        src={`http://127.0.0.1:8000${blog.cover_image}`}
                                        alt="img"
                                        width={500}
                                        height={350}
                                    />

                                    <span className={styles.tag}>{blog.category_name}</span>

                                    {/* BOOKMARK */}
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

                                {/* META */}
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
                                            alt="chat"
                                            width={16}
                                            height={16}
                                        />
                                        0
                                    </span>
                                </div>

                                {/* CONTENT */}
                                <div className={styles.cardContent}>
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
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}


