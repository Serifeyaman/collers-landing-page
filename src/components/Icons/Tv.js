import * as React from "react";

const Tv = (props) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 65 64"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M6 53.333V24a5.333 5.333 0 015.333-5.334H54A5.333 5.333 0 0159.333 24v29.333A5.333 5.333 0 0154 58.667H11.333A5.333 5.333 0 016 53.332z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M23.333 6.667L32.667 16 42 6.666"
      ></path>
    </svg>
);

export default Tv;
