import React, { useEffect, useState } from "react";
import CommentDisplay from "./comments/CommentDisplay";

const Comments = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState([]);
  const [next, setNext] = useState(2);

  const [replyComments, setReplyComments] = useState([]);

  useEffect(() => {
    const newComment = post.comments.filter((comment) => !comment.reply);
    setComments(newComment);
    setShowComments(newComment.slice(newComment.length - next));
  }, [post.comments, next]);

  useEffect(() => {
    const newRep = post.comments.filter((comment) => comment.reply);
    setReplyComments(newRep);
  }, [post.comments]);

  return (
    <div className="comments">
      {showComments.map((comment) => (
        <CommentDisplay
          key={comment._id}
          comment={comment}
          post={post}
          replyCmt={replyComments.filter((item) => item.reply === comment._id)}
        />
      ))}

      {comments.length - next > 0 ? (
        <div
          className="p-2 border-top"
          style={{ cursor: "pointer", fontWeight: 500 }}
          onClick={() => setNext(next + 10)}
        >
          View more comments...
        </div>
      ) : (
        comments.length > 2 && (
          <div
            className="p-2 border-top"
            style={{ cursor: "pointer", fontWeight: 500 }}
            onClick={() => setNext(2)}
          >
            Hide comments...
          </div>
        )
      )}
    </div>
  );
};

export default Comments;
