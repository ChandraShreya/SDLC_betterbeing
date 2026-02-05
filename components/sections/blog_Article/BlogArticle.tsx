import Link from "next/link";
import Style from "../blog_Article/blogArticle.module.css"
import Image from "next/image";

const BlogArticle = () => {
const filterNames =[
    "Nutrition",
    "Fitness",
    "Mental Wellness",
    "Preventive Care",
    "Alternative Therapy",
    "Sleep Health",
    "Personal Awareness",
    "Extended Care",
]
  return (
    <div className={Style.blogSec}>
      <div className="container">
        <div className={Style.blogHeader}>
          <div className={Style.blogSubtitle}>
            <span className={Style.blogSubtitle}>Latest Articles</span>
            <h2 className={Style.title2}>Health And Wellness Articles</h2>
          </div>
        </div>
         {/* <!-- CATEGORY FILTER --> */}
          <div className={Style.blogFilter}>
            <ul>
              <li className={`${Style.filterItem} ${Style.active} `}>All</li>
              {
                filterNames.map((item,index)=>(
                    <li className={Style.filterItem} key={index}>{item}</li>
                ))
              }
            </ul>
          </div>
          <div className="featured-card-sec">
                    {/* <!-- card-1 --> */}
                     <div className="cmn-card">
                        <div className="card-img">
                            <Image src="/images/blog-list/cardio-pic.png" alt="featured-card" width={500} height={500}/>
                            <span className="tag">Fitness</span>
                            <div className="icons">
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </div>
                        </div>

                        <div className="card-content">
                            <div className="meta">
                                <span><Image src="/images/home-page-images/calendar.png" alt="calender" width={500} height={500} />May
                                    14,
                                    2025</span>
                                <span>
                                    <Image src="/images/home-page-images/chat.png" alt="comment" width={500} height={500} />0
                                </span>
                            </div>

                            <h3>Best Cardio Exercises for Beginners</h3>
                            <p>
                                Starting with cardio doesn’t have to feel overwhelming. You don’t need a fancy plan—you
                                just need movement....
                            </p>
                            <a href="#" className="read-more">Learn More <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>

              </div>             

          </div>
      </div>
    </div>
  );
};

export default BlogArticle;
