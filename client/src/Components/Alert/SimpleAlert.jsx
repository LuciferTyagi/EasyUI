import React from "react";

const SimpleAlert = ({ message="This is an info alert!", type = "info" }) => {
  const alertColors = {
    info: "bg-blue-100 text-blue-800 border-blue-500",
    success: "bg-green-100 text-green-800 border-green-500",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-500",
    error: "bg-red-100 text-red-800 border-red-500",
  };

  return (
    <div
      className={`border-l-4 p-4 mb-4 rounded ${alertColors[type]}`}
      role="alert"
    >
      <p>{message}</p>
    </div>
  );
};

export default SimpleAlert;

// Usage Example:
// <SimpleAlert message="This is an info alert!" type="info" />
