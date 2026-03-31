"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import * as yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import styles from "../signIn/signIn.module.css"
// import { authLogin } from "@/redux/slice/authSlice";
import { authLogin } from "@/redux/slice/authSlice";

const schema = yup.object().shape({
    email: yup.string().email("Invalid Email").required("Email is required"),
    password: yup.string().required("Password is required"),
});

export default function SignInSection() {
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleGoogleLogin = () => {
        signIn("google", {
            callbackUrl: "/",
        });
    };

const handleLogin = async (data: any) => {
  try {
    const res = await dispatch(
      authLogin({
        email: data.email,
        password: data.password,
      })
    ).unwrap();

    if (res?.message) {
      // ✅ STORE EMAIL HERE
      localStorage.setItem("login_email", data.email);

      // ✅ Redirect to verify page
      router.push("/verifyLogin");
    }
  } catch (error) {
    console.log(error);
  }
};
    return (
        <section className={styles.authSection}>
            <div className={styles.container}>
                <div className={styles.signupChild}>
                    {/* LEFT */}
                    <div className={styles.authLeft}>
                        <div className={styles.brand}>
                            <Image
                                src="/images/signup-page-imgaes/image.png"
                                alt="Better Being"
                                width={200}
                                height={200}
                            />
                            <p>A Holistic World of Health & Well-Being</p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className={styles.authRight}>
                        <div className={styles.authBox}>
                            <div className={styles.authTop}>
                                <div className={styles.heading}>
                                    <h2>Welcome Back</h2>
                                    <p className={styles.subtitle}>
                                        Log in to continue your journey toward a balanced,
                                        healthy, and mindful life.
                                    </p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit(handleLogin)}>

                                {/* EMAIL */}
                                <div className={styles.inputBoxSignup}>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        {...register("email")}
                                    />
                                    {/* <label>Email Address</label> */}
                                    {errors.email && (
                                        <span className={styles.error}>
                                            {errors.email.message}
                                        </span>
                                    )}
                                </div>

                                {/* PASSWORD */}
                                <div className={styles.inputBoxSignup}>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        {...register("password")}
                                    />
                                    <span
                                        className={styles.eyeIcon}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <FontAwesomeIcon
                                            icon={showPassword ? faEye : faEyeSlash}
                                        />
                                    </span>
                                </div>
                                {errors.password && (
                                    <span className={styles.error}>
                                        {errors.password.message}
                                    </span>
                                )}

                                <button className={`cmn-btn ${styles.primaryBtn}`}>
                                    Log In
                                </button>
                            </form>

                            {/* BOTTOM */}
                            <div className={styles.signupBtm}>
                                <div className={styles.divider}>Or continue with</div>

                                <div className={styles.socialBtns}>
                                    <button
                                        type="button"
                                        className={styles.google}
                                        onClick={handleGoogleLogin}
                                    >
                                        <Image
                                            src="/images/signup-page-imgaes/google-icon-logo-svgrepo-com.svg"
                                            alt="Google"
                                            width={30}
                                            height={30}
                                        />
                                    </button>
                                </div>

                                <p className={styles.loginLink}>
                                    Don't have an account?{" "}
                                    <Link href="/signUp" className={styles.loginText}>
                                        Sign Up
                                    </Link>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}