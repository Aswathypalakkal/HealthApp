import React, { useEffect, useRef, useState } from "react";

// CommentBox.jsx
// A self-contained React component that provides:
// - a textarea to write a comment
// - a submit button
// - a visible list of comments
// - optional localStorage persistence (on by default)
// - small, clean Tailwind styling
export default function CommentBox({
  storageKey,
  placeholder,
 
}) {
  var persist = true;
  var maxLength = 500;
  var initialComments = []; // array of { id, text, createdAt }
  const [text, setText] = useState("");
  const [comments, setComments] = useState(initialComments);
  const [error, setError] = useState("");
  const textareaRef = useRef(null);
  const listEndRef = useRef(null);

  // load from localStorage if enabled
  useEffect(() => {
    if (!persist) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setComments(JSON.parse(raw));
    } catch (e) {
      // ignore parse errors
      console.warn("Failed to load comments from localStorage", e);
    }
  }, [storageKey, persist]);

  // persist when comments change
  useEffect(() => {
    if (!persist) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(comments));
    } catch (e) {
      console.warn("Failed to save comments to localStorage", e);
    }
  }, [comments, storageKey, persist]);

  // scroll to newest comment when list updates
  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [comments]);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const trimmed = text.trim();
    if (!trimmed) {
      setError("Comment can't be empty.");
      return;
    }
    if (trimmed.length > maxLength) {
      setError(`Comment must be at most ${maxLength} characters.`);
      return;
    }

    const newComment = {
      id: Date.now().toString(),
      text: trimmed,
      createdAt: new Date().toISOString(),
    };

    setComments((c) => [...c, newComment]);
    setText("");
    textareaRef.current?.focus();
  }

  function handleClearAll() {
    if (!confirm("Clear all comments? This cannot be undone.")) return;
    setComments([]);
  }

  function formatTime(iso) {
    const d = new Date(iso);
    return d.toLocaleString();
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-2xl shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-3">
        <label className="block text-sm font-medium">Leave a comment</label>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={4}
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-y"
        />

        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">{text.length}/{maxLength}</div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setText("")}
              className="px-3 py-1 rounded-lg text-sm border"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg text-sm bg-blue-600 text-white disabled:opacity-60"
              disabled={text.trim().length === 0}
            >
              Post
            </button>
          </div>
        </div>

        {error && <div className="text-sm text-red-600">{error}</div>}
      </form>

      <hr className="my-4" />

      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">Comments ({comments.length})</h3>
        <div className="text-sm text-gray-500">Newest last</div>
      </div>

      <div className="space-y-3 max-h-72 overflow-auto pr-2">
        {comments.length === 0 ? (
          <div className="text-sm text-gray-500">No comments yet. Be the first!</div>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="border rounded-lg p-3 bg-gray-50">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="text-sm whitespace-pre-wrap">{c.text}</div>
                  <div className="text-xs text-gray-400 mt-2">{formatTime(c.createdAt)}</div>
                </div>
              </div>
            </div>
          ))
        )}
        <div ref={listEndRef} />
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={handleClearAll}
          className="text-sm px-3 py-1 border rounded-lg"
          type="button"
        >
          Clear all
        </button>
      </div>
    </div>
  );
}
