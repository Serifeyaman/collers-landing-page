import * as React from "react";

const Cursus = (props) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 65 64"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M53.667 53.333L11 40m42.667 13.333H11V40l42.667 13.333zm0 0V32c0-11.782-9.552-21.334-21.334-21.334-2.118 0-4.164.31-6.095.884C17.426 14.173 11 22.336 11 32v8l42.667 13.333z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M43 24v2.667M32.333 21.334V24M21.667 18.666v2.667"
      ></path>
    </svg>
);

export default Cursus;
