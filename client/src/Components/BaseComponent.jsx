import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import React, {useState,Suspense  } from 'react'
import  SyntaxHighlighter  from 'react-syntax-highlighter';
import { darcula, dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const ComponentPreview = ({ selectedVariation,selectedCategoryName }) => {
  const Component = React.lazy(() =>
    import(`./${selectedCategoryName}/${selectedVariation}.jsx`) 
  );

  return (
    <Suspense fallback={<div>Loading preview...</div>}>
      <Component />
    </Suspense>
  );
};

const DynamicCodeBlock = ({ selectedVariation, selectedCategoryName }) => {
  const CodeComponent = React.lazy(() =>
    import(`./${selectedCategoryName}/Code.js`).then((module) => {
      const codeString = module[selectedVariation + "Code"];
      if (!codeString) {
        throw new Error(`Code for variation "${selectedVariation}Code" not found.`);
      }
      return {
        default: () => (
          <div className=''>
          <SyntaxHighlighter language="javascript" style={darcula}>
            {codeString}
          </SyntaxHighlighter>
          </div>
        ),
      };
    })
  );
  return (
    <Suspense fallback={<div>Loading code...</div>}>
      <CodeComponent />
    </Suspense>
  );
};



const BaseComponent = ({ name , categories }) => {
        const [selectedTabs, setSelectedTabs] = useState({});
        
            
        const copyToClipboard = () => {
        navigator.clipboard.writeText(accordionCode);
      };

      const selectedCategory = categories.find(category =>
        category.items.some(item => item.name === name)
      )
      const selectedItem = selectedCategory?.items.find(item => item.name === name);

      console.log(selectedCategory)
      console.log("SelectedItem",selectedItem)

  return (
    <div className="flex flex-col gap-4   bg-red-300 p-4 ">
            <div className='Component-Info flex flex-col gap-2'>
      
                    <p className='text-base font-medium text-[#3E362E]'>{selectedCategory.name}</p>
                    <p className='text-2xl font-semibold text-[#865D36]'>Tailwind CSS {selectedItem.name}</p>
                    <p className='text-base font-normal text-[#865D36]'>{selectedItem.generalDetail}</p>
                    <div className='border-[1px] border-[#3E362E] p-2 rounded-md'>
                    <div className='flex items-center gap-2 '>
                        <FontAwesomeIcon icon={faReact}  className='text-[#3E362E] size-7'/>
                        <p className='text-base font-medium text-[#3E362E]'>Require React JS</p>
                    </div>
                    <p className='text-base font-normal text-[#865D36]'>This component requires the use of ReactJS to function properly. Please ensure you have ReactJS integrated into your project. If you're already using ReactJS, you can skip this message.</p>
                
                    </div>
            </div>
            <div className='Component-type flex flex-col bg--400'>
                    <div className='Component-Card flex flex-col gap-10'>
                            {selectedItem.variations.map((variants) =>{
                                const isPreview = selectedTabs[variants.name] === 'Preview';
                                return(
                                <div key={variants.name} className='flex flex-col gap-2'>
                                <p className='Component-Name text-base font-medium text-[#3E362E]'>{variants.name}</p>
                                <p className='Component-Work text-base font-normal text-[#865D36]'>{variants.details}</p>
                                <div className='Option-Container flex justify-between'>
                                    <div className='Tab-Selector flex gap-1 p-1 rounded bg-[#865D36]'>
                                            <p className={`text-base cursor-pointer px-2 py-1 rounded ${isPreview  ? "bg-white text-[#865D36]" :"bg-transparent"}`} onClick={()=>setSelectedTabs((prev) =>({
                                                ...prev,
                                                [variants.name]: 'Preview',
                                            }))}>Preview</p>
                                            <p className={`text-base cursor-pointer px-2 py-1 rounded ${!isPreview  ? "bg-white text-[#865D36]" : "bg-transparent text-white"}`}  onClick={() => setSelectedTabs((prev) =>({
                                                ...prev,
                                                
                                                [variants.name]: 'Code',

                                            }))}>Code</p>
                                    </div>
                                    <div className='Copy-Edit flex items-center gap-4 border-[1px] border-[#3E362E] rounded p-2 cursor-pointer'>
                                                <div className='Copy-Button flex items-center gap-1 ' onClick={copyToClipboard}>
                                                        <FontAwesomeIcon icon={faCopy} className='text-[#865D36]'/>
                                                        <p className='text-base font-light text-[#3E362E]'>Copy</p>
                                                </div>
                                                <div className='h-full w-[1px] bg-[#3E362E]'>

                                                </div>
                                                <FontAwesomeIcon icon={faPenToSquare} className='text-[#865D36]'/>
                                    </div>
                                </div>
                                <div className={`Component-Body w-auto h-[400px] overflow-y-scroll bg--600 border-[1px] border-[#3E362E] rounded ${!isPreview ?"" :"p-4"} `}>
                                {isPreview   ? ( 
                                <ComponentPreview selectedVariation={variants.name} selectedCategoryName={selectedItem.name} />    
                                ) : (
                               <pre className="code-block">
                             <DynamicCodeBlock
                              selectedVariation={variants.name}
                              selectedCategoryName={selectedItem.name}
                              />
                                </pre> 
                                )}
                                  </div>
                               
                                </div>
                                )})}
                        
                    </div>
            </div>
           
    </div>
  )
}

export default BaseComponent
