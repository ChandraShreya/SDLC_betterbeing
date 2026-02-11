// // "use client";

// // import Image from "next/image";
// // import styles from "../blogDetails/blogDetails.module.css"

// // export default function BlogDetails() {
// //   return (
// //     <main className={styles.blogPage}>
// //       <div className="container">
// //         <div className={styles.blogWrapper}>

// //           {/* LEFT CONTENT */}
// //           <div className={styles.blogLeft}>
// //             <div className={styles.blogContentMain}>

// //               <h1 className={styles.blogTitle}>
// //                 Stretching Exercises: Your Friendly Guide <br />
// //                 To Building The Perfect Workout Routine
// //               </h1>

// //               <p className={styles.blogSubtitle}>
// //                 Top Stretching Exercises To Boost Your Workout Routine Fast.
// //               </p>

// //               {/* META */}
// //               <div className={styles.blogMeta}>
// //                 <div className={styles.profileIcon}>
// //                   <Image
// //                     src="/images/blog-details/Frame-355.png"
// //                     alt="author"
// //                     width={26}
// //                     height={26}
// //                   />
// //                   <span>Arushi Sharma</span>
// //                 </div>

// //                 <span className={styles.bulletDot} />
// //                 <span className={styles.category}>Fitness</span>
// //                 <span className={styles.bulletDot} />

// //                 <div className={styles.calenderDiv}>
// //                   <i className="fa-regular fa-calendar" />
// //                   <span>May 14, 2025</span>
// //                 </div>
// //               </div>

// //               {/* MAIN IMAGE */}
// //               <div className={styles.blogImage}>
// //                 <Image
// //                   src="/images/blog-details/Main-Image.png"
// //                   alt="blog"
// //                   width={900}
// //                   height={500}
// //                 />
// //               </div>

// //               {/* CONTENT */}
// //               <div className={styles.blogContent}>
// //                 <p className={styles.paragraphFirst}>
// //                   Building the perfect workout routine is key if you want to get fitter,
// //                   boost your energy, or simply add a healthy habit to your day.
// //                 </p>

// //                 <h3>
// //                   <span className={styles.dotH3} />
// //                   Why Having a Workout Routine Matters ?
// //                 </h3>

// //                 <p>
// //                   Having a workout routine provides structure, keeping you consistent and motivated.
// //                 </p>

// //                 <h3>
// //                   <span className={styles.dotH3} />
// //                   Why Stretching Exercises Deserve Your Attention ?
// //                 </h3>

// //                 <p>
// //                   Stretching exercises improve flexibility and reduce injury risk.
// //                 </p>
// //               </div>
// //               <div className={styles.blogContent}>
// //                 <p className={styles.paragraphFirst}>
// //                   Building the perfect workout routine is key if you want to get fitter,
// //                   boost your energy, or simply add a healthy habit to your day.
// //                 </p>

// //                 <h3>
// //                   <span className={styles.dotH3} />
// //                   Why Having a Workout Routine Matters ?
// //                 </h3>

// //                 <p>
// //                   Having a workout routine provides structure, keeping you consistent and motivated.
// //                 </p>

// //                 <h3>
// //                   <span className={styles.dotH3} />
// //                   Why Stretching Exercises Deserve Your Attention ?
// //                 </h3>

// //                 <p>
// //                   Stretching exercises improve flexibility and reduce injury risk.
// //                 </p>
// //               </div>

// //             </div>

// //             {/* ACTION BAR */}
// //             <div className={styles.blogActions}>
// //               <div className={styles.actionsLeft}>
// //                 <span><i className="fa-regular fa-heart" /> 20 Likes</span>
// //                 <span><i className="fa-regular fa-comment" /> 20 Comments</span>
// //                 <span><i className="fa-solid fa-share-nodes" /> 10 Shares</span>
// //               </div>

// //               <div className={styles.actionsRight}>
// //                 <input type="text" placeholder="Write a comment..." />
// //                 <button>
// //                   <i className="fa-solid fa-paper-plane" />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>

// //           {/* RIGHT SIDEBAR */}
// //           <aside className={styles.blogRight}>

// //             {/* SHARE */}
// //             <div className={styles.shareBox}>
// //               <h4>Share to</h4>
// //               <div className={styles.shareIcons}>
// //                 <a><i className="fa-brands fa-linkedin-in" /></a>
// //                 <a><i className="fa-brands fa-x-twitter" /></a>
// //                 <a><i className="fa-brands fa-facebook-f" /></a>
// //                 <a><i className="fa-brands fa-instagram" /></a>
// //                 <a><i className="fa-regular fa-envelope" /></a>
// //               </div>
// //             </div>

