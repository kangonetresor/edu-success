import React from "react";

export const Card = ({ children, className, ...props }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className, ...props }) => (
  <div className={`p-4 border-b ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, className, ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className, ...props }) => (
  <div className={`p-4 border-t ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className, ...props }) => (
  <h2 className={`text-lg font-bold ${className}`} {...props}>
    {children}
  </h2>
);
