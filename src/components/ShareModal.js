import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const ShareModal = ({ url, theme }) => {
  return (
    <div
      className="d-flex justify-content-around px-4 py-2"
      style={{ filter: theme ? "invert(1)" : "invert(0)" }}
    >
      <FacebookShareButton url={url}>
        <FacebookIcon round={true} size={32} />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon round={true} size={32} />
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon round={true} size={32} />
      </LinkedinShareButton>
    </div>
  );
};

export default ShareModal;
