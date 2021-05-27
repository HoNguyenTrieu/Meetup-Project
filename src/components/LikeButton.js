import React from "react";
import { useSelector } from "react-redux";

const LikeButton = ({ isLike, handleLike, handleUnLike }) => {
  const { theme } = useSelector((state) => state);
  return (
    <>
      {isLike ? (
        <i
          class="fas fa-kiss-wink-heart text-danger"
          onClick={handleUnLike}
          style={{ filter: theme ? "invert(1)" : "invert(0)" }}
        />
      ) : (
        <i class="far fa-kiss-wink-heart" onClick={handleLike} />
      )}
    </>
  );
};

export default LikeButton;
