"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import styles from "../header/header.module.css";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/slice/authSlice";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

export default function Header() {
  const { data: session } = useSession(); // Google login
  const { isloggedIn, email } = useSelector((state: any) => state.auth); // Normal login
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();

  const isGoogleUser = !!session?.user;
  const isNormalUser = isloggedIn;

  // Decide name
  const userName =
    session?.user?.name ||
    email?.split("@")[0] ||
    "";

  // Decide image
  const userImage =
    session?.user?.image ||
    "/images/home-page-images/user.png";

  const handleLogout = () => {
    if (isGoogleUser) {
      signOut({ callbackUrl: "/" });
    } else {
      dispatch(logout());
    }
  };

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

          {/* NAV LINKS (UNCHANGED) */}
          <ul className={styles.navLinks}>
            <li>
              <Link
                href="/"
                className={pathname === "/" ? styles.active : ""}
              >
                home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className={pathname === "/about" ? styles.active : ""}
              >
                about us
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className={pathname === "/blog" ? styles.active : ""}
              >
                blog list
              </Link>
            </li>

            <li>
              <Link
                href="/bookmark"
                className={pathname === "/bookmark" ? styles.active : ""}
              >
                bookmarks
              </Link>
            </li>

            <li>
              <Link
                href="/faq"
                className={pathname === "/faq" ? styles.active : ""}
              >
                FAQs
              </Link>
            </li>

            <li>
              <Link
                href="/contactInfo"
                className={pathname === "/contactInfo" ? styles.active : ""}
              >
                contact us
              </Link>
            </li>
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

              {/* IF LOGGED IN (Google OR Normal) */}
              {(isGoogleUser || isNormalUser) ? (
                <div className={styles.userBox}>

                  <button
                  onClick={()=>router.push("/userProfile")}
                    className="cmn-Btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                  >
                    <Image
                      src={userImage}
                      alt="profile"
                      width={28}
                      height={28}
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover"
                      }}
                    />

                    Hey, {userName}
                  </button>

                  <button
                    onClick={handleLogout}
                    className={styles.logoutBtn}
                  >
                    Logout
                  </button>

                </div>
              ) : (
                /* NOT LOGGED IN */
                <>
                  <Link href="/signIn" className={styles.userSignup}>
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