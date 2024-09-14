import React from "react";

const SoftContainer = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg border-1 p-6 ${className}`}>
      {children}
    </div>
  );
};

export default SoftContainer;
