import * as React from "react";

const Tv = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="87"
    height="64"
    fill="none"
    viewBox="0 0 87 64"
    {...props}
  >
    <path
      stroke="#78350F"
      strokeWidth="1.5"
      d="M5.333 53.333V24a5.333 5.333 0 015.334-5.334h42.666A5.333 5.333 0 0158.667 24v29.333a5.333 5.333 0 01-5.334 5.334H10.667a5.333 5.333 0 01-5.334-5.334z"
    ></path>
    <path
      stroke="#78350F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M22.667 6.667L32 16l9.333-9.334"
    ></path>
    <rect
      width="45"
      height="45"
      x="41.334"
      fill="#A21CAF"
      opacity="0.5"
      rx="20"
    ></rect>
  </svg>
);

export default Tv;
