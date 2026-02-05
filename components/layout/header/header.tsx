
import Link from "next/link"
import styles from "../header/header.module.css"



export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.navbar}>
                    <Link href="./index.html" className={styles.navLogo}>
                        <img
              src="/images/LOGO For Nav Bar.svg"
              alt="main-logo"
            />
                    </Link>
                    <ul className={styles.navLinks}>
                        <li>
                            <Link href="./index.html" className={styles.active}>
                                home
                            </Link>
                        </li>
                        <li>
                            <Link href="./about_us.html">about us</Link>
                        </li>
                        <li>
                            <Link href="./blog_list.html">blog list</Link>
                        </li>
                        <li>
                            <Link href="./bookmarks.html">bookmarks</Link>
                        </li>
                        <li>
                            <Link href="./faq_page.html">FAQs</Link>
                        </li>
                        <li>
                            <Link href="./contact_us.html">contact us</Link>
                        </li>
                    </ul>
                    <div className={styles.navRight}>
                        <div className={styles.navRightIcon}>
                            <Link href="#" className={styles.searchIcon}>
                                <img src="./images/home-page-images/search.png" alt="search" />
                            </Link>
                            <Link href="./login.html" className={styles.userSignup}>
                                <img src="./images/home-page-images/user.png" alt="signup" />
                            </Link>
                            <Link href="./signup.html" className="cmnBtn">
                                sign up
                            </Link>
                        </div>
                        {/* <a class="menu-bar" id="menu-bar"><i class="fa-solid fa-bars"></i></a> */}
                    </div>
                </nav>
            </div>
        </header>
    )
}

