"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
// import styles from "../signIn/signIn.module.css";
import { verifyLoginOtp } from "@/redux/slice/authSlice";
import Image from "next/image";
import styles from "../verifyLogin/verifyLogin.module.css"


export default function VerifyLoginOtpPage() {
  const dispatch = useDispatch<any>();
  const router = useRouter();

  const [storedEmail, setStoredEmail] = useState("");

  /* ================= GET EMAIL ================= */
  useEffect(() => {
    const email = localStorage.getItem("login_email");
    if (email) {
      setStoredEmail(email);
    } else {
      toast.error("Session expired. Please login again.");
      router.push("/signIn");
    }
  }, [router]);

  /* ================= HANDLE INPUT ================= */
  const handleChange = (e: any, index: number) => {
    const value = e.target.value.replace(/\D/g, "").slice(-1);
    e.target.value = value;

    if (value && index < 5) {
      const nextInput = document.getElementById(
        `otp-${index + 1}`
      ) as HTMLInputElement | null;

      if (nextInput) nextInput.focus();
    }
  };

  /* ================= SUBMIT OTP ================= */
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let otpValue = "";

    for (let i = 0; i < 6; i++) {
      const input = document.getElementById(
        `otp-${i}`
      ) as HTMLInputElement | null;

      otpValue += input?.value || "";
    }

    if (otpValue.length !== 6) {
      toast.error("Please enter complete 6 digit OTP");
      return;
    }

    try {
      const res = await dispatch(
        verifyLoginOtp({
          email: storedEmail,
          otp: otpValue,
        })
      ).unwrap();
      console.log("OTP Verification Response:", res);

      if (res?.access) {
        toast.success("Login successful");
        localStorage.removeItem("login_email");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.glassCard}>
        <h3>OTP Verification</h3>

        <p className={styles.emailText}>
          Your mail id is - {storedEmail}
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles.otpInputs}>
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                onChange={(e) => handleChange(e, index)}
                className={styles.otpInput}
              />
            ))}
          </div>

          <button type="submit" className={styles.verifyBtn}>
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}