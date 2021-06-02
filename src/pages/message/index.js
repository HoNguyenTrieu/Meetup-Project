import React from "react";
import { useSelector } from "react-redux";
import LeftSide from "../../components/message/LeftSide";

const Message = () => {
  const { theme } = useSelector((state) => state);
  return (
    <div className="message d-flex">
      <div className="col-md-4 border-right px-0">
        <LeftSide />
      </div>
      <div className="col-md-8 px-0 right_mess">
        <div className="d-flex justify-content-center align-items-center flex-column h-100">
          <i
            className="fas fa-comment-dots text-danger "
            style={{
              fontSize: "5rem",
              filter: theme ? "invert(1)" : "invert(0)",
            }}
          />
          <h4>Messenger</h4>
        </div>
      </div>
    </div>
  );
};

export default Message;
