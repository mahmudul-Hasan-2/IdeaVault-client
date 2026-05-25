"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const AddIdea = () => {
  const { data } = useSession();
  const user = data?.user;
  const router = useRouter();

  const handleAddNow = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const info = Object.fromEntries(formData.entries());

    const ideaData = {
      name: info?.name,
      category: info?.category,
      shortDescription: info?.shortDescription,
      detailedDescription: info?.detailedDescription,
      tags: info?.tags ? info.tags.split(",").map((tag) => tag.trim()) : [],
      image: info?.image,
      estimatedBudget: info?.estimatedBudget,
      targetAudience: info?.targetAudience,
      problemStatement: info?.problemStatement,
      proposedSolution: info?.proposedSolution,
      userImage: user?.image || "",
      userName: user?.name || "Anonymous",
      userId: user?.id || "",
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ideaData),
    });
    const dataJson = await res.json();

    if (dataJson?.insertedId) {
      toast.success("Idea added successfully 🚀");
      router.push("/ideas");
    } else {
      toast.error("Failed to add idea ❌");
    }
  };

  // 🎯 লাইট মোডে একদম ক্রিস্পি রিডেবিলিটির জন্য ইনপুট স্টাইল ওভাররাইট করলাম
  const inputStyle =
    "w-full mt-2 px-4 py-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 placeholder-zinc-400 dark:placeholder-zinc-500 shadow-sm";
  const labelStyle =
    "text-sm font-bold tracking-wide text-zinc-800 dark:text-zinc-300";

  return (
    <div className="max-w-4xl mx-auto py-2 px-4 md:px-6">
      {/* হেডার সেকশন - টেক্সট কালার একদম সলিড ব্ল্যাক/হোয়াইট */}
      <div className="space-y-2 mb-8 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">
          Add Your Idea 💡
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base font-medium">
          Share your startup concept with the world and get valuable feedback.
        </p>
      </div>

      {/* 🎯 মেইন কার্ড - জোর করে bg-white দেওয়া হয়েছে যেন গ্লোবাল গ্রে ব্যাকগ্রাউন্ড কেটে যায় */}
      <form
        onSubmit={handleAddNow}
        className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-2xl p-6 md:p-10 space-y-6 shadow-xl shadow-zinc-200/60 dark:shadow-none"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelStyle}>Idea Name</label>
            <input
              type="text"
              name="name"
              className={inputStyle}
              placeholder="e.g. EduBot AI"
              required
            />
          </div>
          <div>
            <label className="text-sm font-bold tracking-wide text-zinc-800 dark:text-zinc-300">
              Category
            </label>
            {/* 🎯 DaisyUI Select Dropdown */}
            <select
              defaultValue="Category"
              name="category"
              className="select select-bordered w-full mt-2 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              required
            >
              <option disabled value="Category">
                Choose a Category
              </option>
              <option value="Startup">Startup</option>
              <option value="Productivity">Productivity</option>
              <option value="Education">Education</option>
              <option value="AI Tools">AI Tools</option>
              <option value="AI Education">AI Education</option>
              <option value="Marketplace">Marketplace</option>
              <option value="Health">Health</option>
            </select>
          </div>
        </div>

        <div>
          <label className={labelStyle}>Idea Short Description</label>
          <input
            required
            type="text"
            name="shortDescription"
            className={inputStyle}
            placeholder="A catch line that defines your project in seconds"
          />
        </div>

        <div>
          <label className={labelStyle}>Idea Detailed Description</label>
          <textarea
            required
            name="detailedDescription"
            className={`${inputStyle} h-36 pt-3 resize-none`}
            placeholder="Deep dive into your system features, workflow, and vision..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelStyle}>Idea Tags</label>
            <input
              type="text"
              name="tags"
              className={inputStyle}
              placeholder="ai, tech, saas (comma separated)"
            />
          </div>
          <div>
            <label className={labelStyle}>Image URL</label>
            <input
              required
              type="text"
              name="image"
              className={inputStyle}
              placeholder="https://unsplash.com/your-cover-image"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelStyle}>Estimated Budget ($)</label>
            <input
              type="text"
              name="estimatedBudget"
              className={inputStyle}
              placeholder="e.g. 5000"
            />
          </div>
          <div>
            <label className={labelStyle}>Target Audience</label>
            <input
              required
              type="text"
              name="targetAudience"
              className={inputStyle}
              placeholder="e.g. College Students, Developers"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelStyle}>Problem Statement</label>
            <textarea
              required
              name="problemStatement"
              className={`${inputStyle} h-36 pt-3 resize-none`}
              placeholder="What core issue are you trying to solve?"
            />
          </div>
          <div>
            <label className={labelStyle}>Proposed Solution</label>
            <textarea
              required
              name="proposedSolution"
              className={`${inputStyle} h-36 pt-3 resize-none`}
              placeholder="How does your concept solve this specific problem?"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-4 text-white font-bold bg-blue-600 hover:bg-blue-500 active:scale-[0.99] rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/20 text-base tracking-wide"
        >
          Publish Idea Now
        </button>
      </form>
    </div>
  );
};

export default AddIdea;
