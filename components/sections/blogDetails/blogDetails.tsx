"use client";

import Image from "next/image";
import styles from "../blogDetails/blogDetails.module.css"

export default function BlogDetails() {
  return (
    <main className={styles.blogPage}>
      <div className="container">
        <div className={styles.blogWrapper}>

          {/* LEFT CONTENT */}
          <div className={styles.blogLeft}>
            <div className={styles.blogContentMain}>

              <h1 className={styles.blogTitle}>
                Stretching Exercises: Your Friendly Guide <br />
                To Building The Perfect Workout Routine
              </h1>

              <p className={styles.blogSubtitle}>
                Top Stretching Exercises To Boost Your Workout Routine Fast.
              </p>

              {/* META */}
              <div className={styles.blogMeta}>
                <div className={styles.profileIcon}>
                  <Image
                    src="/images/blog-details/Frame-355.png"
                    alt="author"
                    width={26}
                    height={26}
                  />
                  <span>Arushi Sharma</span>
                </div>

                <span className={styles.bulletDot} />
                <span className={styles.category}>Fitness</span>
                <span className={styles.bulletDot} />

                <div className={styles.calenderDiv}>
                  <i className="fa-regular fa-calendar" />
                  <span>May 14, 2025</span>
                </div>
              </div>

              {/* MAIN IMAGE */}
              <div className={styles.blogImage}>
                <Image
                  src="/images/blog-details/Main-Image.png"
                  alt="blog"
                  width={900}
                  height={500}
                />
              </div>

              {/* CONTENT */}
              <div className={styles.blogContent}>
                <p className={styles.paragraphFirst}>
                  Building the perfect workout routine is key if you want to get fitter,
                  boost your energy, or simply add a healthy habit to your day.
                </p>

                <h3>
                  <span className={styles.dotH3} />
                  Why Having a Workout Routine Matters ?
                </h3>

                <p>
                  Having a workout routine provides structure, keeping you consistent and motivated.
                </p>

                <h3>
                  <span className={styles.dotH3} />
                  Why Stretching Exercises Deserve Your Attention ?
                </h3>

                <p>
                  Stretching exercises improve flexibility and reduce injury risk.
                </p>
              </div>
              <div className={styles.blogContent}>
                <p className={styles.paragraphFirst}>
                  Building the perfect workout routine is key if you want to get fitter,
                  boost your energy, or simply add a healthy habit to your day.
                </p>

                <h3>
                  <span className={styles.dotH3} />
                  Why Having a Workout Routine Matters ?
                </h3>

                <p>
                  Having a workout routine provides structure, keeping you consistent and motivated.
                </p>

                <h3>
                  <span className={styles.dotH3} />
                  Why Stretching Exercises Deserve Your Attention ?
                </h3>

                <p>
                  Stretching exercises improve flexibility and reduce injury risk.
                </p>
              </div>

            </div>

            {/* ACTION BAR */}
            <div className={styles.blogActions}>
              <div className={styles.actionsLeft}>
                <span><i className="fa-regular fa-heart" /> 20 Likes</span>
                <span><i className="fa-regular fa-comment" /> 20 Comments</span>
                <span><i className="fa-solid fa-share-nodes" /> 10 Shares</span>
              </div>

              <div className={styles.actionsRight}>
                <input type="text" placeholder="Write a comment..." />
                <button>
                  <i className="fa-solid fa-paper-plane" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className={styles.blogRight}>

            {/* SHARE */}
            <div className={styles.shareBox}>
              <h4>Share to</h4>
              <div className={styles.shareIcons}>
                <a><i className="fa-brands fa-linkedin-in" /></a>
                <a><i className="fa-brands fa-x-twitter" /></a>
                <a><i className="fa-brands fa-facebook-f" /></a>
                <a><i className="fa-brands fa-instagram" /></a>
                <a><i className="fa-regular fa-envelope" /></a>
              </div>
            </div>

            {/* TAGS */}
            <div className={styles.tagBox}>
              {["Nutrition", "Fitness", "Mental Wellness", "Sleep Health"].map(
                (tag, i) => (
                  <span key={i}>{tag}</span>
                )
              )}
            </div>

            {/* RELATED BLOGS */}
            <div className={styles.relatedBlogs}>
              <h4>Related Blogs</h4>

              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
                <a key={i} className={styles.relatedItem}>
                  <Image
                    src="/images/blog-details/Main Image Frame.png"
                    alt="related"
                    width={80}
                    height={80}
                  />
                  <div>
                    <span>Fitness</span>
                    <p>Yoga For Beginners: A Simple Guide</p>
                    <span className={styles.smallCalendar}>
                      <i className="fa-regular fa-calendar" /> Nov 21, 2025
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
