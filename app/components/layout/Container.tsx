import React from "react";

interface PropTypes {
  className?: string;
  padding?: string;
}

const Container: React.FC<PropTypes> = ({
  children,
  className = "",
  padding = "px-32",
}) => {
  return (
    <div className={`container mx-auto ${className} ${padding}`}>
      {children}
    </div>
  );
};

export default Container;
