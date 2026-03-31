"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../signUp/signUp.module.css"
import { signIn } from "next-auth/react";
import * as yup from "yup"
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { authRegistration } from "@/redux/slice/authSlice";
import { useRouter } from "next/navigation";
// import { log } from "console";

const schema = yup.object().shape({
  full_name: yup.string().required("Name is required"),
  username: yup.string().required("Address is required"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup.string().min(6).required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  profile_image: yup
    .mixed()
    .required("Profile image is required")
});


export default function SignupSection() {


  const [img, setImg] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const imageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImg(file);
      clearErrors("profile_image");
    }
  };

  const handleGoogleSignup = () => {
    signIn("google", {
      callbackUrl: "/", // redirect after login
    });
  };

  const handleClick = async (data) => {
    const formData = new FormData();
    formData.append("full_name", data.full_name);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirm_password", data.confirm_password);
    formData.append("profile_image", img);

    try {
      let res = await dispatch(authRegistration(formData)).unwrap();
      if (res?.message) {
        localStorage.setItem("email", data.email);
        router.push("/otp");
        console.log(res ,"after");
        
      }
    } catch (error) {
      console.error(error);
    }

  }


  return (
    <section className={styles.authSection}>
      <div className="container">
        <div className={styles.signupChild}>
          {/* LEFT */}
          <div className={styles.authLeft}>
            <div className={styles.brand}>
              <Image
                src="/images/signup-page-imgaes/Frame 490 (1).png"
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
                <div className={styles.imageUpload}>
                  <label htmlFor="profileUpload" className={styles.uploadCircle}>
                    {img ? (
                      <img
                        src={URL.createObjectURL(img)}
                        alt="Preview"
                        className={styles.circleImg}
                      />
                    ) : (
                      <span>Choose Image</span>
                    )}
                  </label>
                  <input type="file" id="profileUpload" {...register("profile_image")} onChange={imageChange} hidden />
                </div>

                <div className={styles.heading}>
                  <h2>Create an account</h2>
                  <p className={styles.subtitle}>
                    Explore simple, practical insights and mindful habits that help
                    you build emotional balance, resilience, and long-term mental
                    clarity in everyday life.
                  </p>
                </div>

              </div>

              <form onSubmit={handleSubmit(handleClick)}>

                {/* FULL NAME + USERNAME */}
                <div className={styles.row}>
                  <div className={styles.inputBoxSignup}>
                    <input type="text"  placeholder=" " {...register("full_name")} />
                    <label>Full Name</label>
                    {errors.full_name && <span className={styles.error}>{errors.full_name.message}</span>}
                  </div>

                  <div className={styles.inputBoxSignup}>
                    <input type="text"  placeholder=" " {...register("username")} />
                    <label>User Name</label>
                    {errors.username && <span className={styles.error}>{errors.username.message}</span>}
                  </div>
                </div>

                {/* EMAIL */}
                <div className={styles.inputBoxSignup}>
                  <input type="email"  placeholder=" " {...register("email")} />
                  <label>Email Address</label>
                  {errors.email && <span className={styles.error}>{errors.email.message}</span>}
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
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </span>
                </div>
                {errors.password && <span className={styles.error}>{errors.password.message}</span>}

                {/* CONFIRM PASSWORD */}
                <div className={styles.inputBoxSignup}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                     placeholder="Confirm Password"
                    {...register("confirm_password")}
                  />
                  <span
                    className={styles.eyeIcon}
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  >
                    <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
                  </span>
                </div>
                {errors.confirm_password && (
                  <span className={styles.error}>{errors.confirm_password.message}</span>
                )}

                {/* CHECKBOX */}
                <div className={styles.checkGroupSignup}>
                  <label>
                    <input type="checkbox" /> I have read Privacy policy & T&C.
                  </label>
                  <label>
                    <input type="checkbox" /> Allow to customize my experience
                  </label>
                </div>

                <button className={`cmn-btn ${styles.primaryBtn}`}>
                  Send OTP
                </button>

              </form>

              {/* BOTTOM */}
              <div className={styles.signupBtm}>
                <div className={styles.divider}>Or continue with</div>

                <div className={styles.socialBtns}>
                  <button type="button" className={styles.google}
                    onClick={handleGoogleSignup}
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
                  Already have an account?{" "}
                  <Link href="/signIn" className={styles.loginText}>
                    Log in
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
