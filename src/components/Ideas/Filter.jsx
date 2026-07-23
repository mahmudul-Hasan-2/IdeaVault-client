"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Filter = ({ categories }) => {
  const router = useRouter();

  const handleFiltering = (value) => {
    // আগের ফাংশনালিটি অপরিবর্তিত রাখা হয়েছে
    router.push(`/ideas?search=${value}`);
  };

  return (
    <div className="w-full  relative group">
      {/* চারপাশের হালকা গ্লো ইফেক্ট (সার্চ বক্সের সাথে মিল রেখে) */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-10 group-hover:opacity-25 transition duration-300" />

      <div className="relative">
        <select
          defaultValue="Filter by category"
          onChange={(e) => handleFiltering(e.target.value)}
          className="w-full h-[48px] px-4 bg-[#1a1a1e] text-zinc-300 placeholder:text-zinc-500 text-sm font-medium rounded-xl border border-zinc-800/80 focus:border-indigo-500/80 focus:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/10 transition-all duration-200 shadow-inner appearance-none cursor-pointer"
        >
          <option disabled value="Filter by category">
            Filter by category
          </option>
          {categories &&
            categories.map((category) => (
              <option
                key={category._id}
                value={category.name}
                className="bg-[#121214] text-zinc-300 py-2"
              >
                {category.name}
              </option>
            ))}
        </select>

        {/* ড্রপডাউনের জন্য একটি কাস্টম মডার্ন অ্যারো (Arrow) আইকন */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 group-hover:text-zinc-400 transition-colors">
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Filter;
