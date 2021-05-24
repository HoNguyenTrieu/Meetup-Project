import React from "react";

const Loading = () => {
  return (
    <div
      className="position-fixed w-100 h-100 text-center loading"
      style={{
        background: "#0008",
        color: "white",
        top: 0,
        left: 0,
        zIndex: 50,
      }}
    >
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: "auto", background: "none" }}
        width="200"
        height="200"
        display="block"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
      >
        <g transform="translate(50 50) scale(.7) translate(-50 -50)">
          <animateTransform
            attributeName="transform"
            dur="0.7575757575757576s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 50;360 50 50"
          ></animateTransform>
          <path fill="#e15b64" d="M50 50V0a50 50 0 0150 50z"></path>
        </g>
        <g transform="translate(50 50) scale(.7) translate(-50 -50)">
          <animateTransform
            attributeName="transform"
            dur="1.0101010101010102s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 50;360 50 50"
          ></animateTransform>
          <path fill="#f47e60" d="M50 50h50a50 50 0 01-50 50z"></path>
        </g>
        <g transform="translate(50 50) scale(.7) translate(-50 -50)">
          <animateTransform
            attributeName="transform"
            dur="1.5151515151515151s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 50;360 50 50"
          ></animateTransform>
          <path fill="#f8b26a" d="M50 50v50A50 50 0 010 50z"></path>
        </g>
        <g transform="translate(50 50) scale(.7) translate(-50 -50)">
          <animateTransform
            attributeName="transform"
            dur="3.0303030303030303s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 50;360 50 50"
          ></animateTransform>
          <path fill="#abbd81" d="M50 50H0A50 50 0 0150 0z"></path>
        </g>
        <text fill="#fff" x="5" y="110">
          Loading
        </text>
      </svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: "auto", background: "none" }}
        width="200"
        height="200"
        display="block"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="32"
          fill="none"
          stroke="#e15b64"
          strokeDasharray="50.26548245743669 50.26548245743669"
          strokeLinecap="round"
          strokeWidth="8"
        >
          <animateTransform
            attributeName="transform"
            dur="3.0303030303030303s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
        <circle
          cx="50"
          cy="50"
          r="23"
          fill="none"
          stroke="#f8b26a"
          strokeDasharray="36.12831551628262 36.12831551628262"
          strokeDashoffset="36.128"
          strokeLinecap="round"
          strokeWidth="8"
        >
          <animateTransform
            attributeName="transform"
            dur="3.0303030303030303s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 50;-360 50 50"
          ></animateTransform>
        </circle>
        <text fill="#fff" x="31" y="53">
          Loading
        </text>
      </svg>
    </div>
  );
};

export default Loading;
