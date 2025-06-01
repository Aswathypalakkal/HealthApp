import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-sky-50 font-sans overflow-x-hidden overflow-y-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-sky-800 text-white shadow-md">
        <div className="text-2xl font-bold">HealthNet</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-sky-300">Home</a>
          <a href="#" className="hover:text-sky-300">Doctors</a>
          <a href="#" className="hover:text-sky-300">News</a>
          <a href="#" className="hover:text-sky-300">Predict</a>
        </div>
        <div className="flex gap-x-4">
          <button className="bg-white text-sky-800 px-4 py-1 rounded-full"
            onClick={() => navigate('/login')}
          >Sign in</button>
            <button className="bg-white text-sky-800 px-4 py-1 rounded-full"
            onClick={() => navigate('/login')}
          >Sign up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-br from-sky-200 to-white relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900 mb-4">Your Health, Simplified.</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-6">
          Detect health risks early, connect with doctors, and stay informed with real-time medical updates – all from one platform.
        </p>
        <button className="bg-sky-600 text-white px-6 py-3 rounded-full hover:bg-sky-700 transition shadow-lg"
          onClick={() => {
            console.log("Try It Free button clicked");
            navigate('/free');
          }}>Try It Free</button>

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
        <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
          onClick={() => {
            console.log("Try It Free button clicked");
            navigate('/Createfree');
          }}>Create Free Account</button>
      </section>

      {/* Footer */}
      <footer className="bg-sky-800 text-white text-center py-4 mt-10">
        &copy; 2025 HealthNet. All rights reserved.
      </footer>

      {/* Navigation Button to About Page */}
      <div className="text-center py-6">
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => navigate('/about')}
        >
          Go to About Page
        </button>
      </div>
    </div>
  );
}

export default HomePage;
