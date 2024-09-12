// import React, { useState } from 'react';
import { Brain } from 'lucide-react';

const FunFactDisplay = ({ fact }) => {

  return (
    <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl overflow-hidden m-4">
        <div className="bg-blue-500 p-4 flex items-center">
          <Brain className="text-white mr-4" size={40} />
          <h1 className="text-2xl font-bold text-white">Did You Know?</h1>
        </div>
        <div className="p-4">
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            {fact}
          </p>
        </div>
    </div>
  );
};

export default FunFactDisplay;