// //             {/* TAGS */}
// //             <div className={styles.tagBox}>
// //               {["Nutrition", "Fitness", "Mental Wellness", "Sleep Health"].map(
// //                 (tag, i) => (
// //                   <span key={i}>{tag}</span>
// //                 )
// //               )}
// //             </div>

// //             {/* RELATED BLOGS */}
// //             <div className={styles.relatedBlogs}>
// //               <h4>Related Blogs</h4>

// //               {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
// //                 <a key={i} className={styles.relatedItem}>
// //                   <Image
// //                     src="/images/blog-details/Main Image Frame.png"
// //                     alt="related"
// //                     width={80}
// //                     height={80}
// //                   />
// //                   <div>
// //                     <span>Fitness</span>
// //                     <p>Yoga For Beginners: A Simple Guide</p>
// //                     <span className={styles.smallCalendar}>
// //                       <i className="fa-regular fa-calendar" /> Nov 21, 2025
// //                     </span>
// //                   </div>
// //                 </a>
// //               ))}
// //             </div>
// //           </aside>

// //         </div>
// //       </div>
// //     </main>
// //   );
// // }



// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import AxiosInstance from "@/api/axios/axios";
// // import styles from "./blogDetails.module.css";
// import styles from "../blogDetails/blogDetails.module.css"

// export default function BlogDetails() {
//   const { id } = useParams();
//   const [blog, setBlog] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!id) return;

//     AxiosInstance.get("/api/v1/blog/display/")
//       .then((res) => {
//         const found = res.data.find(
//           (item: any) => String(item.id) === String(id)
//         );
//         setBlog(found || null);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, [id]);

//   if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
//   if (!blog) return <p style={{ textAlign: "center" }}>Blog not found</p>;

//   return (


//     <main className={styles.blogPage}>
//       <div className="container">
//         <div className={styles.blogWrapper}>

//           {/* LEFT CONTENT */}
//           <div className={styles.blogLeft}>
//             <div className={styles.blogContentMain}>

//               <h1 className={styles.blogTitle}>{blog.title}</h1>

//               <p className={styles.blogSubtitle}>
//                 {blog.description}
//               </p>

//               {/* META */}
//               <div className={styles.blogMeta}>
//                 <div className={styles.profileIcon}>
//                   <Image
//                     src="/images/blog-details/Frame-355.png"
//                     alt="author"
//                     width={26}
//                     height={26}
//                   />
//                   <span>{blog.author_name || "Admin"}</span>
//                 </div>

//                 <span className={styles.bulletDot}></span>
//                 <span>{blog.category_name}</span>
//                 <span className={styles.bulletDot}></span>

//                 <div className={styles.calenderDiv}>
//                   <i className="fa-regular fa-calendar"></i>
//                   <span>
//                     {blog.created_at?.split("T")[0]}
//                   </span>
//                 </div>
//               </div>

//               {/* MAIN IMAGE */}
//               <div className={styles.blogImage}>
//                 <img
//                   src={`http://127.0.0.1:8000${blog.cover_image}`}
//                   alt={blog.title}
//                 />
//               </div>

//               {/* CONTENT */}
//               <div
//                 className={styles.blogContent}
//                 dangerouslySetInnerHTML={{
//                   __html: blog.content.replace(/\n/g, "<br />"),
//                 }}
//               />
//             </div>

//             {/* ACTION BAR */}
//             <div className={styles.blogActions}>
//               <div className={styles.actionsLeft}>
//                 <span>
//                   <i className="fa-regular fa-heart"></i> 0 Likes
//                 </span>
//                 <span>
//                   <i className="fa-regular fa-comment"></i> 0 Comments
//                 </span>
//                 <span>
//                   <i className="fa-solid fa-share-nodes"></i> 0 Shares
//                 </span>
//               </div>

//               <div className={styles.actionsRight}>
//                 <input type="text" placeholder="Write a comment..." />
//                 <button>
//                   <i className="fa-solid fa-paper-plane"></i>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDEBAR */}
//           <aside className={styles.blogRight}>

//             {/* SHARE */}
//             <div className={styles.shareBox}>
//               <h4>Share to</h4>
//               <div className={styles.shareIcons}>
//                 <a><i className="fa-brands fa-linkedin-in"></i></a>
//                 <a><i className="fa-brands fa-x-twitter"></i></a>
//                 <a><i className="fa-brands fa-facebook-f"></i></a>
//                 <a><i className="fa-brands fa-instagram"></i></a>
//                 <a><i className="fa-regular fa-envelope"></i></a>
//               </div>
//             </div>

