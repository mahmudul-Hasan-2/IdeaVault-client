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
  console.log(user);
  console.log(comment);
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-sky-50 to-white p-5 sm:p-6 shadow-xl shadow-sky-300/30">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-sky-200/40 via-transparent to-violet-100/30" />
      {comment?.userId === user?.id ? (
        <div className="dropdown dropdown-bottom dropdown-end absolute right-5 top-2 z-10">
          <label
            tabIndex={0}
            className="btn btn-circle btn-ghost text-slate-700 hover:bg-slate-100"
          >
            <BsThreeDots size={18} />
          </label>
          <ul className="dropdown-content w-56 bg-white p-2 shadow-xl border border-slate-200 rounded-xl overflow-visible space-y-1">
            {" "}
            <li className="rounded-2xl bg-slate-50 hover:bg-slate-100">
              <div className="w-full">
                <EditCommentModal comment={comment} />
              </div>
            </li>
            <li className="rounded-2xl bg-slate-50 hover:bg-slate-100">
              <div className="w-full">
                <DeleteCommentModal comment={comment} />
              </div>
            </li>
          </ul>
        </div>
      ) : null}
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
