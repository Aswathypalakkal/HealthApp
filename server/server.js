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
 const { values } = req.body;

    try {
        const response = await axios.post('http://localhost:5000/predict', {
            values: values
        });


        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Prediction error');
    }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});