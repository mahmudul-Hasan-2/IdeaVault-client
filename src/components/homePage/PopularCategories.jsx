import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/popularCategories`,
  );
  const categories = await res.json();

  // 🎯 আইকন মিসিং বা ইনভ্যালিড থাকলে ব্যাকআপ প্লেসহোল্ডার আইকন
  const defaultIcon =
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3";

  return (
    <div className="space-y-10 py-10 px-4  mx-auto">
      {/* হেডার সেকশন */}
      <div className="space-y-2">
        <h2 className="text-3xl font-black tracking-tight ">
          Popular Categories
        </h2>
        <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium max-w-2xl">
          Find inspiration by exploring trending categories created by the
          community.
        </p>
      </div>

      {/* ক্যাটাগরি গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const isIconValid =
            category?.icon && category.icon.startsWith("http");
          const finalIconSrc = isIconValid ? category.icon : defaultIcon;

          return (
            <div
              key={category._id}
              className="group relative p-6 w-full rounded-2xl bg-base-200 border border-zinc-200 dark:border-zinc-900 shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 flex items-center gap-5 overflow-hidden"
            >
              {/* স্লিক ব্যাকগ্রাউন্ড গ্লো অন হোভার */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/[0.01] to-blue-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* আইকন কন্টেইনার */}
              <div className="relative w-16 h-16 rounded-xl bg-zinc-50 border border-zinc-100 dark:border-zinc-800/60 p-3 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110">
                <div className="relative w-full h-full">
                  <Image
                    src={finalIconSrc}
                    alt={category?.name || "Category"}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>

              {/* ক্যাটাগরি নেম */}
              <div className="z-10 min-w-0">
                <h3 className="text-lg font-bold  tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 truncate">
                  {category?.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;
