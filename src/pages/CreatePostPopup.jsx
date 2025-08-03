import React, { useState } from 'react';


export default function CreatePostPopup({ onClose, onSubmit }) {
  const [text, setText] = useState('');
  const [media, setMedia] = useState(null);

  const handleSubmit = () => {
  console.log("handle submit called ..................")
    if (text || media) {
      console.log("onsubmit about to call")
      console.log("text"+text+"media"+media)
      onSubmit({ text, media });
      console.log("setText about to call")
      setText('');
      console.log("setMedia about to call")
      setMedia(null);
      console.log("onClose about to call")
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Create Post</h2>

        <textarea
          className="w-full border border-gray-300 rounded p-2 mb-4"
          rows="4"
          placeholder="Write something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="file"
          accept="image/*,video/*"
          className="mb-4"
          onChange={(e) => setMedia(e.target.files[0])}
        />

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
