from flask import Flask, request, jsonify
import joblib
import numpy as np
import os

app = Flask(__name__)
# Load models only once
models = {
    'diabetes': joblib.load('diabetes_model.pkl'),
    'heart': joblib.load('heart_model.pkl'),
}

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    print("the data is :",data)
    disease = data.get('disease')  # e.g., "diabetes"
    values = data.get('values')    # list of features

    if disease not in models:
        return jsonify({'error': f'Model for {disease} not found'}), 400

    model = models[disease]

    try:
        values = np.array(values).reshape(1, -1)
        prediction = model.predict(values)[0]

        if disease == 'diabetes':
            result = 'Diabetic' if prediction == 1 else 'Not Diabetic'
        elif disease == 'heart':
            print("disease is heart desease...")
            result = 'Heart Disease' if prediction == 1 else 'Healthy Heart'
        elif disease == 'cancer':
            result = 'Cancer Detected' if prediction == 1 else 'No Cancer'
        else:
            result = int(prediction)  # fallback for other models

        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
