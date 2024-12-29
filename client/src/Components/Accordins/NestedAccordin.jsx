import React, { useState } from "react";
const items = [
      { title: "Parent 1", content: "Content 1", subItems: [{ title: "Child 1", content: "Subcontent 1" }] },
      { title: "Parent 2", content: "Content 2" }
    ]
const NestedAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
          {activeIndex === index && (
            <div className="p-4 bg-gray-50">
              <p>{item.content}</p>
              {item.subItems && (
                <div className="pl-4 mt-2 border-l">
                  <NestedAccordion items={item.subItems} />
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NestedAccordion;

// Usage Example:
// <NestedAccordion items={[
//   { title: "Parent 1", content: "Content 1", subItems: [{ title: "Child 1", content: "Subcontent 1" }] },
//   { title: "Parent 2", content: "Content 2" }
// ]} />
