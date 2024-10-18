// pages/index.js
import Link from 'next/link';
import { useState } from 'react';
import { FiChevronDown, FiSearch } from 'react-icons/fi'; // Importing icons

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
    { id: 2, title: "Dental Care", price: "#30,000", image: "/Mental.png ", rating: getRandomRating() },
    { id: 3, title: "Mental Health Care", price: "#20,000", image: "/Mental.png", rating: getRandomRating() },
    { id: 4, title: "Pharmaceutical Care", price: "#15,000", image: "/Mental.png ", rating: getRandomRating() },
    { id: 5, title: "Primary Care", price: "#40,000", image: "/Mental.png", rating: getRandomRating() },
    { id: 6, title: "Secondary Care", price: "#22,000", image: "/Mental.png ", rating: getRandomRating() },
    { id: 7, title: "Tertiary Care", price: "#35,000", image: "/Mental.png", rating: getRandomRating() },
    { id: 8, title: "Hospice Care", price: "#28,000", image: "/Mental.png ", rating: getRandomRating() },
    { id: 9, title: "Rehabilitation Care", price: "#33,000", image: "/Mental.png", rating: getRandomRating() },
    { id: 10, title: "Physical Therapy Care", price: "#19,000", image: "/Mental.png ", rating: getRandomRating() },
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
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-4" />
              <h1 className="text-2xl font-bold text-gray-800">BCA</h1>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-80 focus:outline-none focus:ring focus:ring-blue-200"
              />
              <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
            </div>
          </div>

          {/* Right section: Nav Links */}
          <nav className="flex items-center space-x-10">
            <Link href="/healthcare-provider" className="text-gray-800 hover:underline">
              Healthcare Provider
            </Link>
            <Link href="/about" className="text-gray-800 hover:underline">
              About
            </Link>

            {/* Help Centre with Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-800 hover:underline focus:outline-none"
              >
                Help Centre
                <FiChevronDown className="ml-1" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 text-black">
                  <Link href="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Login
                  </Link>
                  <Link href="/signup" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Signup
                  </Link>
                </div>
              )}
            </div>

            {/* Login Link */}
            <Link href="/login" className="px-4 py-2 bg-[#009688] text-white rounded-md hover:bg-[#00796b]">
              Login
            </Link>

            {/* Signup Link */}
            <Link href="/signup" className="px-4 py-2 bg-[#009688] text-white rounded-md hover:bg-[#00796b]">
              Signup
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content with two containers side by side */}
      <main className="flex-1 flex justify-center items-start px-6 py-10 space-x-8">
        {/* Left container - 30% width with services listed */}
        <div className="w-[30%] bg-white p-6 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Healthcare Services</h2>
          <ul className="space-y-2">
            {services.map(service => (
              <li key={service.id} className="text-gray-800">
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right container - 60% width with your content and image */}
        <div className="w-[60%] bg-white p-6 shadow-md rounded-md flex">
          <div className="flex flex-col justify-center w-2/3">
            <span className="text-[#00BCD4] font-medium text-[48px] block mb-2">
              Changing the ways you receive healthcare.
            </span>
            <span className="text-[#5B5B5B] text-[24px] block mb-4">
              Visit any health care center today, to know yours and stay healthy.
            </span>
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <img
              src="/landing.png"
              alt="Healthcare Illustration"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </main>

      {/* Service Cards Section */}
      <section className="px-6 py-10 flex justify-center">
        <div className="grid grid-cols-3 gap-6">
          {services.map(service => (
            <div key={service.id} className="bg-white shadow-md rounded-md overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                <div className="mt-2 flex items-center">
                  <div className="flex space-x-1">
                    {renderStars(service.rating)}
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-white bg-blue-500 px-2 py-1 rounded-md">
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 w-full text-center">
        <p>© 2024 BCA. All rights reserved.</p>
      </footer>
    </div>
  );
}
