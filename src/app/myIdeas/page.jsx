import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const MyIdeasPage = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });
  const res = await fetch("http://localhost:5000/ideas");
  const ideas = await res.json();
  const myIdeas = ideas.filter((idea) => idea.userId === user?.id);
  console.log(myIdeas);
  return <div></div>;
};

export default MyIdeasPage;
