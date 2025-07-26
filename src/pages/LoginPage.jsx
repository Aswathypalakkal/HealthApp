// App.js
import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebaseConfig';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaMicrosoft } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { login } from './authSlice';

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const token = await result.user.getIdToken(); //  Get token
    setUser(result.user);
  

    // Send token to backend
    const res = await fetch('http://localhost:3000/api/verifyToken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    });

    const data = await res.json();
    console.log('Server response:', data);
    dispatch(login({ name: data.name, email:data.email, picture:data.picture}));
  } catch (error) {
    console.error('Login Error:', error.message);
  }
};

   return (
 
    <div className="bg-sky-50 font-sans overflow-x-hidden overflow-y-hidden">


          <div className="w-[30%] mx-auto bg-white p-8 rounded-2xl shadow-xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Login to Your Account</h2>
        <p className="mb-8 text-gray-500">Use one of the following methods</p>

        <button
          onClick={() => handleGoogleLogin()}
          className="w-full mb-4 flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg shadow-sm transition duration-300"
        >
          <FcGoogle className="mr-2 text-xl" />
          Continue with Google
        </button>

        <button
        //  onClick={() => handleLogin("facebook")}
          className="w-full mb-4 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-sm transition duration-300"
        >
          <FaFacebook className="mr-2 text-xl" />
          Continue with Facebook
        </button>

        <button
         // onClick={() => handleLogin("microsoft")} 
          className="w-full mb-4 flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg shadow-sm transition duration-300"
        >
          <FaMicrosoft className="mr-2 text-xl" />
          Continue with Microsoft
        </button>
      </div>
    </div>
  );
}

export default App;
