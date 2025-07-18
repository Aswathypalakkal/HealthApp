import React, { useState } from 'react';

const DiabetesPredictor = () => {
  const [formData, setFormData] = useState({
    val0: '', val1: '', val2: '', val3: '',
    val4: '', val5: '', val6: '', val7: ''
  });
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("the handleSubmit")
    e.preventDefault();
    const values = Object.values(formData).map(Number);

    const res = await fetch('/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ values }),
    });
    console.log("the result :",res.body)

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-teal-100 flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-teal-700">Diabetes Prediction Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            'Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness',
            'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age'
          ].map((label, index) => (
            <div key={index}>
              <label className="block font-medium text-gray-700">{label}:</label>
              <input
                type="number"
                step={label === 'DiabetesPedigreeFunction' ? "0.01" : "1"}
                name={`val${index}`}
                value={formData[`val${index}`]}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Predict
          </button>
        </form>

        {result && (
          <div className="mt-6 text-center text-xl font-semibold text-teal-800">
            Prediction: {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default DiabetesPredictor;
