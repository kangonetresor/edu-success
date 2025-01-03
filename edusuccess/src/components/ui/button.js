import React from "react";

export const Button = ({ children, variant = "default", className, ...props }) => {
  const baseStyle =
    "px-4 py-2 rounded font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    link: "text-blue-600 underline hover:text-blue-700",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
