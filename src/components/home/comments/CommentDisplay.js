import React from "react";
import CommentCard from "./CommentCard";

const CommentDisplay = ({ comment, post, replyCmt }) => {
  return (
    <div className="comment_display">
      <CommentCard comment={comment} post={post} commentId={comment._id}>
        <div className="pl-4">
          {replyCmt.map(
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
        </div>
      </CommentCard>
    </div>
  );
};

export default CommentDisplay;
