import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';

const ThankYou: React.FC = () => {
  const location = useLocation();
  const message = location.state?.message || 'Your submission has been received.';

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center max-w-lg">
        <div className="mb-8">
            <div className="mx-auto h-24 w-24 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-14 w-14 text-green-600" />
            </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-6 font-hindi">धन्यवाद</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <p className="text-green-800 text-lg font-medium">
            {message}
          </p>
          <p className="text-green-700 mt-2 text-sm">
            We have sent a confirmation SMS to your registered phone number.
          </p>
        </div>

        <div className="space-x-4">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-saffron-600 hover:bg-saffron-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saffron-500"
          >
            <Home className="mr-2 h-5 w-5" /> Return Home
          </Link>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saffron-500"
          >
            Contact Office
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;