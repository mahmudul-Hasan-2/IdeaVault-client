import CommentBox from "@/components/Ideas/CommentBox";
import CommentInput from "@/components/Ideas/CommentInput";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const IdeaDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/idea/${id}`);
  const idea = await res.json();
  console.log(idea);

  const commentRes = await fetch(`http://localhost:5000/comments`);
  const allComments = await commentRes.json();
  console.log(allComments);
  const comments = allComments.filter((comment) => comment.ideaId === idea._id);
  console.log(comments);

  console.log(idea);
  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="space-y-4 px-2 bg-background/20">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={idea?.image || "/"}
            alt={idea?.name}
            width={1200}
            height={700}
            className="w-full h-[450px] object-cover hover:scale-105 duration-300"
          />
        </div>

        <div className="space-y-3">
          <span className="badge badge-soft badge-primary">
            {idea?.category}
          </span>
          <h2 className="text-3xl font-bold ">{idea?.name}</h2>
          <span className="text-base font-bold">
            {idea?.tags?.map((tag, index) => (
              <div key={index} className="inline-block  mb-3">
                <span className="badge badge-primary ml-2">{tag}</span>
                {index !== idea.tags.length - 1 && " | "}
              </div>
            ))}
          </span>
          <p className="break-words whitespace-pre-wrap text-slate-700">
            {idea.detailedDescription}
          </p>
          <div className="space-y-6 pt-4 border-t border-gray-300">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="font-semibold text-gray-500">
                  Estimated Budget
                </span>
                <span>{idea.estimatedBudget}</span>
              </div>

              <div className="flex flex-col">
                <span className="font-semibold text-gray-500">Audience</span>
                <span>{idea.targetAudience}</span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-semibold text-gray-500">
                Problem Statement
              </span>

              <p className="text-gray-700 leading-relaxed">
                {idea.problemStatement}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-semibold text-gray-500">
                Proposed Solution
              </span>

              <p className="text-gray-700 leading-relaxed">
                {idea.proposedSolution}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CommentInput idea={idea}></CommentInput>
      </div>
      <div className="space-y-4 mt-5">
        <div>
          <h2 className="text-3xl font-bold">Comments</h2>
        </div>
        <div className="space-y-4">
          {comments.map((comment) => (
            <CommentBox comment={comment} key={comment._id}></CommentBox>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdeaDetailsPage;
