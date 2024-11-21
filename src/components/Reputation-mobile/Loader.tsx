import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4 w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/4">
        <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-center text-gray-700 font-semibold">Creating Widget Bundle</p>
      </div>
    </div>
  );
};

export default Loader;
