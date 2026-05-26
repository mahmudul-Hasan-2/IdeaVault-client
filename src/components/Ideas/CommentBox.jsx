"use client";

import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import EditCommentModal from "./EditCommentModal";
import DeleteCommentModal from "./DeleteCommentModal";

const CommentBox = ({ comment }) => {
  const { data } = useSession();
  const user = data?.user;

  // 🎯 কমেন্ট ইউজারের ইমেজ ইনভ্যালিড বা খালি থাকলে ব্যাকআপ অবতার
  const defaultAvatar =
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb";
  const isImageValid = comment?.image && comment.image.startsWith("http");
  const finalAvatarSrc = isImageValid ? comment.image : defaultAvatar;

  return (
    <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950 p-5 sm:p-6 shadow-sm transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-800">
      {/* টপ গ্রাডিয়েন্ট গ্লো ইফেক্ট (লাইট/ডার্ক থিম ফ্রেন্ডলি) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 rounded-t-2xl" />

      {/* অ্যাকশন ড্রপডাউন (থ্রি-ডটস) */}
      {/* অ্যাকশন ড্রপডাউন (থ্রি-ডটস) */}
      {/* অ্যাকশন ড্রপডাউন (থ্রি-ডটস) */}
      {comment?.userId === user?.id && (
        <div className="dropdown dropdown-end absolute right-4 top-4 z-20">
          <label
            tabIndex={0}
            className="btn btn-sm btn-circle btn-ghost text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            <BsThreeDots size={18} />
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content menu w-56 rounded-xl bg-white dark:bg-zinc-900 p-2 shadow-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 gap-1"
          >
            {/* 🎯 [FIX] li-তে ইম্পর্ট্যান্টলি 'flex flex-col' এবং মোডাল কন্টেইনারে 'w-full block' দেওয়া হয়েছে */}
            <li className="hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg overflow-hidden transition-colors flex flex-col">
              <div className="w-full block p-0 bg-transparent active:bg-transparent hover:bg-transparent">
                <EditCommentModal comment={comment} />
              </div>
            </li>

            <li className="hover:bg-red-50 dark:hover:bg-red-950/30 text-red-600 rounded-lg overflow-hidden transition-colors flex flex-col">
              <div className="w-full block p-0 bg-transparent active:bg-transparent hover:bg-transparent text-red-600">
                <DeleteCommentModal comment={comment} />
              </div>
            </li>
          </ul>
        </div>
      )}

      {/* মেইন কন্টেন্ট লেআউট */}
      <div className="relative flex gap-4">
        {/* ইউজার অ্যাভাটার */}
        <div className="avatar self-start">
          <div className="w-11 h-11 rounded-full ring-2 ring-zinc-200 dark:ring-zinc-800 ring-offset-2 bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative">
            <Image
              src={finalAvatarSrc}
              alt={comment?.name || "User"}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* টেক্সট এরিয়া */}
        <div className="flex-1 min-w-0 space-y-1">
          {/* ইউজার নেম ও ডেট স্ট্যাম্প */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2.5">
            <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              {comment?.name || "Anonymous User"}
            </h2>

            <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
              {comment?.createdAt
                ? new Date(comment.createdAt).toLocaleString("en-BD", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })
                : "Just now"}
            </span>
          </div>

          {/* কমেন্ট টেক্সট বাবল */}
          <div className="mt-1.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 px-4 py-3 border border-zinc-100 dark:border-zinc-900/40">
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 break-words whitespace-pre-wrap">
              {comment?.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
