import * as React from "react";

const Cursus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="85"
    fill="none"
    viewBox="0 0 64 85"
    {...props}
  >
    <path
      fill="#15803D"
      d="M46.595 17.071c6.3-6.3 17.071-1.838 17.071 7.071V43c0 5.523-4.477 10-10 10H34.808c-8.909 0-13.37-10.771-7.07-17.071L46.594 17.07z"
      opacity="0.5"
    ></path>
    <path
      stroke="#78350F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M53.333 74.333L10.667 61m42.666 13.333H10.667V61l42.666 13.333zm0 0V53c0-11.782-9.55-21.334-21.333-21.334a21.34 21.34 0 00-6.095.884C17.093 35.173 10.667 43.336 10.667 53v8l42.666 13.333z"
    ></path>
    <path
      stroke="#78350F"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M42.667 45v2.667M32 42.334V45M21.333 39.666v2.667"
    ></path>
  </svg>
);

export default Cursus;
