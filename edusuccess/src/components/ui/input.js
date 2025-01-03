import React from "react";

export const Input = ({ className, ...props }) => {
  return (
    <input
      className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ${className}`}
      {...props}
    />
  );
};
