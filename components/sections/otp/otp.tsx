



"use client";

import { verifyOtp } from "@/redux/slice/authSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import styles from "../otp/otp.module.css";

export default function OtpPage() {
  const dispatch = useDispatch<any>();
  const router = useRouter();

  const [storedEmail, setStoredEmail] = useState("");

  /* ================= GET EMAIL FROM LOCALSTORAGE ================= */
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setStoredEmail(email);
    } else {
      toast.error("Email not found. Please register again.");
      router.push("/auth/signUp");
    }
  }, [router]);

  /* ================= HANDLE OTP INPUT ================= */
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
      const result = await dispatch(
        verifyOtp({
          email: storedEmail,
          otp: otpValue,
        })
      ).unwrap();

      console.log(result, "OTP Response");

      if (result?.message || result?.token) {
        toast.success("OTP Verified Successfully");
        router.push("/signIn");
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
