import React, { useState } from 'react';

const AlzheimersPredictor = () => {
  const [form, setForm] = useState({
    age: '',
    gender: 'M',
    eTIV: '',
    nWBV: '',
    ASF: '',
    CDR: '',
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({values: form,disease: "alzheimer"}),
      });


      const data = await response.json();
      setResult(data.prediction);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Alzheimer's Prediction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <input
          type="number"
          step="0.01"
          name="eTIV"
          placeholder="eTIV"
          value={form.eTIV}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          step="0.01"
          name="nWBV"
          placeholder="nWBV"
          value={form.nWBV}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          step="0.01"
          name="ASF"
          placeholder="ASF"
          value={form.ASF}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <select
          name="CDR"
          value={form.CDR}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select CDR</option>
          <option value="0.0">0.0 (No dementia)</option>
          <option value="0.5">0.5 (Very mild dementia)</option>
          <option value="1.0">1.0 (Mild dementia)</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700"
        >
          Predict
        </button>
      </form>

      {result !== null && (
        <div className="mt-4 p-3 rounded bg-green-100 text-green-800">
          <strong>Prediction:</strong>{' '}
          {result === 1 ? 'Demented' : 'Nondemented'}
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 rounded bg-red-100 text-red-800">
          {error}
        </div>
      )}
    </div>
  );
};

export default AlzheimersPredictor;
