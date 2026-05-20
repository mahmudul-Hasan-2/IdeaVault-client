"use client";

import { Trash2, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession } from "@/lib/auth-client";

const DeleteCommentModal = ({ comment }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { data } = useSession();
  const user = data?.user;
  const router = useRouter();
  const isCommentOwner = user?.id === comment?.userId;

  const handleDelete = async () => {
    if (!isCommentOwner) {
      toast.error("You can only delete your own comment.");
      return;
    }

    setIsDeleting(true);
    try {
      const res = await fetch(`http://localhost:5000/comment/${comment._id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Delete request failed");
      }

      toast.success("Comment deleted successfully.");
      document.getElementById("delete_comment_modal").close();
      router.refresh();
    } catch (error) {
      toast.error("Failed to delete comment.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      {isCommentOwner ? (
        <button
          onClick={() =>
            document.getElementById("delete_comment_modal").showModal()
          }
          className="flex items-center w-full gap-2 mb-3 rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-red-600"
        >
          <Trash2 size={16} />
          Delete
        </button>
      ) : (
        <button
          disabled
          className="flex items-center gap-2 rounded-xl bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-500 shadow-sm cursor-not-allowed"
          title="You can only delete your own comments"
        >
          <Trash2 size={16} />
          Delete
        </button>
      )}

      <dialog id="delete_comment_modal" className="modal">
        <div className="modal-box max-w-md rounded-[28px] bg-white p-6 shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Delete Comment
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                Are you sure you want to delete this comment?
              </h2>
            </div>
            <button
              type="button"
              onClick={() =>
                document.getElementById("delete_comment_modal").close()
              }
              className="rounded-full bg-slate-100 p-3 text-slate-600 transition hover:bg-slate-200"
            >
              <X size={20} />
            </button>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-600">
            This action cannot be undone. The comment will be removed
            permanently from the idea thread.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() =>
                document.getElementById("delete_comment_modal").close()
              }
              className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleDelete}
              disabled={isDeleting}
              className="rounded-2xl bg-gradient-to-r from-red-500 to-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed hover:from-red-600 hover:to-rose-600"
            >
              {isDeleting ? "Deleting..." : "Delete Comment"}
            </button>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default DeleteCommentModal;
