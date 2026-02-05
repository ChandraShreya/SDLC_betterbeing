
// import Link from "next/link"
// import styles from "../header/header.module.css"



// export default function Header() {
//     return (
//         <header className={styles.header}>
//             <div className="container">
//                 <nav className={styles.navbar}>
//                     <Link href="./index.html" className={styles.navLogo}>
//                         <img
//               src="/images/LOGO For Nav Bar.svg"
//               alt="main-logo"
//             />
//                     </Link>
//                     <ul className={styles.navLinks}>
//                         <li>
//                             <Link href="/" className={styles.active}>
//                                 home
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="/about">about us</Link>
//                         </li>
//                         <li>
//                             <Link href="/blog">blog list</Link>
//                         </li>
//                         <li>
//                             <Link href="/bookmark">bookmarks</Link>
//                         </li>
//                         <li>
//                             <Link href="/faq">FAQs</Link>
//                         </li>
//                         <li>
//                             <Link href="/contactInfo">contact us</Link>
//                         </li>
//                     </ul>
//                     <div className={styles.navRight}>
//                         <div className={styles.navRightIcon}>
//                             <Link href="#" className={styles.searchIcon}>
//                                 <img src="./images/home-page-images/search.png" alt="search" />
//                             </Link>
//                             <Link href="./login.html" className={styles.userSignup}>
//                                 <img src="./images/home-page-images/user.png" alt="signup" />
//                             </Link>
//                             <Link href="/signUp" className="cmnBtn">
//                                 sign up
//                             </Link>
//                         </div>
                        
//                     </div>
//                 </nav>
//             </div>
//         </header>
//     )
// }



"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import styles from "../header/header.module.css";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navbar}>

          {/* LOGO */}
          <Link href="/" className={styles.navLogo}>
            <Image
              src="/images/LOGO For Nav Bar.svg"
              alt="main-logo"
              width={140}
              height={40}
            />
          </Link>

          {/* NAV LINKS */}
          <ul className={styles.navLinks}>
            <li><Link href="/">home</Link></li>
            <li><Link href="/about">about us</Link></li>
            <li><Link href="/blog">blog list</Link></li>
            <li><Link href="/bookmark">bookmarks</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
            <li><Link href="/contactInfo">contact us</Link></li>
          </ul>

          {/* RIGHT SIDE */}
          <div className={styles.navRight}>
            <div className={styles.navRightIcon}>

              <Link href="#" className={styles.searchIcon}>
                <Image
                  src="/images/home-page-images/search.png"
                  alt="search"
                  width={20}
                  height={20}
                />
              </Link>

              {/* ✅ IF USER IS LOGGED IN */}
              {session?.user ? (
                <div className={styles.userBox}>
                  <button className="cmnBtn">
                    Hey, {session.user.name?.split(" ")[0]} 
                  </button>

                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className={styles.logoutBtn}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                /* ❌ IF USER NOT LOGGED IN */
                <>
                  <Link href="/login" className={styles.userSignup}>
                    <Image
                      src="/images/home-page-images/user.png"
                      alt="login"
                      width={20}
                      height={20}
                    />
                  </Link>

                  <Link href="/signUp" className="cmnBtn">
                    sign up
                  </Link>
                </>
              )}
            </div>
          </div>

        </nav>
      </div>
    </header>
  );
}

