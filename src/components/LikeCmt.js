import React from "react";
import { useSelector } from "react-redux";

const LikeCmt = ({ isLike, handleLike, handleUnLike }) => {
  const { theme } = useSelector((state) => state);
  return (
    <>
      {isLike ? (
        <i
          class="fas fa-thumbs-up text-danger"
          onClick={handleUnLike}
          style={{ filter: theme ? "invert(1)" : "invert(0)" }}
        />
      ) : (
        <i class="far fa-thumbs-up" onClick={handleLike} />
      )}
    </>
  );
};

export default LikeCmt;
