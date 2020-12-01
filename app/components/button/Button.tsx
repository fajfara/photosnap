import React from "react";
import ArrowRight from "../Icons/ArrowRight";

interface PropTypes
  extends React.Component<
    React.HTMLProps<HTMLButtonElement | HTMLAnchorElement>
  > {
  variation?: "dark" | "light";
  className?: string;
  type?: "primary" | "secondary";
  padding?: string;
  asLink?: boolean;
}

// Variables
const btnDefault =
  "uppercase font-bold text-xs tracking-2 transition-colors ease-in-out duration-150";
const secondaryDefaultStyles = "flex group hover:underline";
const styles = {
  primary: {
    light: " bg-white text-black hover:bg-gray-light",
    dark: " bg-black text-white hover:bg-gray-light hover:text-black",
  },
  secondary: {
    light: `${secondaryDefaultStyles} text-white`,
    dark: `${secondaryDefaultStyles} text-black`,
  },
};

/**
 * Simple button component
 */
const Button: React.FC<PropTypes> = ({
  className = "",
  type = "primary",
  variation = "dark",
  padding = "py-3 px-6",
  children,
  asLink = false,
  ...rest
}) => {
  const btnProps = {
    ...rest,
    className: `${padding} ${btnDefault} ${className} ${styles[type][variation]}`,
  };

  if (asLink) {
    return (
      <a {...btnProps}>
        {children}
        {type === "secondary" && (
          <ArrowRight
            className={
              "ml-4 group-hover:translate-x-1 transform-gpu transition-transform duration-150 ease-in-out"
            }
            stroke={variation === "dark" ? "black" : "white"}
          />
        )}
      </a>
    );
  }

  return (
    <button {...btnProps}>
      {children}
      {type === "secondary" && (
        <ArrowRight
          className={
            "ml-4 group-hover:translate-x-1 transform-gpu transition-transform duration-150 ease-in-out"
          }
          stroke={variation === "dark" ? "black" : "white"}
        />
      )}
    </button>
  );
};

export default Button;
