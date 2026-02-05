import Image from 'next/image';
import Link from 'next/link';
import Style from './expertise.module.css'      

const Expertise = () => {
  return (
    <section className={`${Style.expertiseSec} cmn-gap`}>
            <div className="container">
                <div className={Style.expertiseChild}>
                    <div className={Style.expertiseLeft}>
                        <div className={Style.expertiseInnerText}>
                            <span className='primary-color-text'>our expertise</span>
                            <h2>find your focus: topics to transform your health</h2>
                            <p>Our content is meticulously organized into seven foundational pillars, ensuring you can
                                quickly find the exact guidance you need for a balanced life. Dive into our expansive
                                library where every category is dedicated to simplifying complex health topics and
                                transforming them into actionable steps you can implement today.</p>
                        </div>
                        {/* <!-- Quick search --> */}
                        <div className="firstRow">
                            <Link href="#" className={Style.quickSearch}>
                                <Image src="./images/about-us-page-images/Nutrition-iconSvg.co.svg" alt="icon" width={500} height={500}/>
                                nutrition and diet
                            </Link>
                            <Link href="#" className={Style.quickSearch}>
                                <Image src="./images/about-us-page-images/Home-Gym-Equipment-iconSvg.co.svg" alt="icon" width={500} height={500}/>
                                
                                fitness and exercise
                            </Link>
                            <Link href="#" className={Style.quickSearch}>
                                <Image src="./images/about-us-page-images/Health-Care-Worker-iconSvg.co.svg" alt="icon" width={500} height={500}/>
                                mental health
                            </Link>

                            <Link href="#" className={Style.quickSearch}>
                                <Image src="./images/about-us-page-images/Sleep-iconSvg.co.svg" alt="icon" width={500} height={500}/>
                                sleep health
                            </Link>
                            <Link href="#" className={Style.quickSearch}>
                                <Image src="./images/about-us-page-images/Alternative-Therapies-iconSvg.co.svg" alt="icon" width={500} height={500}/>
                                alternative therapies
                            </Link>
                            <Link href="#" className={Style.quickSearch}>
                                <Image src="./images/about-us-page-images/Preventive-Care-iconSvg.co.svg" alt="icon" width={500} height={500}/>
                                preventive care
                            </Link>
                        </div>
                    </div>
                    <div className={Style.expertiseRight}>
                        <div className={Style.expertiseVideo}>
                            <img src="./images/about-us-page-images/expertise-video.png" alt="video"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Expertise;