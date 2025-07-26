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
import HeartDiseasePredictor from './pages/HeartDiseasePredictor';
import AlzheimerPredictor from './pages/AlzheimerPredictor';
import PostFeed from './pages/PostFeed';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/detect"
        element={
          <PrivateRoute>
            <DiseaseDetection />
          </PrivateRoute>
        }
      />
      <Route path="/home" element={<HomePage />} />
       <Route
        path="/health"
        element={
          <PrivateRoute>
            <PostFeed />
          </PrivateRoute>
        }
      />
        <Route
        path="/connect"
        element={
          <PrivateRoute>
            <FreePage />
          </PrivateRoute>
        }
      />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/free" element={<FreePage />} />  
      <Route path="/Createfree" element={<CreateFreePage />} />  
       <Route
        path="/Diabetes"
        element={
          <PrivateRoute>
            <DiabetesPredictor />
          </PrivateRoute>
        }
      />
       <Route
        path="/HeartDisease"
        element={
          <PrivateRoute>
            <HeartDiseasePredictor />
          </PrivateRoute>
        }
      />
       <Route
        path="/Parkinson"
        element={
          <PrivateRoute>
            <DeseaseResult />
          </PrivateRoute>
        }
      />
       <Route
        path="/COVID"
        element={
          <PrivateRoute>
            <DeseaseResult />
          </PrivateRoute>
        }
      />
       <Route
        path="/Alzheimer"
        element={
          <PrivateRoute>
            <AlzheimerPredictor />
          </PrivateRoute>
        }
      />
       <Route
        path="/Hypertension"
        element={
          <PrivateRoute>
            <DeseaseResult />
          </PrivateRoute>
        }
      />
       <Route
        path="/Asthma"
        element={
          <PrivateRoute>
            <DeseaseResult />
          </PrivateRoute>
        }
      />
       <Route
        path="/Tuberculosis"
        element={
          <PrivateRoute>
            <DeseaseResult />
          </PrivateRoute>
        }
      />
       <Route
        path="/Cancer"
        element={
          <PrivateRoute>
            <DeseaseResult />
          </PrivateRoute>
        }
      />
       <Route
        path="/Kidney"
        element={
          <PrivateRoute>
            <DeseaseResult />
          </PrivateRoute>
        }
      />
       <Route
        path="/LiverCirrhosis"
        element={
          <PrivateRoute>
            <DeseaseResult />
          </PrivateRoute>
        }
      />
    

     <Route
        path="/Thyroid"
        element={
          <PrivateRoute>
            <DeseaseResult />
          </PrivateRoute>
        }
      />
       <Route
        path="/Depression"
        element={
          <PrivateRoute>
            <DeseaseResult />
          </PrivateRoute>
        }
      />
       <Route
        path="/Anxiety"
        element={
          <PrivateRoute>
            <DeseaseResult />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
