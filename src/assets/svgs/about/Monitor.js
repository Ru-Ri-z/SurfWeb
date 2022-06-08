import * as React from "react";

const Monitor = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    viewBox="0 0 280 280"
    xmlSpace="preserve"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#413D75"
      d="M52.252 38.701c-10.35 0-18.748 8.514-18.748 19.013v126.63c0 10.464 8.398 18.962 18.748 18.962h54.145l-8.32 25.333H77.609c-3.461 0-6.23 2.838-6.23 6.354 0 3.475 2.77 6.306 6.23 6.306h124.797c3.461 0 6.221-2.831 6.221-6.306 0-3.517-2.76-6.354-6.221-6.354h-20.465l-8.322-25.333h54.17c10.33 0 18.707-8.498 18.707-18.962V57.714c0-10.499-8.377-19.013-18.707-19.013H52.252zm108.217 164.605 8.32 25.333h-57.574l8.322-25.333h40.932zm73.547-25.317v6.354c0 3.476-2.797 6.307-6.227 6.307H52.252c-3.465 0-6.262-2.831-6.262-6.307v-6.354h188.026zm-6.227-126.63c3.43 0 6.227 2.844 6.227 6.354v107.614H45.99V57.714c0-3.511 2.797-6.354 6.262-6.354h175.537z"
    />
  </svg>
);

export default Monitor;