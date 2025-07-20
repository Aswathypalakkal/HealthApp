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
            disease : diseases
        });


        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Prediction error' }); // ✅ return JSON object
    }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});