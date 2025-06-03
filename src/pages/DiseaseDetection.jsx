import React from 'react';

const diseases = [
  "Diabetes",
  "Heart Disease",
  "Parkinson's Disease",
  "COVID-19 detection"
];

const DiseaseDetection = () => {
  return (
   
       <div className="min-h-screen w-full bg-gray-200 flex flex-col items-center justify-center">

      {/* Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-10">
          {diseases.map((disease, index) => (
            <button
              key={index}
              className="bg-gray-400 hover:bg-gray-500 text-black font-semibold py-6 px-12 rounded-full border border-gray-600 w-64 text-center shadow"
            >
              {disease}
            </button>
          ))}
        </div>
      </main>

     
    </div>
  );
};

export default DiseaseDetection;
