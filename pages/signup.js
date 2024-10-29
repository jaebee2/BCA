// pages/signup.js
import { useState } from 'react';
import Link from 'next/link';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement your signup logic here
    console.log(name, email, password); // Log the user info

    // Simulated signup logic (replace with real authentication)
    if (!name || !email || !password) {
      setError('All fields are required');
    } else {
      // Redirect on successful signup
      window.location.href = '/login'; // Adjust to your actual route
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* <div className="bg-white p-0 rounded-md shadow-md w-full max-w-7xl h-screen flex overflow-hidden"> Set height to fill the screen */}
        
        {/* Form Section (left half) */}
        <div className="w-1/2 p-8 flex flex-col justify-center relative">
          {/* Logo in the top-left corner */}
          <div className=" top-4 left-4 lg:static lg:top-auto lg:left-auto flex justify-center w-full lg:w-auto">
            <img src="/logo.png" alt="Logo" className="h-30 w-30" /> {/* Smaller logo */}
          </div>

          {/* Form fields start here */}
          <h1 className="text-center text-2xl font-bold ">BCA Healthcare </h1>
          <h2 className="text-center text-2xl text-gray-600 mb-6">Sign Up to Connect with Our Medical Professionals </h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Error message display */}
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-600">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#009688] text-white py-2 rounded-md"
            >
              Signup
            </button>
          </form>
          <p className="mt-4 text-center">
            Already have an account? <Link href="/login" className="text-blue-600">Login</Link>
          </p>
        </div>

        {/* Image Section (right half, embedded in the same container) */}
        <div className="w-1/2">
          <img
            src="/signup.png"
            alt="Signup Illustration"
            className="object-cover w-full h-full" /> {/* Image filling the right half */}
        </div>

      {/* </div> */}
    </div>
  );
}
