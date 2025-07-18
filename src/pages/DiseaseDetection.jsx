import React from 'react';
import { useNavigate } from 'react-router-dom';

const diseases1 = [
  "Diabetes",
  "HeartDisease" ,
  "Parkinson",
  "COVID",
  "Alzheimer",
  "Hypertension",
  "Asthma",
  "Tuberculosis",
  "Cancer" ,
  "Stroke",
  "Kidney",
  "LiverCirrhosis",
  "Thyroid",
  "Depression" ,
  "Anxiety",
];

const diseases = [
"Diabetes",
  "Heart Disease",
  "Parkinson's Disease",
  "COVID-19 Detection",
  "Alzheimer's Disease",
"Hypertension",
  "Asthma",
  "Tuberculosis",
  "Cancer Risk",
  "Stroke Prediction",
  "Kidney Disease",
  "Liver Cirrhosis",
  "Thyroid Issues",
  "Depression",
  "Anxiety Disorders",
];

const DiseaseDetection = () => {
const navigate = useNavigate();
  return (
    
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-200 to-white flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mt-10 mb-6  text-center">Disease Detection</h1>

      <div className="w-full max-w-6xl h-[70vh] overflow-y-auto bg-white bg-opacity-50 rounded-xl shadow-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {diseases.map((disease, index) => (
            <button
              key={index}
              className="bg-white bg-opacity-80 hover:bg-purple-200 text-gray-800 font-semibold py-4 px-8 rounded-2xl shadow-md transition duration-300 border border-gray-300"
              onClick={() => {
            console.log("detection is happening ",diseases1[index]);
            navigate(`/${diseases1[index]}`);  // /HeartDisease     
          }}
            >
              {disease}
            </button>
          ))}
        </div>
      </div>


    </div>
  );
};

export default DiseaseDetection;
