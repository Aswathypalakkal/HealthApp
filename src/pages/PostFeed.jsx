import React from 'react';
import './PostFeed.css';

// Example posts with different content types
const posts = [
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
];

const PostFeed = () => {
  return (
    <div className="feed-wrapper">
      <div className="post-scroll-area">
        {posts.map(post => (
        <div className="post-wrapper" key={post.id}>
              {/* Left side: Profile section */}
          <div className="post-header">
            <img src="https://i.pravatar.cc/150?img=3" alt="Profile" className="profile-pic" />
            <span className="user-name">Aswathy</span>
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

      <button className="add-post-btn">
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default PostFeed;
