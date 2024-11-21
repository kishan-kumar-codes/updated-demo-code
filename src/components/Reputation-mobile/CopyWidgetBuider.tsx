// 'use client';  

// import { useState } from 'react';

// const CopyFileContent = () => {
//   const [message, setMessage] = useState<string>('');
//   const [isCopySuccess, setIsCopySuccess] = useState<boolean>(false);

  
//   const handleCopy = async () => {
//     try {
//       const response = await fetch('/api/widget/get-widget-content');
//       const data = await response.json();

//       if (data.error) {
//         setMessage(data.error);
//         setIsCopySuccess(false);
//         return;
//       }

//       const fileContent = data.content;
//       await navigator.clipboard.writeText(fileContent);

     
//       setMessage('Code copied!');
//       setIsCopySuccess(true);
//     } catch (error) {
      
//       setMessage('Failed to fetch or copy the content.');
//       setIsCopySuccess(false);
//     }
//   };

//   return (
//     <div className='flex flex-col items-center'>
//       <button onClick={handleCopy}
//       className={`font-bold md:text-lg mt-0 lg:mt-4 lg:text-[20px] text-xs border px-6 py-2 rounded-xl w-fit text-white text-center bg-[#631363]`}
//       >Copy</button>
//       {message && (
//         <div
//           style={{
//             color: isCopySuccess ? 'green' : 'red',
//             marginTop: '10px',
//             fontWeight: 'bold',
//           }}
//         >
//           {message}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CopyFileContent;

'use client';

import { useState } from 'react';

interface CopyFileContentProps {
  setIsCopy: (value: boolean) => void;
}

const CopyFileContent = ({setIsCopy}:CopyFileContentProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = async () => {
    try {
      const response = await fetch('/api/widget/get-widget-content');
      const data = await response.json();

      if (data.error) {
        // Handle error case
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000);
        return;
      }

      const fileContent = data.content;
      await navigator.clipboard.writeText(fileContent);
      setIsCopy(true)
      // Show tooltip for success
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    } catch (error) {
      // Handle fetch/copy error
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={handleCopy}
        className={`font-bold md:text-lg mt-0 md:mt-4 lg:text-[20px] border px-6 py-2 text-[10px] rounded-xl w-fit text-white text-center bg-[#631363]`}
      >
        Copy
        {showTooltip && (
          <div
            className="absolute bottom-full mb-2 w-max px-4 py-2 text-sm text-white bg-black rounded-md shadow-md"
            style={{ transform: 'translateX(-50%)', left: '50%' }}
          >
            Code copied!
          </div>
        )}
      </button>
    </div>
  );
};

export default CopyFileContent;
