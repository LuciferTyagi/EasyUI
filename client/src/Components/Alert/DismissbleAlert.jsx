import React, { useState } from "react";

const DismissibleAlert = ({ message="This is a dismissible alert!", type = "success" }) => {
  const [visible, setVisible] = useState(true);

  const alertColors = {
    info: "bg-blue-100 text-blue-800 border-blue-500",
    success: "bg-green-100 text-green-800 border-green-500",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-500",
    error: "bg-red-100 text-red-800 border-red-500",
  };

  if (!visible) return null;

  return (
    <div
      className={`flex items-center justify-between border-l-4 p-4 mb-4 rounded ${alertColors[type]}`}
      role="alert"
    >
      <p>{message}</p>
      <button
        onClick={() => setVisible(false)}
        className="text-lg font-bold text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
};

export default DismissibleAlert;

// Usage Example:
// <DismissibleAlert message="This is a dismissible alert!" type="success" />
