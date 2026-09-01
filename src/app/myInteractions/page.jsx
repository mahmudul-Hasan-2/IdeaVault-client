import InteractionCard from "@/components/Ideas/InteractionCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "IdeaVault | My Interactions",
  description: "Here are all the interactions you have made",
};

const MyInteractionsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login"); // or your login route
  }

  const { user } = session;

  let comments = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/comments?userId=${user.id}`,
      {
        headers: {
          Cookie: (await headers()).get("cookie") || "",
        },
        cache: "no-store",
      }
    );

    if (res.ok) {
      comments = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch interactions:", error);
  }

  return (
    <div className="px-2">
      <h2 className="text-3xl font-bold mb-5">My Interactions</h2>

      {comments.length === 0 ? (
        <div className="flex min-h-[350px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/10 px-6 py-10 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900/40 border border-zinc-800/80 text-2xl text-zinc-400">
            ⚡
          </div>
          <h3 className="mt-5 text-lg font-semibold tracking-tight">
            No Interactions Yet
          </h3>
          <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-zinc-500">
            You haven&apos;t interacted with any ideas yet. Start engaging!
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
  );
};

export default MyInteractionsPage;