//             {/* TAGS */}
//             <div className={styles.tagBox}>
//               {(blog.tags || [
//                 "Nutrition",
//                 "Fitness",
//                 "Mental Health",
//                 "Sleep Health",
//                 "Alternative Therapies",
//                 "Extended Care",
//                 "Preventive care",
//                 "Personalized Wellness"
//               ]).map((tag, i) => (
//                 <span key={i}>{tag}</span>
//               ))}
//             </div>

//             {/* RELATED BLOGS */}
//             <div className={styles.relatedBlogs}>
//               <h4>Related Blogs</h4>

//               {[1, 2, 3, 4].map((_, i) => (
//                 <a key={i} className={styles.relatedItem}>
//                   <Image
//                     src="/images/blog-details/Main Image Frame.png"
//                     alt="related"
//                     width={80}
//                     height={80}
//                   />
//                   <div>
//                     <span>{blog.category_name}</span>
//                     <p>Yoga For Beginners: A Simple Guide</p>
//                     <span className={styles.smallCalendar}>
//                       <i className="fa-regular fa-calendar"></i> Nov 21, 2025
//                     </span>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </aside>

//         </div>
//       </div>
//     </main>
//   );
// }



// "use client";

// import { useParams } from "next/navigation";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { getAllBlogs } from "@/redux/slices/blogSlice";
// import Image from "next/image";
// import styles from "../blogDetails/blogDetails.module.css";
// import Link from "next/link";
// import { getAllBlogs } from "@/redux/slice/blogSlice";

// export default function BlogDetails() {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const { blogs, loading } = useSelector((state) => state.blogs);

//   // Fetch blogs if not already loaded
//   useEffect(() => {
//     if (blogs.length === 0) {
//       dispatch(getAllBlogs());
//     }
//   }, [dispatch, blogs.length]);

//   // Find current blog
//   const blog = blogs.find(
//     (item) => String(item.id) === String(id)
//   );

//   // Filter related blogs
//   const relatedBlogs = blogs.filter(
//     (item) =>
//       item.category_name === blog?.category_name &&
//       String(item.id) !== String(id)
//   );

//   if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
//   if (!blog) return <p style={{ textAlign: "center" }}>Blog not found</p>;

//   return (
//     <main className={styles.blogPage}>
//       <div className="container">
//         <div className={styles.blogWrapper}>
          
//           {/* LEFT CONTENT */}
//           <div className={styles.blogLeft}>
//             <div className={styles.blogContentMain}>
              
//               <h1 className={styles.blogTitle}>{blog.title}</h1>
//               <p className={styles.blogSubtitle}>{blog.description}</p>

//               {/* META */}
//               <div className={styles.blogMeta}>
//                 <div className={styles.profileIcon}>
//                   <Image
//                     src="/images/blog-details/Frame-355.png"
//                     alt="author"
//                     width={26}
//                     height={26}
//                   />
//                   <span>{blog.author_name || "Admin"}</span>
//                 </div>

//                 <span className={styles.bulletDot}></span>
//                 <span>{blog.category_name}</span>
//                 <span className={styles.bulletDot}></span>

//                 <div className={styles.calenderDiv}>
//                   <i className="fa-regular fa-calendar"></i>
//                   <span>{blog.created_at?.split("T")[0]}</span>
//                 </div>
//               </div>

//               {/* MAIN IMAGE */}
//               <div className={styles.blogImage}>
//                 <img
//                   src={`http://127.0.0.1:8000${blog.cover_image}`}
//                   alt={blog.title}
//                   width={900}
//                   height={500}
//                 />
//               </div>

//               {/* CONTENT */}
//               <div
//                 className={styles.blogContent}
//                 dangerouslySetInnerHTML={{
//                   __html: blog.content.replace(/\n/g, "<br />"),
//                 }}
//               />
//             </div>
//           </div>

//           {/* RIGHT SIDEBAR */}
//           <aside className={styles.blogRight}>
//             <div className={styles.relatedBlogs}>
//               <h4>Related Blogs</h4>

//               {relatedBlogs.length === 0 && (
//                 <p>No related blogs found</p>
//               )}

//               {relatedBlogs.slice(0, 4).map((item) => (
//                 <Link
//                   key={item.id}
//                   href={`/blog/${item.id}`}
//                   className={styles.relatedItem}
//                 >
//                   <Image
//                     src={`http://127.0.0.1:8000${item.cover_image}`}
//                     alt={item.title}
//                     width={80}
//                     height={80}
//                   />
//                   <div>
//                     <span>{item.category_name}</span>
//                     <p>{item.title}</p>
//                     <span className={styles.smallCalendar}>
//                       <i className="fa-regular fa-calendar"></i>{" "}
//                       {item.created_at?.split("T")[0]}
//                     </span>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </aside>

