"use client";

import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

const InteractionCard = ({ comment }) => {
  const { data } = useSession();
  const user = data?.user;

  // 🎯 অবতার ইমেজ মিসিং বা ইনভ্যালিড থাকলে ব্যাকআপ প্লেসহোল্ডার
  const defaultAvatar =
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb";
  const isImageValid = comment?.image && comment.image.startsWith("http");
  const finalAvatarSrc = isImageValid ? comment.image : defaultAvatar;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950 p-5 sm:p-6 shadow-sm transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-800">
      {/* স্লিক টপ গ্লো ইফেক্ট */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 rounded-t-2xl" />

      {/* মেইন লেআউট কন্টেইনার */}
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start">
        {/* ইউজার ইমেজ / অ্যাভাটার */}
        <div className="relative w-12 h-12 rounded-full ring-2 ring-zinc-200 dark:ring-zinc-800 ring-offset-2 bg-zinc-100 dark:bg-zinc-900 overflow-hidden shrink-0">
          <Image
            src={finalAvatarSrc}
            alt={comment?.name || "User"}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* টেক্সট ও কন্টেন্ট এরিয়া */}
        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex items-center justify-between text-zinc-900 dark:text-zinc-100">
            <p className="text-sm font-bold tracking-tight">
              {comment?.name || "Anonymous User"}
            </p>
          </div>

          {/* ইন্টারঅ্যাকশন / কমেন্ট টেক্সট বাবল */}
          <div className="mt-2 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 px-4 py-3 border border-zinc-100 dark:border-zinc-900/40 shadow-sm shadow-zinc-100/10 dark:shadow-none">
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 break-words whitespace-pre-wrap">
              {comment?.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractionCard;
