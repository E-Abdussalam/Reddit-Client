import React, { useState } from "react";
import "./Post.css";
import Card from "../../components/Card/Card";
import Comment from "../Comment/Comment";
import redditSlice from "../../store/redditSlice";
import Avatar from "../Avatar/Avatar";

const Post = (props) => {
  const { post, onToggleComments } = props;

  const renderComments = () => {
    if (!post.showingComments) {
      return (
        <div>
          <h3>Error Loading comments</h3>
        </div>
      );
    }
    if (post.showingComments) {
      return (
        <div>
          {post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }
  };
  return (
    <article key={post.id}>
      <Card>
        <div className="post-wrapper">
          <div className="post-container">
            <h3>{post.title}</h3>
            <div className="post-image-container">
              <img src={post.url} alt={post.title} className="post-image" />
            </div>
            <div className="post-details">
              <span className="author-details">
                <Avatar name={post.author} />
                <span className="author-username">{post.author}</span>
              </span>
              <span>{post.created_utc}</span>
              <span className="post-comments-container">
                <button
                  type="button"
                  className={`icon-action-button ${
                    post.showingComments && "showing-comments"
                  }`}
                  onClick={() => onToggleComments(post.permalink)}
                  aria-label="Show comments"
                >
                  Click Here!
                </button>
                {post.num_comments}
              </span>
            </div>
            {renderComments()}
          </div>
        </div>
      </Card>
    </article>
  );
};

export default Post;
