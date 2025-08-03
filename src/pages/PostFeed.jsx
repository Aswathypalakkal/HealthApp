import React from 'react';
import './PostFeed.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CreatePostPopup from './CreatePostPopup'; // <-- 🔴 Import is necessary
import socket from '../sockets/socket'; // ✅ Reuse shared socket
import { useEffect } from 'react';
import axios from 'axios';


const PostFeed = () => {
  const [posts, setPosts] = useState([
  {
    id: 1,
    type: 'image',
    content: 'Add some picture as post'
  },
  {
    id: 2,
    type: 'video',
    content: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 3,
    type: 'text',
    content: 'This is a text-only post showing how content can scale.',
  },
]);

useEffect(() => {
  const onConnect = () => {
    console.log("✅ Socket connected:", socket.id);
    console.log("📤 Sent 'ctos' message from client");
  };
  if (socket.connected) {
    onConnect();
  }
  socket.on("connect", onConnect);
  return () => {
    socket.off("connect", onConnect);
  };
}, []);



const navigate = useNavigate();
const { isLoggedIn, user } = useSelector((state) => state.auth);

const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    console.log("popup should close ....")
    setShowPopup(false);
  };

  const handleCreatePost = async ({ text, media }) => {
    console.log('Post submitted:', text, media);
     socket.emit("new_post", text, media);

    try {
      await axios.post('http://localhost:5000/create-post', {
        text,
        media,
      });
      // No need to update state here — socket will handle it
    } catch (err) {
      console.error('Error posting:', err);
    }
  };
  return (
    <div className="feed-wrapper">
      <div className="post-scroll-area">
        {posts.map(post => (
        <div className="post-wrapper" key={post.id}>
              {/* Left side: Profile section */}
          <div className="post-header">
            <img src={user.profile} alt="Profile" className="profile-pic" />
            <span className="user-name">{user.name}</span>
          </div>
          <div className="post-card" key={post.id}>
            <div className="post-content">
              {post.type === 'image' && (
                <img src={post.content} alt="post" className="post-media" />
              )}
              {post.type === 'video' && (
                <video controls className="post-media">
                  <source src={post.content} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {post.type === 'text' && <p className="post-text">{post.content}</p>}
            </div>
            <div className="post-actions">
              <button>❤️ Like</button>
              <button>💬 Comment</button>
              <button>📤 Share</button>
            </div>
          </div>
          </div>
        ))}
      </div>

      <button className="add-post-btn" onClick={handleOpenPopup}>   
        <i className="fas fa-plus"></i>
      </button>
        {showPopup && (
        <CreatePostPopup
          onClose={handleClosePopup}
          onSubmit={handleCreatePost}
        />
      )}
    </div>
  );
};

export default PostFeed;
