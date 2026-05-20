"use client";

import { MessageSquare, Pencil, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSession } from "@/lib/auth-client";

export default function EditCommentModal({ comment }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [textLength, setTextLength] = useState(comment?.text?.length || 0);
  const [focusedField, setFocusedField] = useState(null);
  const { data } = useSession();
  const user = data?.user;

  // Check if current user is the comment owner
  const isCommentOwner = user?.id === comment?.userId;

  const handleEditNow = async (e) => {
    e.preventDefault();

    // Check ownership before allowing edit
    if (!isCommentOwner) {
      toast.error("You can only edit your own comments!");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const editedData = Object.fromEntries(formData);

    try {
      // Add your API call here
      const res = await fetch(`http://localhost:5000/comment/${comment._id}`, {
        method: "PATCH",
        headers: {
          "Content/type": "application/json",
        },
        body: JSON.stringify(editedData),
      });
      toast.success("Comment updated successfully!");
      document.getElementById("my_modal_5").close();
    } catch (error) {
      toast.error("Failed to update comment");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Open Modal Button - Only show if user is comment owner */}
      {isCommentOwner ? (
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 px-5 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          title="Edit your comment"
        >
          <Pencil size={18} />
          Edit Comment
        </button>
      ) : (
        <div
          className="flex items-center gap-2 rounded-xl bg-gray-300 px-5 py-3 font-semibold text-gray-600 shadow-lg cursor-not-allowed opacity-60"
          title="You can only edit your own comments"
        >
          <Pencil size={18} />
          Edit Comment
        </div>
      )}

      {/* Modal */}
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-3xl rounded-[28px] bg-gradient-to-br from-white to-slate-50 p-0 shadow-2xl overflow-hidden">
          {/* Header with Gradient Background */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-10 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white">
                  ✏️ Edit Comment
                </h3>
                <p className="mt-2 text-indigo-100">
                  Update your comment information
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => document.getElementById("my_modal_5").close()}
                className="rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 p-3 transition-all duration-300 text-white"
              >
                <X size={28} />
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleEditNow} className="space-y-6 px-8 py-8">
            {/* Comment */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-lg font-semibold text-slate-800">
                  💬 Comment
                </label>
                <span className="text-sm text-slate-500">
                  {textLength} character{textLength !== 1 ? "s" : ""}
                </span>
              </div>

              <div
                className={`flex rounded-2xl border-2 bg-white px-5 py-3 transition-all duration-300 ${
                  focusedField === "text"
                    ? "border-indigo-500 shadow-lg shadow-indigo-200"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <MessageSquare
                  className={`mt-3 transition-colors duration-300 flex-shrink-0 ${
                    focusedField === "text"
                      ? "text-indigo-500"
                      : "text-slate-400"
                  }`}
                  size={24}
                />

                <textarea
                  rows="6"
                  name="text"
                  defaultValue={comment?.text || ""}
                  placeholder="Write your comment..."
                  onFocus={() => setFocusedField("text")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => setTextLength(e.target.value.length)}
                  className="w-full resize-none bg-transparent px-4 py-2 text-lg outline-none text-slate-800 placeholder-slate-400"
                ></textarea>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-6 border-t border-slate-200">
              <button
                type="button"
                onClick={() => document.getElementById("my_modal_5").close()}
                className="rounded-xl border-2 border-slate-300 hover:border-slate-400 px-8 py-3 text-lg font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed px-10 py-3 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:hover:scale-100 flex items-center justify-center gap-2 min-w-[180px]"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Saving...
                  </>
                ) : (
                  <>
                    <span>💾</span>
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Backdrop */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
