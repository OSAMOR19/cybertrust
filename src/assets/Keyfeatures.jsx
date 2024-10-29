import React from 'react';

const Keyfeature = () => {
  return (
    <div className="bg-gradient-to-br from-purple-700 to-gray-900 pt-10">
      <h1 className="text-4xl text-center text-white mb-8">Key Features</h1>
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="bg-white rounded-lg shadow-2xl p-6 text-center transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">Step-by-Step Guidance</h2>
          <p className="text-gray-500">
            Offers actionable steps to improve security based on identified risks, including adjusting device settings, updating software, and password recommendations.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-6 text-center transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">User-Friendly Explanations</h2>
          <p className="text-gray-500">
            Avoids technical jargon by offering clear explanations and definitions of cybersecurity terms, making complex concepts easy to understand for non-experts.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-6 text-center transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">Cybersecurity Learning Hub</h2>
          <p className="text-gray-500">
            Provides easy-to-follow modules on topics like phishing, malware, data protection, and password management.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Keyfeature;
