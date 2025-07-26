import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import DiseaseDetection from './DiseaseDetection';
import { useSelector } from 'react-redux';
import PostFeed from './PostFeed';

const HomePage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  console.log("the login is :",isLoggedIn)
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
    <header className="bg-gradient-to-br from-sky-200 to-white py-4 shadow">
  <nav className="flex justify-center space-x-4 text-lg font-medium text-center">
    {['home', 'detect', 'health', 'connect'].map((section) => (
      <button
        key={section}
      //  href={`#${section}`}
        className="hover:text-sky-900 transition duration-200 w-[8%]"
        onClick={() =>{ setActiveSection(section);
           navigate(`/${section}`);
        }
        }
      >
        {section}
      </button>
    ))}
      <div className="post-header">
            <img src="https://i.pravatar.cc/150?img=3" alt="Profile" className="profile-pic" />
            <span className="user-name">Aswathy</span>
      </div>
  </nav>
      
</header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        {activeSection === 'home' && (
          <div className="text-center">
           {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-br from-sky-200 to-white relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900 mb-4">Your Health, Simplified.</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-6">
          Detect health risks early, connect with doctors, and stay informed with real-time medical updates – all from one platform.
        </p>
        {!isLoggedIn?
        <button className="bg-sky-600 text-white px-6 py-3 rounded-full hover:bg-sky-700 transition shadow-lg w-[15%]"
          onClick={() => {
            console.log("Try It Free button clicked");
            navigate('/login');
          }}>login</button>:console.log("nothing")}

        {/* Decorative Circles */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-sky-300 rounded-full opacity-30 blur-xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-sky-100 rounded-full opacity-20 blur-2xl pointer-events-none"></div>
      </section>

      {/* Main Features */}
      <section className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6 text-sky-800">What HealthNet Offers</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
          <div className="bg-sky-50 p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">🧬 Disease Prediction</h3>
            <p className="text-gray-600">
              Enter your symptoms or health data, and get AI-based predictions to catch potential illnesses early.
            </p>
          </div>
          <div className="bg-sky-50 p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">👨‍⚕️ Connect with Doctors</h3>
            <p className="text-gray-600">
              Chat with certified medical professionals, share reports, and get expert guidance — just like a social app.
            </p>
          </div>
          <div className="bg-sky-50 p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">📰 Health News</h3>
            <p className="text-gray-600">
              Stay updated with the latest breakthroughs, wellness tips, and verified medical news from trusted sources.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 bg-gradient-to-t from-white to-sky-100 text-center">
        <h2 className="text-3xl font-bold mb-6 text-sky-800">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic">“HealthNet helped me identify early signs of diabetes — I got treatment just in time!”</p>
            <p className="mt-4 font-bold text-sky-800">– Anjali M., Kerala</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic">“I can now easily message my family doctor without going to the clinic. So convenient!”</p>
            <p className="mt-4 font-bold text-sky-800">– Rakesh N., Bengaluru</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-white">
        <h2 className="text-2xl font-bold text-sky-900 mb-4">Start Your Health Journey Today</h2>
        <p className="text-gray-600 mb-6">Join thousands of users improving their lives with HealthNet.</p>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition w-[15%]"
          onClick={() => {
            console.log("Try It Free button clicked");
            navigate('/Createfree');
          }}>Create Free Account</button>
      </section>

          </div>
        )}
  
      
      </main>

      {/* Footer */}
      <footer className="bg-gray-300 py-4 text-center">
        <p className="text-sm">Footer content here</p>
      </footer>
    </div>
  );
};

export default HomePage;
