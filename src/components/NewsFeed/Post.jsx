import React from 'react';
import '../HomePage.css';

const PostActions = ({ likes, comments }) => (
    <div className="post-actions">
        <button className="action-button like">
            ❤️ {likes}
        </button>
        <button className="action-button">
            💬 {comments}
        </button>
        <button className="action-button">
            Share
        </button>
    </div>
);

const Post = ({ data }) => (
    <div className="post-card">
        <div className="post-header">
            <div className="avatar"></div>
            <strong className="author-name">{data.author}</strong>
        </div>
        <p className="post-content">{data.content}</p>
        <PostActions likes={data.likes} comments={data.comments} />
    </div>
);

export default Post;
