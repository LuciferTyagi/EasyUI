export const StandardAccordionCode = `
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
    <div className="w-full bg-gray-400 mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border">
          <button
            className="w-full bg-gray-300 text-left p-2 flex items-center gap-4"
            onClick={() => toggleAccordion(index)}
          >
            <FontAwesomeIcon 
              className="text-[#3E362E] text-xs" 
              icon={activeIndex === index ? faMinus : faPlus} 
            />
            <p className="text-md text-[#3E362E] font-medium">{item.title}</p>
          </button>
          <div
            className={\`overflow-hidden transition-all duration-300 ease-in-out \${activeIndex === index ? "max-h-40" : "max-h-0"}\`}
          >
            <div className="p-2 bg-gray-50">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StandardAccordion;
`




export const  MultiExpandableAccordionCode =`import React, { useState } from "react";
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
`
export const NestedAccordinCode = `
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

export default NestedAccordion;`