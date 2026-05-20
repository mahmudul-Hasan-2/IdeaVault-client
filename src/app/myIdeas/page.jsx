import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import IdeaCard from "@/components/Ideas/IdeaCard";

const MyIdeasPage = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });
  const res = await fetch("http://localhost:5000/ideas");
  const ideas = await res.json();
  const myIdeas = ideas.filter((idea) => idea.userId === user?.id);
  return (
    <div className="mt-10 px-2">
      <h2 className="text-3xl font-bold mb-5">My Ideas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {myIdeas.map((idea) => (
          <IdeaCard idea={idea} key={idea._id}></IdeaCard>
        ))}
      </div>
    </div>
  );
};

export default MyIdeasPage;
