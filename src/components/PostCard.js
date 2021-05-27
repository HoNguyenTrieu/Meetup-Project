import React from "react";
import CardHeader from "./home/CardHeader";
import CardBody from "./home/CardBody";
import CardFooter from "./home/CardFooter";

import Comments from "./home/Comments";
import AddComment from "./home/AddComment";

const PostCard = ({ post }) => {
  return (
    <div className="card my-3">
      <CardHeader post={post} />
      <CardBody post={post} />
      <CardFooter post={post} />

      <Comments post={post} />
      <AddComment post={post} />
    </div>
  );
};

export default PostCard;
