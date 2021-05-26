import React from "react";

const ToastMsg = ({ msg, handleShow, bgColor }) => {
  return (
    <div
      className={`toast show position-fixed text-light ${bgColor}`}
      data-delay="500"
      data-autohide="true"
      id="myToast"
      style={{ top: "5px", right: "5px", minWidth: "200px", zIndex: 50 }}
    >
      <div className={`toast-header text-light ${bgColor}`}>
        <strong className="mr-auto text-light">{msg.title}</strong>
        <button
          className="ml-2 mb-1 close"
          type="button"
          aria-label="Close"
          data-dismiss="toast"
          onClick={handleShow}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body">{msg.body}</div>
    </div>
  );
};

export default ToastMsg;
