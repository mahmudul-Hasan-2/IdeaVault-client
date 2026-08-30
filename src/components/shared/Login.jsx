"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsGoogle } from "react-icons/bs";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData?.email,
      password: userData?.password,
      rememberMe: true,
      callbackURL: searchParams.get("redirect") || "/",
    });

    setLoading(false);

    if (data) {
      toast.success("Login Success");
      router.push(searchParams.get("redirect") || "/");
    } else {
      toast.error(error?.message || "Login failed");
    }
  };

  const googleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: searchParams.get("redirect") || "/",
    });
  };

  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Welcome Back
          </h2>
          <p className="text-sm font-medium text-base-content/60">
            Login to your account to continue
          </p>
        </div>

        <div className="bg-base-100 border border-base-content/10 shadow-xl rounded-2xl p-6 sm:p-8">
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-base-content/70">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                className="w-full h-12 px-4 rounded-xl bg-base-200 border border-base-content/10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-medium transition-colors duration-150"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-base-content/70">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="w-full h-12 px-4 pr-12 rounded-xl bg-base-200 border border-base-content/10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-medium transition-colors duration-150"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/40 hover:text-blue-500 transition-colors cursor-pointer"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-semibold text-base-content/60">
              <span className="hover:text-blue-500 cursor-pointer transition-colors">
                Forgot password?
              </span>
              <div className="flex items-center gap-1.5">
                <span>Don&apos;t have an account?</span>
                <Link href="/register" className="text-blue-600 font-bold hover:underline">
                  Register
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-60 rounded-xl shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all duration-150 cursor-pointer"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-base-content/10" />
            <span className="text-xs font-bold text-base-content/30 uppercase tracking-wider">
              Or continue with
            </span>
            <div className="flex-1 h-px bg-base-content/10" />
          </div>

          <button
            onClick={googleSignIn}
            type="button"
            className="w-full h-12 rounded-xl border border-base-content/15 hover:bg-base-200 flex items-center justify-center gap-2.5 font-bold text-sm active:scale-[0.98] transition-all duration-150 cursor-pointer"
          >
            <BsGoogle className="text-red-500 text-base" />
            <span>Google Account</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
