export  const AccordionCode = `
  const [openItems, setOpenItems] = useState([]);
  
  const toggleItem = (index) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((item) => item !== index)
        : [...prevOpenItems, index]
    );
  };
  
  return (
    <div className="accordion">
      {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggleItem(index)}
          >
            {item}
          </div>
          {openItems.includes(index) && (
            <div className="accordion-body">
              Content for {item}
            </div>
          )}
        </div>
      ))}
    </div>
  );
  `;