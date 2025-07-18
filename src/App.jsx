// App.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FreePage from './pages/FreePage';
import LoginPage from './pages/LoginPage';
import CreateFreePage from './pages/CreateFreePage';
import DiseaseDetection from './pages/DiseaseDetection';
import DeseaseResult from './pages/DeseaseResult';
import DiabetesPredictor from './pages/diabetesPredictor';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detect" element={<DiseaseDetection />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/health" element={<FreePage />} />
      <Route path="/connect" element={<FreePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/free" element={<FreePage />} />  
      <Route path="/Createfree" element={<CreateFreePage />} />  
      <Route path="/DiseaseDetection" element={<DiseaseDetection />} />  
      <Route path="/Diabetes" element={<DiabetesPredictor />} />
      <Route path="/HeartDisease" element={<DeseaseResult />} />
      <Route path="/Parkinson" element={<DeseaseResult />} />
      <Route path="/COVID" element={<DeseaseResult />} />  
      <Route path="/Alzheimer" element={<DeseaseResult />} />  
      <Route path="/Hypertension" element={<DeseaseResult />} />   
      <Route path="/Asthma" element={<DeseaseResult />} />
      <Route path="/Tuberculosis" element={<DeseaseResult />} />
      <Route path="/Cancer" element={<DeseaseResult />} />
      <Route path="/COVID" element={<DeseaseResult />} />  
      <Route path="/Kidney" element={<DeseaseResult />} />  
      <Route path="/LiverCirrhosis" element={<DeseaseResult />} />   
      <Route path="/Thyroid" element={<DeseaseResult />} />  
      <Route path="/Depression" element={<DeseaseResult />} />  
      <Route path="/Anxiety" element={<DeseaseResult />} />   
    </Routes>
  );
}

export default App;
