import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

const CommentDisplay = ({ comment, post, replyCmt }) => {
  const [showReply, setShowReply] = useState([]);
  const [next, setNext] = useState(1);

  useEffect(() => {
    setShowReply(replyCmt.slice(replyCmt.length - next));
  }, [replyCmt, next]);
  return (
    <div className="comment_display">
      <CommentCard comment={comment} post={post} commentId={comment._id}>
        <div className="pl-4">
          {showReply.map(
            (item, index) =>
              item.reply && (
                <CommentCard
                  key={index}
                  comment={item}
                  post={post}
                  commentId={comment._id}
                />
              )
          )}

          {replyCmt.length - next > 0 ? (
            <div
              style={{ cursor: "pointer", fontWeight: 500 }}
              onClick={() => setNext(next + 10)}
            >
              View more replies...
            </div>
          ) : (
            replyCmt.length > 1 && (
              <div
                style={{ cursor: "pointer", fontWeight: 500 }}
                onClick={() => setNext(1)}
              >
                Hide replies...
              </div>
            )
          )}
        </div>
      </CommentCard>
    </div>
  );
};

export default CommentDisplay;
