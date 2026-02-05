"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./blogs.module.css";

import { FaAngleLeft, FaAngleRight, FaBookmark, FaRegBookmark } from "react-icons/fa";

const blogs = [
    {
        img: "/images/home-page-images/featured-card-1.jpg",
        date: "May 14, 2025",
        title: "Stretching Exercises: Your Friendly Guide",
        desc:
            "Most mornings feel like a race against the clock, and finding a breakfast that’s quick, nourishing, and actually enjoyable can be a struggle.",
    },
    {
        img: "/images/home-page-images/featured-card-2.jpg",
        date: "Dec 12, 2025",
        title: "Strength Training: A Simple, Human Guide",
        desc:
            "Strength training isn’t just for athletes or gym enthusiasts—it’s for anyone who wants to feel stronger, move more efficiently.",
    },
    {
        img: "/images/home-page-images/featured-card-3.jpg",
        date: "May 4, 2025",
        title: "The Simple Breakfast That Keeps You Fueled",
        desc:
            "Building the perfect workout routine is key if you want to get fitter, boost your energy, or simply add a healthy habit.",
    },
    {
        img: "/images/home-page-images/featured-card-1.jpg",
        date: "May 14, 2025",
        title: "Another Healthy Habit",
        desc:
            "Consistency matters more than intensity. Simple habits done daily make a huge difference.",
    },
];

export default function FeaturedBlogs() {
    const swiperRef = useRef<any>(null);
    const [bookmarked, setBookmarked] = useState<number[]>([]);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const toggleBookmark = (index: number) => {
        setBookmarked((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
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
                    spaceBetween={30}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className={styles.swiper}
                >
                    {blogs.map((blog, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.card}>

                                {/* IMAGE */}
                                <div className={styles.cardImg}>
                                    <Image
                                        src={blog.img}
                                        alt={blog.title}
                                        width={500}
                                        height={350}
                                    />

                                    <span className={styles.tag}>Fitness</span>

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

                                {/* META */}
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
                                    <p>{blog.desc}</p>

                                    <a href="#" className={styles.readMore}>
                                        Learn More →
                                    </a>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}


