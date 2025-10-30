
import React from 'react';

interface LeakAlertProps {
  hasLeak: boolean;
  onViewDetails?: () => void; // Optional prop for viewing details
}

const LeakAlert: React.FC<LeakAlertProps> = ({ hasLeak, onViewDetails }) => {
  if (!hasLeak) {
    return null;
  }

  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-6 rounded-lg shadow-lg flex items-center animate-pulse">
      <WarningIcon className="h-10 w-10 mr-6 text-yellow-500" />
      <div>
        <h4 className="font-extrabold text-xl">Potential Leak Detected!</h4>
        <p className="text-yellow-700">
          We've noticed unusual water activity that might indicate a leak. We recommend checking your faucets and appliances.
        </p>
      </div>
       <button 
        onClick={onViewDetails} // Add onClick handler
        className="ml-auto bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-yellow-600 transition-colors whitespace-nowrap"
      >
        View Details
      </button>
    </div>
  );
};


const WarningIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
);


export default LeakAlert;