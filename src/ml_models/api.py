from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)
model = joblib.load('diabetes_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json  # JSON input
    values = np.array(data['values']).reshape(1, -1)
    prediction = model.predict(values)
    result = 'Diabetic' if prediction[0] == 1 else 'Not Diabetic'
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(port=5000)
