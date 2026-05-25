"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Input = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  useEffect(() => {
    router.push(`/ideas?search=${searchText}`);
  }, [searchText, router]);

  return (
    <div className="w-full  relative group">
      {/* ইনপুটের চারপাশের মডার্ন গ্লো ইফেক্ট */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-15 group-hover:opacity-30 transition duration-300" />

      <div className="relative flex items-center">
        {/* বাম পাশের সার্চ আইকন */}
        <div className="absolute left-4 text-zinc-500 group-hover:text-zinc-400 transition-colors pointer-events-none">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* মডার্ন পলিশড ইনপুট বক্স */}
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="w-full pl-11 pr-4 py-3 bg-[#1a1a1e] text-white placeholder:text-zinc-500 text-sm font-medium rounded-xl border border-zinc-800/80 focus:border-indigo-500/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 transition-all duration-200 shadow-inner"
          placeholder="Search Idea..."
        />
      </div>
    </div>
  );
};

export default Input;
