import Image from "next/image";
import React from "react";
import EditIdeaModal from "./EditIdea";
import DeleteIdeaModal from "./DeleteIdea";

const MyIdeaCard = ({ idea }) => {
  const defaultPlaceholder =
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3";

  const isImageValid = idea?.image && idea.image.startsWith("http");
  const finalImage = isImageValid ? idea.image : defaultPlaceholder;

  return (
    <div className="group rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none hover:-translate-y-2 duration-300 flex flex-col justify-between">
      {/* 🎯 Next.js <Image> উইথ fill */}
      <div className="relative w-full h-56 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={finalImage}
          alt={idea?.name || "Idea Image"}
          fill
          className="object-cover group-hover:scale-105 duration-500"
          unoptimized
        />
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div>
            <span className="inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-xl">
              {idea?.category}
            </span>
          </div>
          <h2 className="text-xl font-black text-zinc-900 dark:text-zinc-100 line-clamp-1">
            {idea?.name}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed font-medium">
            {idea?.shortDescription}
          </p>
        </div>

        <div className="space-y-4 pt-3 border-t border-zinc-100 dark:border-zinc-900">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
              Est. Budget
            </span>
            <span className="text-sm font-extrabold text-zinc-800 dark:text-zinc-200">
              {idea?.estimatedBudget ? `$${idea.estimatedBudget}` : "Flexible"}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full pt-1">
            <div className="flex-1">
              <EditIdeaModal idea={idea} />
            </div>
            <div className="flex-1">
              <DeleteIdeaModal idea={idea} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyIdeaCard;
