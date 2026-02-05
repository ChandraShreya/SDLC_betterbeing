import React from 'react'
// import Style from './blogBanner.module.css'
import Style from "../blog_Banner/blogBanner.module.css"

const BlogBanner = () => {
  return (
    <section className={Style.bannerSec}>
            <div className='container'>
                <div className={Style.bannerChild}>
                    <h1>Blog List</h1>
                    <p>Stay ahead of the curve with deep dives and analysis from industry leaders.Dive into our latest
                        articles covering everything you need to know now.</p>
                </div>
            </div>
    </section>
  )
}

export default BlogBanner