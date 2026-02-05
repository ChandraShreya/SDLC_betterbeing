import React from 'react'
import Image from 'next/image'
import Style from "../about_Contact/ContactUs.module.css"


const ContactUs = () => {
  return (
    <section className={`${Style.contactSec} cmn-gap`}>
            <div className="container">
                <div className={Style.contactChild}>
                    {/* <!-- contact left --> */}
                    <div className={Style.contactLeft}>
                        <div className={Style.contactInnerText}>
                            <span className='primary-color-text'>contact us</span>
                            <h2>let’s talk wellness</h2>
                            {/* <!-- first row card --> */}
                            <div className={Style.officePhoneWrapper}>
                                {/* <!-- cmn-contact-card-1 --> */}
                                <div className={Style.cmnContactCard}>
                                    <div className={Style.cmnContactCardTop}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5} stroke="currentColor" className="size-13">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>

                                    </div>
                                    <div className={Style.cmnContactCardBottom}>
                                        <div className={Style.cmnContactCardHeading}>office</div>
                                        <a href="#">street 123 new york, USA</a>
                                    </div>
                                </div>
                                {/* <!-- cmn-contact-card-2 --> */}
                                <div className={Style.cmnContactCard}>
                                    <div className={Style.cmnContactCardTop}>       
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5} stroke="currentColor" className="size-13">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>

                                    </div>
                                    <div className={Style.cmnContactCardBottom}>
                                        <div className={Style.cmnContactCardHeading}>phone</div>
                                        <a href="#">(555) 012-3456</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- second row card --> */}
                            <div className={Style.mailTimeWrapper}>
                                {/* <!-- cmn-contact-card-1 --> */}
                                <div className={Style.cmnContactCard}>
                                    <div className={Style.cmnContactCardTop}>
                                        {/* <!-- <img src="./images/contact-us-mail-img.svg" alt=""> --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5} stroke="currentColor" className="size-13">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div className={Style.cmnContactCardBottom}>
                                        <div className={Style.cmnContactCardHeading}>mail</div>
                                        <a href="#" className="small">betterbeing@gmail.com</a>
                                    </div>
                                </div>
                                {/* <!-- cmn-contact-card-2 --> */}
                                <div className={Style.cmnContactCard}>
                                    <div className={Style.cmnContactCardTop}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5} stroke="currentColor" className="size-13">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div className={Style.cmnContactCardBottom}>
                                        <div className={Style.cmnContactCardHeading}>time</div>
                                        <a href="#">street 123 new york, USA</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- contact right --> */}
                    <div className={Style.contactRight}>
                        <div className={Style.mapWrapper}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317731.4402229976!2d-0.49767847655077474!3d51.5264813191302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sen!2sin!4v1767097960923!5m2!1sen!2sin"
                                style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ContactUs