import Image from "next/image";
import React from "react";

const TopCreator = () => {
  const topCreators = [
    {
      id: 1,
      name: "Alex Johnson",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      totalIdeas: 24,
    },
    {
      id: 2,
      name: "Sophia Lee",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      totalIdeas: 18,
    },
    {
      id: 3,
      name: "Michael Brown",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      totalIdeas: 31,
    },
  ];

  return (
    <div className="space-y-10 px-4 ">
      {/* হেডার সেকশন */}
      <div className="space-y-2">
        <h2 className="text-3xl font-black tracking-tight ">Top Creators</h2>
        <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium max-w-2xl">
          Meet talented creators sharing innovative ideas and inspiring projects
          from around the world.
        </p>
      </div>

      {/* ক্রিয়েটর গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topCreators.map((topCreator) => (
          <div
            key={topCreator?.id}
            className="group relative py-8 px-6 flex flex-col items-center justify-center rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 shadow-sm hover:shadow-xl dark:shadow-none hover:-translate-y-2 duration-300 gap-4"
          >
            {/* টপ গ্লো ইফেক্ট (কার্ডকে প্রিমিয়াম লুক দিতে) */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 rounded-t-2xl" />

            {/* ক্রিয়েটর অ্যাভাটার ইমেজ */}
            <div className="relative w-28 h-28 rounded-full ring-4 ring-zinc-100 dark:ring-zinc-900 bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-inner transition-transform duration-500 group-hover:scale-105">
              <Image
                src={topCreator?.image}
                alt={topCreator?.name || "Creator"}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* ক্রিয়েটর ডিটেইলস */}
            <div className="text-center space-y-2 z-10">
              <h3 className="text-xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
                {topCreator?.name}
              </h3>

              {/* আইডিয়া কাউন্ট ব্যাজ */}
              <div className="inline-block">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide px-3 py-1 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-full border border-blue-100/50 dark:border-blue-950/20">
                  💡 {topCreator?.totalIdeas} Ideas
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCreator;
