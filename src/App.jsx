// App.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FreePage from './pages/FreePage';
import LoginPage from './pages/LoginPage';
import CreateFreePage from './pages/CreateFreePage';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/free" element={<FreePage />} />  
      <Route path="/Createfree" element={<CreateFreePage />} />        
    </Routes>
  );
}

export default App;
