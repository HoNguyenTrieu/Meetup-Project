import React, { useState } from "react";
import Carousel from "../Carousel";

const CardBody = ({ post }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="card_body">
      <div className="card_body-content">
        <span>
          {post.content.length < 120
            ? post.content
            : readMore
            ? post.content + " "
            : post.content.slice(0, 120) + "... "}
        </span>
        {post.content.length > 120 && (
          <span className="readMore" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Hide content" : "See more"}
          </span>
        )}
      </div>
      {post.images.length > 0 && (
        <Carousel images={post.images} id={post._id} />
      )}
    </div>
  );
};

export default CardBody;
