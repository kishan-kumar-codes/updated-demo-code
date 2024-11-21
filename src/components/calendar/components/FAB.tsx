const FAB = () => {
    return (
      <button
        className="fixed bottom-24 right-4 bg-limeGreen text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600"
        onClick={() => alert('Add Event')}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    );
  };
  
  export default FAB;
  