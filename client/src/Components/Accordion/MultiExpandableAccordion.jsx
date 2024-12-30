import React, { useState } from "react";
const items = [{ title: "Item 1", content: "Content 1" }, { title: "Item 2", content: "Content 2" }];
const MultiExpandableAccordion = () => {
  const [openSections, setOpenSections] = useState([]);

  const toggleAccordion = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((i) => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-b">
          <button
            className="w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-lg font-medium">{item.title}</h2>
          </button>
          {openSections.includes(index) && (
            <div className="p-4 bg-gray-50">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MultiExpandableAccordion;

