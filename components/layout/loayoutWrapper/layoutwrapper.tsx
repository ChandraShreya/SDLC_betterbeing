"use client";

import { usePathname } from "next/navigation";
import Header from "../header/header";
import Footer from "../footer/footer";
// import Navbar from "../navbar/navbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";

  // ❌ Pages where Navbar should NOT show
  const hideNavbarRoutes = [
    "/signUp",
    "/signIn",
    "/otp",
    "/verifyLogin",
  ];

  const showNavbar = !hideNavbarRoutes.includes(pathname);

  return (
    <>
      {!hideNavbarRoutes.includes(pathname) && <Header />}

      {children}

      {!hideNavbarRoutes.includes(pathname) && <Footer />}
    </>
  );
}