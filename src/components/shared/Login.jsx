"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);

  // 🔍 ১. redirect বা callbackUrl যেকোনো প্যারামিটার কুয়েরি থেকে রিড করা
  const targetRoute =
    searchParams.get("redirect") ||
    searchParams.get("callbackUrl") ||
    "/browse-tasks";

  // 🚨 ২. ব্রেন-ড্যামেজ ফিক্স:ReferenceError চিরতরে বন্ধ করতে এই ভ্যারিয়েবলটা ডিফাইন করে দেওয়া হলো
  const callbackUrl = targetRoute;

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    // BetterAuth সাইন-ইন
    const { data, error } = await authClient.signIn.email({
      email: userData?.email,
      password: userData?.password,
      rememberMe: true,
      callbackURL: targetRoute,
    });

    if (error) {
      toast.error(error.message || "Authentication failed!");
      return;
    }

    if (data) {
      toast.success("Welcome back, Mama!");
      router.push(targetRoute);
      router.refresh();
    }
  };

  return (
    <div className="w-full max-w-md bg-zinc-900/50 border border-white/10 p-8 rounded-2xl backdrop-blur-xl shadow-2xl">
      <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
        Login to System
      </h2>

      <form onSubmit={handleLogin} className="space-y-5">
        <div className="space-y-1">
          <label className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="mama@example.com"
            className="w-full h-11 bg-white/[0.02] border border-white/20 text-white px-4 rounded-xl outline-none focus:border-white/40 font-mono text-xs"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="••••••••"
              className="w-full h-11 bg-white/[0.02] border border-white/20 text-white px-4 rounded-xl outline-none focus:border-white/40 font-mono text-xs"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-zinc-400 hover:text-white uppercase tracking-tighter"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-11 bg-white text-black font-bold rounded-xl uppercase tracking-widest text-xs transition-transform active:scale-[0.98] mt-2"
        >
          Sign In & Execute
        </button>
      </form>
    </div>
  );
}

export default function LoginPage() {
  return (
    <section className="w-full min-h-screen bg-[#09090b] flex items-center justify-center px-4 font-sans antialiased">
      <Suspense
        fallback={
          <div className="text-white font-mono text-xs animate-pulse">
            LOADING_SECURE_AUTH_MODULE...
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </section>
  );
}
