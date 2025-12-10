import React from 'react';
import './PostFeed.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CreatePostPopup from './CreatePostPopup'; // <-- 🔴 Import is necessary
import socket from '../sockets/socket'; // ✅ Reuse shared socket
import { useEffect } from 'react';
import axios from 'axios';
import CommentBox from "./CommentBox"; // adjust the path if needed


const PostFeed = () => {
  const [showComments, setShowComments] = useState(false);
  const [posts, setPosts] = useState([
  {
    id: 1,
    type: 'image',
    content: 'Add some picture as post',
    likes:0
  },
  {
    id: 2,
    type: 'video',
    content: 'https://www.w3schools.com/html/mov_bbb.mp4',
     likes:0
  },
  {
    id: 3,
    type: 'text',
    content: 'This is a text-only post showing how content can scale.',
     likes:0
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
  socket.on("update_new_post", (newPost)=>{
  setPosts(prevPosts => [...prevPosts, newPost]);
  console.log("posts are here after updation :",posts)
  })
  socket.on("update_post_in_ui",(newData)=>{
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === newData.id 
          ? { ...post, ...newData }  // merge old post with new data
          : post                     // keep other posts as is
        )
       );
    });
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
  function likeAction(id)
  {
   socket.emit("update_post",id);
  }

  const handleCreatePost = async ({ text, media }) => {
    console.log('Post submitted:', text, media);
    var postToSend;

   if(!text){
    console.log("No text is there");
    postToSend = {
      type : (media.type).split('/')[0],
      content : media.content
    }
   }
   else{
     postToSend = {
      type : 'text',
      content : text
    }
   }
   socket.emit("new_post",postToSend);

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
              <button onClick={() => likeAction(post.id)}>{((post.likes))}❤️ Like</button>
              <button
                onClick={() => setShowComments(!showComments)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
              >
                {showComments ? "Hide Comments" : "Show Comments"}
              </button>
            {/* Comment box appears only when button is clicked */}
            {showComments && (
              <div className="mt-3">
                <CommentBox 
                  storageKey={`comments-post-${post.id}`}
                />
              </div>
            )}
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
         onSubmit={async ({ text, media }) => {
    await handleCreatePost({ text, media });
  }}
        />
      )}
    </div>
  );
};

export default PostFeed;
