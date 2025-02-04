import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import React, {useState,Suspense  } from 'react'
import  SyntaxHighlighter  from 'react-syntax-highlighter';
import { darcula, docco, dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';


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
          <SyntaxHighlighter language="javascript" style={dracula}>
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
  return (
  
    <div className="Parent flex flex-col gap-4     bg--300  ">
        <div className='First-Child Component-Info flex flex-col gap-2 pb-10 mb-10 border-b border-zinc-600/20'>
             <h4 className='text-sm font-semibold text-zinc-900'>{selectedCategory.name}</h4>
             <h2 className='text-2xl font-semibold text-zinc-700'>Tailwind CSS {selectedItem.name}</h2>
             <p className='text-lg font-normal text-zinc-500'>{selectedItem.generalDetail}</p>
             <div className='border-[1px] border-zinc-700/50 p-2 sm:p-6 rounded-lg mt-2'>
                <div className='flex'>
                <FontAwesomeIcon icon={faReact}  className='text-zinc-500 size-6 bg--100'/>
                <div className='ms-3'>
                   <h4 className='text-base font-semibold text-zinc-700 bg--200 leading-none'>Require React JS</h4>
                    <p className='text-base font-normal text-zinc-500 mt-2'>This component requires the use of ReactJS to function properly. Please ensure you have ReactJS integrated into your project. If you're already using ReactJS, you can skip this message.</p>
                </div>
                </div>
             </div>
        </div>
       
        <div className='Second-Child Component-type   bg--400'>
            <div className='Component-Card flex flex-col gap-10 '>
                  {selectedItem.variations.map((variants) =>{
                      const isPreview = selectedTabs[variants.name] === 'Preview';
                      return(
                      <div key={variants.name} className='flex flex-col gap-2'>
                      <h2 className='Component-Name text-lg font-bold text-zinc-700'>{variants.name}</h2>
                      <p className='Component-Work text-base font-normal text-zinc-500'>{variants.details}</p>
                      <div className='Option-Container flex justify-between '>
                            <div className='Tab-Selector flex gap-1 p-1 rounded bg-slate-900'>
                                  <button className={`text-base cursor-pointer px-2 py-1 rounded ${isPreview  ? "bg-white text-zinc-700" :"bg-transparent text-white"}`} onClick={()=>setSelectedTabs((prev) =>({...prev,[variants.name]: 'Preview',}))}>Preview</button>
                                  <button className={`text-base cursor-pointer px-2 py-1 rounded ${!isPreview  ? "bg-white text-zinc-700" : "bg-transparent text-white"}`}  onClick={() => setSelectedTabs((prev) =>({...prev,  [variants.name]: 'Code', }))}>Code</button>
                            </div>


                            <div className='Copy-Edit flex items-center gap-4 border-[1px] border-zinc-600/50 rounded-lg p-2 cursor-pointer'>
                                  <div className='Copy-Button flex items-center gap-1 ' onClick={copyToClipboard}>
                                        <FontAwesomeIcon icon={faCopy} className='text-zinc-500'/>
                                        <span className='text-base  text-zinc-500'>Copy</span>
                                   </div>
                                  <div className='h-full w-[1px] bg-zinc-700/50'></div>
                                  <FontAwesomeIcon icon={faPenToSquare} className='text-zinc-500'/>
                            </div>
                       </div>

                       <div className={`Component-Body   overflow-y-scroll bg--600  rounded-xl shadow-sm border  ${!isPreview  ? "h-[400px]" :"h-auto p-6"} `}>
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