//         </div>
//       </div>
//     </main>
//   );
// }


"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getAllBlogs } from "@/redux/slices/blogSlice";
import Image from "next/image";
import styles from "../blogDetails/blogDetails.module.css";
import Link from "next/link";
import { getAllBlogs } from "@/redux/slice/blogSlice";

export default function BlogDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const blogState = useSelector((state) => state.blogs || {});
  const { blogs = [], loading = false } = blogState;

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Fetch blogs
  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(getAllBlogs());
    }
  }, [dispatch, blogs.length]);

  // Current blog
  const blog = blogs.find(
    (item) => String(item.id) === String(id)
  );

  // Related blogs (same category except current)
  const relatedBlogs = blogs.filter(
    (item) =>
      item.category_name === blog?.category_name &&
      String(item.id) !== String(id)
  );

  const handleAddComment = () => {
    if (comment.trim() === "") return;

    setComments([
      ...comments,
      {
        text: comment,
        date: new Date().toLocaleDateString(),
      },
    ]);

    setComment("");
  };

  if (loading)
    return <p style={{ textAlign: "center" }}>Loading...</p>;

  if (!blog)
    return <p style={{ textAlign: "center" }}>Blog not found</p>;

  return (
    <main className={styles.blogPage}>
      <div className="container">
        <div className={styles.blogWrapper}>

          {/* LEFT CONTENT */}
          <div className={styles.blogLeft}>
            <div className={styles.blogContentMain}>

              <h1 className={styles.blogTitle}>{blog.title}</h1>

              <p className={styles.blogSubtitle}>
                {blog.description}
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
                  <span>{blog.author_name || "Admin"}</span>
                </div>

                <span className={styles.bulletDot}></span>
                <span>{blog.category_name}</span>
                <span className={styles.bulletDot}></span>

                <div className={styles.calenderDiv}>
                  <i className="fa-regular fa-calendar"></i>
                  <span>{blog.created_at?.split("T")[0]}</span>
                </div>
              </div>

              {/* MAIN IMAGE */}
              <div className={styles.blogImage}>
                <img
                  src={`http://127.0.0.1:8000${blog.cover_image}`}
                  alt={blog.title}
                  width={800}
                  height={350}
                />
              </div>

              {/* CONTENT */}
              <div
                className={styles.blogContent}
                dangerouslySetInnerHTML={{
                  __html: blog.content.replace(/\n/g, "<br />"),
                }}
              />
            </div>

            {/* ACTION BAR */}
            <div className={styles.blogActions}>
              <div className={styles.actionsLeft}>
                <span>
                  <i className="fa-regular fa-heart"></i> 0 Likes
                </span>
                <span>
                  <i className="fa-regular fa-comment"></i> {comments.length} Comments
                </span>
                <span>
                  <i className="fa-solid fa-share-nodes"></i> 0 Shares
                </span>
              </div>

              <div className={styles.actionsRight}>
                <input
                  type="text"
                  placeholder="Write a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={handleAddComment}>
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </div>

            {/* COMMENT LIST */}
            {comments.length > 0 && (
              <div className={styles.commentSection}>
                {comments.map((c, index) => (
                  <div key={index} className={styles.singleComment}>
                    <p>{c.text}</p>
                    <span>{c.date}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className={styles.blogRight}>

            {/* SHARE */}
            <div className={styles.shareBox}>
              <h4>Share to</h4>
              <div className={styles.shareIcons}>
                <a><i className="fa-brands fa-linkedin-in"></i></a>
                <a><i className="fa-brands fa-x-twitter"></i></a>
                <a><i className="fa-brands fa-facebook-f"></i></a>
                <a><i className="fa-brands fa-instagram"></i></a>
                <a><i className="fa-regular fa-envelope"></i></a>
              </div>
            </div>

            {/* TAGS */}
            <div className={styles.tagBox}>
              {(blog.tags || []).map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>

            {/* RELATED BLOGS */}
            <div className={styles.relatedBlogs}>
              <h4>Related Blogs</h4>

              {relatedBlogs.length === 0 && (
                <p>No related blogs found</p>
              )}

              {relatedBlogs.slice(0, 4).map((item) => (
                <Link
                  key={item.id}
                  href={`/blog/${item.id}`}
                  className={styles.relatedItem}
                >
                  <img
                    src={`http://127.0.0.1:8000${item.cover_image}`}
                    alt={item.title}
                    width={80}
                    height={40}
                  />
                  <div>
                    <span>{item.category_name}</span>
                    <p>{item.title}</p>
                    <span className={styles.smallCalendar}>
                      <i className="fa-regular fa-calendar"></i>{" "}
                      {item.created_at?.split("T")[0]}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}







