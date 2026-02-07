import React from 'react'
import Style from './latestArticles.module.css'
import Image from 'next/image'

const latestArticles = () => {
const BlogFilter =[
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
     <section className={Style.blogSec}>
            <div className="container">
                <div className={Style.blogHeader}>
                    <span className={Style.blogSubtitle}>Latest Articles</span>
                    <h2 className={Style.title2}>Health And Wellness Articles</h2>
                </div>

                <div className={Style.blogFilter}>
                    <ul>
                        <li className={`${Style.filterItems} ${Style.active} `}>All</li>
                        {
                            BlogFilter.map((filter)=>(
                                <li className={Style.filterItems}>{filter}</li>
                            ))
                        }
                    </ul>
                </div>

                <div className="featured-card-sec">
                    {/* <!-- card-1 --> */}
                    <div className="cmn-card">
                        <div className="card-img">
                            <Image src="/images/blog-list/meal.png" alt="featured-card" width={500} height={500}/>   
                            <span className="tag">Nutrition</span>

                            <div className="icons">
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </div>
                        </div>

                        <div className="card-content">
                            <div className="meta">
                                <span>
                                    <Image src="/images/home-page-images/calendar.png" alt="calender" width={500} height={500}/>
                                    May 14,2025
                                </span>
                                <span>
                                    <Image src="/images/home-page-images/chat.png" alt="comment" width={500} height={500}/>0
                                </span>
                            </div>

                            <h3>Meal Plans That Actually Work: Easy + Healthy Weekly Prep Ideas</h3>
                            <p>
                                Meal Plans save time, improve healthy eating, reduce waste, support weight control, and
                                make weekly meals simple, flexible, and consistent.
                            </p>
                            <a href="./blog_details.html" className="read-more">Learn More 
                            <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>

                    </div>
                    <div className="cmn-card">
                        <div className="card-img">
                            <Image src="/images/blog-list/meal.png" alt="featured-card" width={500} height={500}/>   
                            <span className="tag">Nutrition</span>

                            <div className="icons">
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </div>
                        </div>

                        <div className="card-content">
                            <div className="meta">
                                <span>
                                    <Image src="/images/home-page-images/calendar.png" alt="calender" width={500} height={500}/>
                                    May 14,2025
                                </span>
                                <span>
                                    <Image src="/images/home-page-images/chat.png" alt="comment" width={500} height={500}/>0
                                </span>
                            </div>

                            <h3>Meal Plans That Actually Work: Easy + Healthy Weekly Prep Ideas</h3>
                            <p>
                                Meal Plans save time, improve healthy eating, reduce waste, support weight control, and
                                make weekly meals simple, flexible, and consistent.
                            </p>
                            <a href="./blog_details.html" className="read-more">Learn More 
                            <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>

                    </div>
                    <div className="cmn-card">
                        <div className="card-img">
                            <Image src="/images/blog-list/meal.png" alt="featured-card" width={500} height={500}/>   
                            <span className="tag">Nutrition</span>

                            <div className="icons">
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </div>
                        </div>

                        <div className="card-content">
                            <div className="meta">
                                <span>
                                    <Image src="/images/home-page-images/calendar.png" alt="calender" width={500} height={500}/>
                                    May 14,2025
                                </span>
                                <span>
                                    <Image src="/images/home-page-images/chat.png" alt="comment" width={500} height={500}/>0
                                </span>
                            </div>

                            <h3>Meal Plans That Actually Work: Easy + Healthy Weekly Prep Ideas</h3>
                            <p>
                                Meal Plans save time, improve healthy eating, reduce waste, support weight control, and
                                make weekly meals simple, flexible, and consistent.
                            </p>
                            <a href="./blog_details.html" className="read-more">Learn More 
                            <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    
                </div>
            </div>
     </section>
  )
}

export default latestArticles;