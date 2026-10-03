import InteractionCard from "@/components/Ideas/InteractionCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import { MessageSquare, Sparkles } from "lucide-react";

export const metadata = {
  title: "IdeaVault | MyInteractions",
  description: "Here my all interaction which I did",
};

const MyInteractionsPage = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments`);
  const allComments = await res.json();
  const comments = allComments.filter((comment) => comment.userId === user?.id);

  return (
    <div className="w-full bg-slate-100 dark:bg-[#0F172A] min-h-screen text-slate-900 dark:text-slate-100 py-10 px-4 sm:px-6 font-sans rounded-xl">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 text-xs font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Activity Log</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-slate-200 dark:to-slate-400 tracking-tight">
            My Interactions
          </h1>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            View and manage all the comments and feedback you have posted.
          </p>
        </div>

        {/* Content Section */}
        <div>
          {comments.length === 0 ? (
            <div className="flex min-h-[380px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 px-6 py-12 text-center shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                No Interactions Yet
              </h3>

              <p className="mt-1.5 max-w-sm text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                There is no activity or interaction recorded yet. Start engaging
                with ideas across the platform!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {comments.map((comment) => (
                <InteractionCard key={comment._id} comment={comment} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyInteractionsPage;
