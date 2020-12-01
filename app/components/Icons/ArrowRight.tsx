import React from "react";

const ArrowRight = ({ stroke, className }) => {
  return (
    <svg
      width="42"
      height="14"
      viewBox="0 0 42 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0 7H41.864" stroke={stroke} />
      <path d="M35.4282 1L41.4282 7L35.4282 13" stroke={stroke} />
    </svg>
  );
};

export default ArrowRight;
