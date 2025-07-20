import React, { useState } from 'react';
import axios from 'axios';

const HeartDiseasePredictor = () => {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
    console.log("the handleSubmit")
    e.preventDefault();
    const values = Object.values(formData).map(Number);

    const res = await fetch('/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ values ,  disease: "heart" }),
    });
   
    console.log("the result :",res.body)

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Heart Disease Predictor</h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([field, value]) => (
          <div key={field} style={{ marginBottom: 10 }}>
            <label>
              {field}:
              <input
                type="number"
                name={field}
                value={value}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        ))}
        <button type="submit">Predict</button>
      </form>

      {result && (
        <div style={{ marginTop: 20 }}>
          <strong>Prediction:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default HeartDiseasePredictor;
