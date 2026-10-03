"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Lightbulb, Sparkles, Loader2 } from "lucide-react";

export default function AddIdea() {
  const { data } = useSession();
  const user = data?.user;
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleAddNow = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const info = Object.fromEntries(formData.entries());

      const ideaData = {
        name: info?.name,
        category: info?.category,
        shortDescription: info?.shortDescription,
        detailedDescription: info?.detailedDescription,
        tags:
          typeof info?.tags === "string"
            ? info.tags.split(",").map((tag) => tag.trim())
            : [],
        image: info?.image,
        estimatedBudget: info?.estimatedBudget,
        targetAudience: info?.targetAudience,
        problemStatement: info?.problemStatement,
        proposedSolution: info?.proposedSolution,
        userImage: user?.image || "",
        userName: user?.name || "Anonymous",
        userId: user?.id || "",
        createdAt: new Date().toISOString(),
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ideaData),
      });

      const dataJson = await res.json();

      if (res.ok && dataJson?.insertedId) {
        toast.success("Idea published successfully!");
        router.push("/ideas");
        router.refresh();
      } else {
        toast.error(dataJson?.message || "Failed to publish idea.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("An error occurred while publishing.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full mt-2 px-4 py-2.5 bg-slate-50 dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-cyan-400 text-xs transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600";
  const labelStyle =
    "text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400";

  return (
    <div className="w-full bg-slate-100 dark:bg-[#0F172A] min-h-screen text-slate-900 dark:text-slate-100 py-10 px-4 sm:px-6 font-sans rounded-xl">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 text-xs font-semibold mb-3">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Innovation Hub</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-slate-200 dark:to-slate-400 tracking-tight">
            Submit Your Startup Concept
          </h1>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            Share your startup concept with the community and gather valuable
            feedback.
          </p>
        </div>

        {/* Main Form Card */}
        <form
          onSubmit={handleAddNow}
          className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-5 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelStyle}>Idea Name *</label>
              <input
                type="text"
                name="name"
                className={inputStyle}
                placeholder="e.g. EduBot AI"
                required
              />
            </div>
            <div>
              <label className={labelStyle}>Category *</label>
              <select
                defaultValue=""
                name="category"
                className={`${inputStyle} cursor-pointer`}
                required
              >
                <option value="" disabled className="dark:bg-[#0F172A]">
                  Select Category
                </option>
                <option value="Startup" className="dark:bg-[#0F172A]">
                  Startup
                </option>
                <option value="Productivity" className="dark:bg-[#0F172A]">
                  Productivity
                </option>
                <option value="Education" className="dark:bg-[#0F172A]">
                  Education
                </option>
                <option value="AI Tools" className="dark:bg-[#0F172A]">
                  AI Tools
                </option>
                <option value="AI Education" className="dark:bg-[#0F172A]">
                  AI Education
                </option>
                <option value="Marketplace" className="dark:bg-[#0F172A]">
                  Marketplace
                </option>
                <option value="Health" className="dark:bg-[#0F172A]">
                  Health
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelStyle}>Short Description *</label>
            <input
              required
              type="text"
              name="shortDescription"
              className={inputStyle}
              placeholder="A punchy tag line summarizing your concept (max 100 chars)"
            />
          </div>

          <div>
            <label className={labelStyle}>Detailed Description *</label>
            <textarea
              required
              name="detailedDescription"
              rows={4}
              className={`${inputStyle} resize-none`}
              placeholder="Provide a comprehensive breakdown of your system features, workflow, and vision..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelStyle}>Tags (Comma Separated)</label>
              <input
                type="text"
                name="tags"
                className={inputStyle}
                placeholder="e.g. ai, tech, saas"
              />
            </div>
            <div>
              <label className={labelStyle}>Cover Image URL *</label>
              <input
                required
                type="url"
                name="image"
                className={inputStyle}
                placeholder="https://example.com/cover-image.jpg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelStyle}>Estimated Budget (USD)</label>
              <input
                type="text"
                name="estimatedBudget"
                className={inputStyle}
                placeholder="e.g. 5000"
              />
            </div>
            <div>
              <label className={labelStyle}>Target Audience *</label>
              <input
                required
                type="text"
                name="targetAudience"
                className={inputStyle}
                placeholder="e.g. College Students, Developers"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelStyle}>Problem Statement *</label>
              <textarea
                required
                name="problemStatement"
                rows={3}
                className={`${inputStyle} resize-none`}
                placeholder="What core issue are you attempting to solve?"
              />
            </div>
            <div>
              <label className={labelStyle}>Proposed Solution *</label>
              <textarea
                required
                name="proposedSolution"
                rows={3}
                className={`${inputStyle} resize-none`}
                placeholder="How does your platform solve this problem?"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-semibold rounded-xl transition-all text-xs shadow-md active:scale-[0.99] flex justify-center items-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Publishing Idea...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Publish Idea Now</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
