import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
const items = [
  { title: "Item 1", content: "Content 1" },
  { title: "Item 2", content: "Content 2" },
  { title: "Item 3", content: "Content 3" },
];

const StandardAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg--400 mx-auto ">
      {items.map((item, index) => (
        <div key={index} className="border-">
          <button
            className="w-full bg--300 text-left p-2  flex items-center gap-4"
            onClick={() => toggleAccordion(index)}
          >
            <FontAwesomeIcon className="text-[#3E362E]  text-xs" icon={activeIndex === index ? faMinus : faPlus} />
            <p className="text-md text-[#3E362E] font-medium">{item.title}</p>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="p-2 bg--50">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StandardAccordion;
