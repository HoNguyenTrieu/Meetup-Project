import React from "react";
import Avatar from "../Avatar";
import { imageShow } from "../../utils/mediaShow";

const MsgDisplay = ({ user, msg, theme }) => {
  return (
    <>
      <div className="chat_title">
        <Avatar src={user.avatar} size="small-avatar" />
        <span>{user.username}</span>
      </div>
      {msg.text && <div className="chat_text">{msg.text}</div>}
      {msg.media.map((item, index) => (
        <div key={index}>{imageShow(item.url, theme)}</div>
      ))}

      <div className="chat_time">
        {new Date(msg.createdAt).toLocaleTimeString()}
      </div>
    </>
  );
};

export default MsgDisplay;
