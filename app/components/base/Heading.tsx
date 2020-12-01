import React, { ReactNode } from "react";

interface PropTypes {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children?: ReactNode;
  className?: string;
  h2Ash1?: boolean;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const Heading: React.FC<PropTypes> = ({
  level,
  children = null,
  className = "",
  h2Ash1 = false,
}) => {
  const Tag = `h${level}` as HeadingTag;
  const actualLevel = h2Ash1 && level === 2 ? 1 : 2;
  const headingStyles = {
    1: "text-h1-sm sm:text-h1 font-bold tracking-4",
    2: "text-h2 font-bold",
    3: "text-h3 font-bold",
    4: "text-h4 bold tracking-2",
  };
  return (
    <Tag className={`${headingStyles[actualLevel]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;
