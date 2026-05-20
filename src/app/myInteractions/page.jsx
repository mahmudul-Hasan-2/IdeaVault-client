import CommentBox from "@/components/Ideas/CommentBox";
import InteractionCard from "@/components/Ideas/InteractionCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const MyInteractionsPage = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });
  const res = await fetch("http://localhost:5000/comments");
  const allComments = await res.json();
  const comments = allComments.filter((comment) => comment.userId === user.id);

  return (
    <div className="px-2">
      <h2 className="text-3xl font-bold mb-5">My Interactions</h2>

      <div className="space-y-4 mx-auto ">
        {comments.map((comment) => (
          <InteractionCard comment={comment}></InteractionCard>
        ))}
      </div>
    </div>
  );
};

export default MyInteractionsPage;
