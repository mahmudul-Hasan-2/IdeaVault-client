"use client";

import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditCommentModal from "./EditCommentModal";
import DeleteCommentModal from "./DeleteCommentModal";

const CommentBox = ({ comment }) => {
  const { data } = useSession();
  const user = data?.user;

  // মোডাল ওপেন/ক্লোজ স্টেট
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const defaultAvatar =
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb";
  const isImageValid = comment?.image && comment.image.startsWith("http");
  const finalAvatarSrc = isImageValid ? comment.image : defaultAvatar;

  return (
    <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950 p-5 sm:p-6 shadow-sm transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-800">
      {/* টপ গ্রাডিয়েন্ট গ্লো ইফেক্ট */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 rounded-t-2xl" />

      {/* অ্যাকশন ড্রপডাউন (থ্রি-ডটস) */}
      {comment?.userId === user?.id && (
        <details className="dropdown dropdown-end absolute right-4 top-4 z-20">
          <summary className="btn btn-sm btn-circle btn-ghost text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 list-none cursor-pointer">
            <BsThreeDots size={18} />
          </summary>

          {/* ড্রপডাউন মেনু */}
          <ul className="dropdown-content menu w-72 rounded-2xl bg-white dark:bg-zinc-900 p-3 shadow-2xl border border-zinc-200 dark:border-zinc-800 gap-2.5 mt-2">
            {/* Edit Button */}
            <li className="w-full">
              <EditCommentModal
                comment={comment}
                isOpen={isEditOpen}
                setIsOpen={setIsEditOpen}
              />
            </li>

            {/* Delete Button */}
            <li className="w-full">
              <DeleteCommentModal
                comment={comment}
                isOpen={isDeleteOpen}
                setIsOpen={isDeleteOpen}
              />
            </li>
          </ul>
        </details>
      )}

      {/* মেইন কন্টেন্ট লেআউট */}
      <div className="relative flex gap-4">
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

        <div className="flex-1 min-w-0 space-y-1">
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

          <div className="mt-1.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 px-4 py-3 border border-zinc-100 dark:border-zinc-900/40">
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 break-words whitespace-pre-wrap">
              {comment?.text}
            </p>
          </div>
        </div>
      </div>

      {/* মোডাল কম্পোনেন্টগুলো এখানে রেন্ডার করা হলো */}
    </div>
  );
};

export default CommentBox;
