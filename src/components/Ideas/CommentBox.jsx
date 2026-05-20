"use client";

import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import EditCommentModal from "./EditCommentModal";

const CommentBox = ({ comment }) => {
  const { data } = useSession();
  const user = data?.user;
  console.log(user);
  console.log(comment);
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-sky-50 to-white p-5 sm:p-6 shadow-xl shadow-sky-300/30">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-sky-200/40 via-transparent to-violet-100/30" />
      {comment?.userId === user?.id ? (
        <div className="dropdown dropdown-bottom dropdown-end absolute right-5 top-2">
          <div tabIndex={0} role="button" className="btn btn-circle">
            <BsThreeDots></BsThreeDots>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <EditCommentModal comment={comment}></EditCommentModal>
            </li>
            <li>
              <button className="btn bg-red-500 text-white">Delete</button>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
        <Image
          src={comment?.image}
          alt={comment?.name}
          width={56}
          height={56}
          className="h-14 w-14 rounded-full border-2 border-white bg-slate-100 object-cover shadow-sm shadow-slate-200/50"
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3 text-slate-900">
            <p className="text-lg font-semibold tracking-tight">
              {comment?.name}
            </p>
          </div>
          <div className="mt-4 rounded-3xl border border-slate-200 bg-white/90 p-4 text-sm leading-6 text-slate-700 shadow-sm shadow-slate-100">
            {comment?.text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
