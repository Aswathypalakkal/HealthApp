import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import admin from 'firebase-admin';
import { readFile } from 'fs/promises';

// Load the Firebase service account JSON
const serviceAccount = JSON.parse(
  await readFile(new URL('./firebase-adminsdk.json', import.meta.url))
);

app.use((req, res, next) => {
  console.log(`➡️  Incoming request: ${req.method} ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


// ✅ Diabetes Prediction Route
app.post("/predict", async(req, res) => {
 console.log("Prediction is happening ......")
 const  values  = req.body.values;
 const  disease  = req.body.disease;
 console.log("the body is  are :",  req.body);

    try {
        const response = await axios.post('http://localhost:5000/predict', {
            values: values,
            disease : disease
        });


        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Prediction error' }); // ✅ return JSON object
    }
});
// Initialize Firebase Admin SDK

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// 🔐 Endpoint to verify token
app.post('/api/verifyToken', async (req, res) => {
  console.log("Api verify login called .....")
  const { token } = req.body;

  try {
    const decoded = await admin.auth().verifyIdToken(token); // ✅ Verify Firebase ID token
    console.log('Verified Firebase user:', decoded);

    // OPTIONAL: you can check MongoDB for user existence here
    // Example:
    // const user = await User.findOne({ uid: decoded.uid }) || await User.create({ uid: decoded.uid, email: decoded.email });

    res.send({ success: true, uid: decoded.uid, email: decoded.email });
  } catch (err) {
    console.error('Invalid token', err);
    res.status(401).send({ error: 'Invalid token' });
  }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});