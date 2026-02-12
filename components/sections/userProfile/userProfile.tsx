"use client";

import Image from "next/image";
// import styles from "./Dashboard.module.css";
import styles from "../userProfile/userProfile.module.css"

export default function Dashboard() {
    return (
        <section className={styles.dashboardSec}>
            <div className="container">
                <div className={styles.childDashboard}>

                    {/* Leaves */}
                    <div className={styles.leafImage}>
                        <Image
                            src="/images/loged-in/left-side-leaf.png"
                            alt=""
                            width={150}
                            height={150}
                        />
                    </div>

                    {/* HEADER */}
                    <div className={styles.dashboardHead}>
                        <div className={styles.profileImg}>
                            <Image
                                className={styles.profileBg}
                                src="/images/loged-in/Group.png"
                                alt=""
                                width={300}
                                height={300}
                            />

                            <Image
                                className={styles.profileMain}
                                src="/images/loged-in/arushi-pic.png"
                                alt=""
                                width={100}
                                height={100}
                            />

                            <Image
                                className={styles.profileEdit}
                                src="/images/loged-in/pencil-tag.png"
                                alt=""
                                width={30}
                                height={30}
                            />
                        </div>

                        <h2 className={styles.userName}>Arushi Sharma</h2>

                        <div className={styles.dashboardButtons}>
                            <button className={styles.btnSwitch}>
                                <Image
                                    src="/images/loged-in/exchange-img.png"
                                    alt=""
                                    width={18}
                                    height={18}
                                />
                                Switch account
                            </button>

                            <button className={styles.btnLogout}>
                                <Image
                                    src="/images/loged-in/logout-im.png"
                                    alt=""
                                    width={18}
                                    height={18}
                                />
                                Log out
                            </button>
                        </div>
                    </div>

                    <div className={styles.statsDivider}></div>

                    {/* QUICK STATS */}
                    <div className={styles.quickStats}>
                        <h3 className={styles.quickTitle}>Quick Stats</h3>

                        <div className={styles.statsRow}>
                            <div className={styles.statBox}>
                                <Image
                                    src="/images/loged-in/bookmark-img.png"
                                    alt=""
                                    width={22}
                                    height={22}
                                    style={{ objectFit: "contain" }}
                                />
                                <p>Saved Blogs <span className={styles.badge}>12</span></p>
                            </div>

                            <div className={styles.statBox}>
                                <Image
                                    src="/images/loged-in/book-img.png"
                                    alt=""
                                    width={22}
                                    height={22}
                                />
                                <p>Blogs Read <span className={styles.badge}>12</span></p>
                            </div>

                            <div className={`${styles.statBox} ${styles.faqBox}`}>
                                <Image
                                    src="/images/loged-in/Faq-img.png"
                                    alt=""
                                    width={22}
                                    height={22}
                                />
                                <p>
                                    FAQ Activity <span className={styles.notifDot}></span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className={styles.dashboardBottom}>

                        <div className={styles.profileCard}>

                            <div className={`${styles.info} ${styles.wide}`}>
                                <div className={styles.iconWrapper}>
                                    <Image
                                        src="/images/loged-in/hash-tag.png"
                                        alt=""
                                        fill
                                        sizes="22px"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                                <div className={styles.infoText}>
                                    <span>User Id</span>
                                    <p>USR-Aru24681357</p>
                                </div>
                            </div>

                            <div className={styles.infoRow}>
                                <div className={styles.info}>
                                    <div className={styles.iconWrapper}>
                                        <Image
                                            src="/images/loged-in/mail-com.png"
                                            alt=""
                                            fill
                                            sizes="22px"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                    <div className={styles.infoText}>
                                        <span>Username</span>
                                        <p>iam.Arushi</p>
                                    </div>
                                    <div className={styles.editIcon}>
                                        <Image
                                            src="/images/loged-in/pencil-edit.png"
                                            alt=""
                                            fill
                                            sizes="18px"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                </div>

                                <div className={styles.info}>
                                    <div className={styles.iconWrapper}>
                                        <Image
                                            src="/images/loged-in/profile-icon.png"
                                            alt=""
                                            fill
                                            sizes="22px"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                    <div className={styles.infoText}>
                                        <span>Full Name</span>
                                        <p>Arushi Sharma</p>
                                    </div>
                                    <div className={styles.editIcon}>
                                        <Image
                                            src="/images/loged-in/pencil-edit.png"
                                            alt=""
                                            fill
                                            sizes="18px"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.info} ${styles.wide}`}>
                                <div className={styles.iconWrapper}>
                                    <Image
                                        src="/images/loged-in/mail-icon.png"
                                        alt=""
                                        fill
                                        sizes="22px"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                                <div className={styles.infoText}>
                                    <span>Mail Id</span>
                                    <p>arushisharma@gmail.com</p>
                                </div>
                                <div className={styles.editIcon}>
                                    <Image
                                        src="/images/loged-in/pencil-edit.png"
                                        alt=""
                                        fill
                                        sizes="18px"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            </div>

                            <button className={styles.saveBtn}>Make Changes</button>

                        </div>

                        <ul className={styles.dashboardMenu}>
                            {[
                                { icon: "blog.png", text: "Liked Blogs" },
                                { icon: "bubble-chat.png", text: "Your Comments" },
                                { icon: "share-img.png", text: "Shared Blogs" },
                                { icon: "contact-book.png", text: "Contact Better Being" },
                                { icon: "notification.png", text: "Notifications" },
                                { icon: "document-validation.png", text: "Terms & Conditions" },
                            ].map((item, index) => (
                                <li key={index}>
                                    <div className={styles.menuIcon}>
                                        <Image
                                            src={`/images/loged-in/${item.icon}`}
                                            alt=""
                                            fill
                                            sizes="22px"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                    {item.text}
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className={styles.bottomLeafImage}>
                        <Image
                            src="/images/loged-in/right-side-leaf.png"
                            alt=""
                            width={150}
                            height={150}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
