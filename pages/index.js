// pages/index.js
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { useState } from 'react';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to generate a random rating between 1 and 5
  const getRandomRating = () => {
    return (Math.random() * (5 - 1) + 1).toFixed(1); // Random rating with one decimal place
  };

  // Example data for services with random ratings
  const services = [
    { id: 1, title: "Eye Specialists and Consultation", price: "#25,000", image: "/Mental.png", rating: getRandomRating() },
    { id: 2, title: "Dental Care", price: "#30,000", image: "/Mental.png", rating: getRandomRating() },
    { id: 3, title: "Mental Health Care", price: "#20,000", image: "/Mental.png", rating: getRandomRating() },
    { id: 4, title: "Pharmaceutical Care", price: "#15,000", image: "/Mental.png", rating: getRandomRating() },
    { id: 5, title: "Primary Care", price: "#40,000", image: "/Mental.png", rating: getRandomRating() },
    { id: 6, title: "Secondary Care", price: "#22,000", image: "/Mental.png", rating: getRandomRating() },
    { id: 7, title: "Tertiary Care", price: "#35,000", image: "/Mental.png", rating: getRandomRating() },
    { id: 8, title: "Hospice Care", price: "#28,000", image: "/Mental.png", rating: getRandomRating() },
    { id: 9, title: "Rehabilitation Care", price: "#33,000", image: "/Mental.png", rating: getRandomRating() },
    { id: 10, title: "Physical Therapy Care", price: "#19,000", image: "/Mental.png", rating: getRandomRating() },
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-yellow-500 ${i <= rating ? 'fas fa-star' : 'far fa-star'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <header className="bg-white w-full py-4 px-6 shadow-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left section: Logo and Search bar */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-20 w-30 mr-4" />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-80 focus:outline-none focus:ring focus:ring-blue-200"
              />
              <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
            </div>
          </div>

          <nav className="flex items-center space-x-10">
            <Link href="/healthcare-provider" className="text-gray-800 hover:underline">Healthcare Provider</Link>
            <Link href="/about" className="text-gray-800 hover:underline">About</Link>
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center text-gray-800 hover:underline focus:outline-none">
                Help Centre
                <FiChevronDown className="ml-1" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 text-black">
                  <Link href="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</Link>
                  <Link href="/signup" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Signup</Link>
                </div>
              )}
            </div>
            <Link href="/login" className="px-4 py-2 bg-[#009688] text-white rounded-md hover:bg-[#00796b]">Login</Link>
            <Link href="/signup" className="px-4 py-2 bg-[#009688] text-white rounded-md hover:bg-[#00796b]">Signup</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-between items-start px-6 py-10 space-x-8 max-w-7xl mx-auto">
        <div className="w-[20%] bg-white p-6 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Healthcare Services</h2>
          <ul className="space-y-2">
            {services.map(service => (
              <li key={service.id} className="text-gray-800">{service.title}</li>
            ))}
          </ul>
        </div>

        <div className="w-[70%] bg-white p-6 shadow-md rounded-md flex">
          <div className="flex flex-col justify-center w-2/3 text-left">
            <span className="text-[#00BCD4] font-medium text-[48px] mb-2">Changing the ways you receive healthcare.</span>
            <span className="text-[#5B5B5B] text-[24px] mb-4">Visit any health care center today, to know yours and stay healthy.</span>
          </div>
          <div className="w-1/3 flex items-center justify-end">
            <img src="/landing.png" alt="Healthcare Illustration" className="w-full h-auto rounded-md" />
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section className="px-6 py-10 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl">
          {services.map(service => (
            <div key={service.id} className="bg-white shadow-md rounded-md overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                <div className="mt-2 flex items-center justify-end">
                  <div className="flex space-x-1">
                    {renderStars(service.rating)}
                  </div>
                </div>
                <div className="mt-2 text-right">
                  <span className="text-sm text-white bg-blue-500 px-2 py-1 rounded-md">{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Logos Section */}
      <section className="px-6 py-10 flex justify-center">
        <div className="flex justify-between items-center max-w-[85%] bg-white p-6 shadow-md rounded-md w-full">
          <img src="/image1.png" alt="Logo 1" className="h-16 w-auto object-contain mx-2" />
          <img src="/image2.png" alt="Logo 2" className="h-16 w-auto object-contain mx-2" />
          <img src="/image3.png" alt="Logo 3" className="h-16 w-auto object-contain mx-2" />
          <img src="/image4.png" alt="Logo 4" className="h-16 w-auto object-contain mx-2" />
          <img src="/image5.png" alt="Logo 5" className="h-16 w-auto object-contain mx-2" />
        </div>
      </section>
      {/* enquiries section */}
      <section className="px-6 py-10 flex justify-center">
       
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 w-full relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>© 2024 BCA. All rights reserved.</p>

          {/* Social Media Icons */}
          <div className="absolute bottom-4 right-6 flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
