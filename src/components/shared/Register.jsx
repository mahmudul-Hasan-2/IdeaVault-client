"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { BsGoogle } from "react-icons/bs";

const Register = () => {
  const searchParams = useSearchParams();

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);

    const { data, error } = await authClient.signUp.email({
      name: userData?.name,
      email: userData?.email,
      image: userData?.image,
      password: userData?.password,
      callbackURL: searchParams.get("redirect") || "/",
    });

    if (data) {
      toast.success("Register Success");
      redirect("/login");
    } else {
      toast.error(`${error.message}`);
    }
  };

  const googleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    if (data) {
      toast.success("Login Success");
    } else {
      toast.error(`Google Sign-In failed`);
    }
  };

  return (
    <div className="min-h-[5vh] flex flex-col justify-center items-center px-4  py-10 transition-colors duration-300">
      <div className="w-full max-w-md space-y-6">
        {/* টাইটেল সেকশন */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-base-content">
            Create Account
          </h2>
          <p className="text-sm font-medium text-base-content/60">
            Join IdeaVault to share and discover startup ideas
          </p>
        </div>

        {/* গ্লাস-মর্ফিক প্রিমিয়াম কার্ড */}
        <div className="card bg-base-100/70 backdrop-blur-md border border-base-content/5 shadow-xl w-full p-2 sm:p-4 rounded-2xl">
          <div className="card-body p-6 sm:p-8">
            <form onSubmit={handleRegister} className="space-y-4">
              {/* নাম ইনপুট */}
              <div className="form-control w-full">
                <label className="label pt-0">
                  <span className="label-text font-bold text-base-content/70">
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="input input-bordered w-full rounded-xl bg-base-200/50 focus:input-primary transition-all duration-200 font-medium"
                  required
                />
              </div>

              {/* ইমেইল ইনপুট */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-base-content/70">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="input input-bordered w-full rounded-xl bg-base-200/50 focus:input-primary transition-all duration-200 font-medium"
                  required
                />
              </div>

              {/* ইমেজ ইউআরএল ইনপুট */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-base-content/70">
                    Image URL
                  </span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="https://example.com/avatar.jpg"
                  className="input input-bordered w-full rounded-xl bg-base-200/50 focus:input-primary transition-all duration-200 font-medium"
                />
              </div>

              {/* 🎯 পাসওয়ার্ড ইনপুট (বাজে হিন্ট বক্স রিমুভড, টাইটেল দিয়ে মডার্ন করা) */}
              <div className="form-control w-full">
                <div className="flex justify-between items-center px-1">
                  <label className="label p-0">
                    <span className="label-text font-bold text-base-content/70">
                      Password
                    </span>
                  </label>
                  {/* ছোট এবং মিনিমাল রিকোয়ারমেন্ট নোটিশ */}
                  <span className="text-[10px] font-bold text-base-content/40 uppercase tracking-wider">
                    Min 6 chars (A-z, 0-9)
                  </span>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full rounded-xl bg-base-200/50 focus:input-primary transition-all duration-200 font-medium mt-1"
                  required
                  minLength={6}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  title="Must be at least 6 characters, including a number, a lowercase, and an uppercase letter"
                />
              </div>

              {/* লগইন লিংক এরিয়া */}
              <div className="flex items-center pt-2 text-xs font-semibold text-base-content/60">
                <div className="flex items-center justify-between gap-1.5 flex-wrap">
                  <span>Already have an account?</span>
                  <Link href="/login" className="link link-primary font-bold">
                    Login
                  </Link>
                </div>
              </div>

              {/* সাবমিট বাটন */}
              <div className="form-control pt-2">
                <button
                  type="submit"
                  className="btn btn-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  Register Account
                </button>
              </div>
            </form>

            {/* ডিভাইডার */}
            <div className="divider text-xs font-bold text-base-content/30 my-6">
              OR CONTINUE WITH
            </div>

            {/* গুগল সাইন-আপ বাটন */}
            <button
              onClick={googleSignUp}
              className="btn btn-outline border-base-content/20 hover:bg-base-content/5 hover:text-base-content w-full rounded-xl flex items-center justify-center gap-2.5 font-bold active:scale-[0.98] transition-all cursor-pointer"
            >
              <BsGoogle className="text-red-500 text-base" />
              <span>Google Account</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
