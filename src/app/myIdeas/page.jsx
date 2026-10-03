import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import IdeaCard from "@/components/Ideas/IdeaCard";
import MyIdeaCard from "@/components/Ideas/MyIdeaCard";
import Link from "next/link";
import { Lightbulb, Plus, Sparkles } from "lucide-react";

export const metadata = {
  title: "IdeaVault | MyIdeas",
  description: "Here my all ideas which shared",
};

const MyIdeasPage = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas`);
  const ideas = await res.json();
  const myIdeas = ideas.filter((idea) => idea.userId === user?.id);

  return (
    <div className="w-full bg-slate-100 dark:bg-[#0F172A] min-h-screen text-slate-900 dark:text-slate-100 py-10 px-4 sm:px-6 font-sans rounded-xl">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 text-xs font-semibold mb-3">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Personal Workspace</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-slate-200 dark:to-slate-400 tracking-tight">
              My Ideas
            </h1>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Manage and track all the startup concepts you have shared.
            </p>
          </div>

          <Link
            href="/addIdea"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-xl text-xs transition-all shadow-md active:scale-[0.99] w-fit"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Idea</span>
          </Link>
        </div>

        {/* Content Container */}
        <div>
          {myIdeas.length === 0 ? (
            <div className="flex min-h-[380px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 px-6 py-12 text-center shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                No Ideas Found
              </h3>

              <p className="mt-1.5 max-w-sm text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                It looks like you haven't published any startup concepts yet.
                Share your vision with the community today!
              </p>

              <Link
                href="/addIdea"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-slate-800 px-4 py-2.5 text-xs font-semibold text-white dark:text-slate-200 transition duration-200 hover:bg-slate-800 dark:hover:bg-slate-700 active:scale-95 shadow-md"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Your First Idea</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myIdeas.map((idea) => (
                <MyIdeaCard idea={idea} key={idea._id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyIdeasPage;
