import React, { useEffect, useState } from "react";

const AutoDismissingAlert = ({ message="This alert will disappear in 3 seconds!", type = "warning", duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  const alertColors = {
    info: "bg-blue-100 text-blue-800 border-blue-500",
    success: "bg-green-100 text-green-800 border-green-500",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-500",
    error: "bg-red-100 text-red-800 border-red-500",
  };

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      className={`border-l-4 p-4 mb-4 rounded ${alertColors[type]}`}
      role="alert"
    >
      <p>{message}</p>
    </div>
  );
};

export default AutoDismissingAlert;

// Usage Example:
// <AutoDismissingAlert message="This alert will disappear in 3 seconds!" type="warning" duration={3000} />
