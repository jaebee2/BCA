import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiChevronDown, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getRandomRating = () => (Math.random() * (5 - 1) + 1).toFixed(1);

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

  const renderStars = (rating) => {
    const stars = [];
    const parsedRating = Math.round(parseFloat(rating));
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-yellow-500 ${i <= parsedRating ? 'fas fa-star' : 'far fa-star'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
    <header className="bg-white w-full py-4 px-6 shadow-md">
  <div className="flex items-center justify-between max-w-7xl mx-auto">
    {/* Logo and Search Bar */}
    <div className="flex items-center space-x-4 flex-grow">
      {/* Logo with Left Padding */}
      <div className="pl-[20%]">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Search Bar (Desktop Only) */}
      <div className="relative max-w-md w-full mx-auto"> {/* Centered with max-width */}
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200"
        />
        <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
      </div>
    </div>

    {/* Hamburger Menu for Mobile */}
    <div className="md:hidden">
      <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-gray-800 focus:outline-none">
        <FiChevronDown size={24} />
      </button>
    </div>

    {/* Navbar Links (Desktop Only) */}
    <nav className="hidden md:flex items-center space-x-4">
      <div className="relative flex items-center space-x-8">
        <Link href="/healthcare-provider" className="text-gray-800 hover:underline">Healthcare Provider</Link>
        <Link href="/about" className="text-gray-800 hover:underline">About</Link>
        
        {/* Help Centre with Nested Dropdown */}
        <div className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center text-gray-800 hover:underline focus:outline-none">
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
      </div>

      {/* Login and Signup Buttons */}
      <Link href="/login" className="px-4 py-2 bg-[#00BCD4] text-white rounded-md hover:bg-[#00796b]">Login</Link>
      <Link href="/signup" className="px-4 py-2 bg-[#009688] text-black rounded-md ">Signup</Link>
    </nav>
  </div>

  {/* Dropdown Menu for Mobile */}
  {dropdownOpen && (
    <div className="md:hidden flex flex-col space-y-2 mt-4 bg-white shadow-md p-4 rounded-md">
      {/* Search Bar for Mobile */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200"
        />
        <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
      </div>

      {/* Mobile Links */}
      <Link href="/healthcare-provider" className="text-gray-800 hover:underline">Healthcare Provider</Link>
      <Link href="/about" className="text-gray-800 hover:underline">About</Link>
      <Link href="/login" className="text-gray-800 hover:underline">Login</Link>
      <Link href="/signup" className="text-gray-800 hover:underline">Signup</Link>
    </div>
  )}
</header>





<main className="flex-1 flex flex-col md:flex-row justify-between items-start px-6 py-10 space-y-8 md:space-y-0 md:space-x-8 max-w-7xl mx-auto px-4 md:px-[20%]">
        <div className="w-full md:w-1/3 lg:w-1/5 bg-white p-6 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Healthcare Services</h2>
          <ul className="space-y-2">
            {services.map(service => (
              <li key={service.id} className="text-gray-800">{service.title}</li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-2/3 lg:w-4/5 bg-white p-6 shadow-md rounded-md flex flex-col md:flex-row items-center md:items-start">
          <div className="flex flex-col justify-center text-left md:w-2/3 space-y-4">
            <span className="text-[#00BCD4] font-medium text-2xl md:text-4xl lg:text-5xl">
              Changing the ways you receive healthcare.
            </span>
            <span className="text-[#5B5B5B] text-lg md:text-xl lg:text-2xl">
              Visit any healthcare center today, to know yours and stay healthy.
            </span>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
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
                  <div className="flex space-x-1">{renderStars(service.rating)}</div>
                </div>
                <div className="mt-2 text-right">
                  <span className="text-sm text-white bg-[#00BCD4] px-2 py-1 rounded-md">{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Logos Section */}
      <section className="px-4 py-10 flex justify-center">
  <div className="flex flex-wrap justify-center items-center max-w-full md:max-w-[85%] bg-white p-6 shadow-md rounded-md w-full">
    <img src="/image1.png" alt="Logo 1" className="h-16 w-auto object-contain mx-2 my-2" />
    <img src="/image2.png" alt="Logo 2" className="h-16 w-auto object-contain mx-2 my-2" />
    <img src="/image3.png" alt="Logo 3" className="h-16 w-auto object-contain mx-2 my-2" />
    <img src="/image4.png" alt="Logo 4" className="h-16 w-auto object-contain mx-2 my-2" />
    <img src="/image5.png" alt="Logo 5" className="h-16 w-auto object-contain mx-2 my-2" />
  </div>
</section>


      {/* Organizations Section */}
      <section className="container mx-auto p-4 overflow-hidden">
  <div className="flex flex-col md:flex-row flex-wrap justify-between items-center space-y-4 md:space-y-0 w-full">
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 w-full md:w-auto text-center md:text-left">
      <div className="text-section w-full md:w-auto">
        <span className="text-lg font-semibold">Organizations</span>
        <span className="block break-words">Consultancy</span>
        <span className="block break-words">Specialization</span>
        <span className="block break-words">Health Care Services</span>
      </div>
      <div className="text-section w-full md:w-auto">
        <span className="text-lg font-semibold">FAQ</span>
        <span className="block break-words">Reviews</span>
        <span className="block break-words">Referrals</span>
        <span className="block break-words">Partnership</span>
      </div>
      <div className="text-section w-full md:w-auto">
        <span className="text-lg font-semibold">Contact</span>
        <span className="block break-words">+234 808 3440 931</span>
        <span className="block break-words">info@bcahealth.com</span>
        <span className="block break-words">www.bcahealth.com</span>
      </div>
    </div>
    <div className="name flex flex-col mt-6 md:mt-0 text-center md:text-left w-full md:w-auto">
      <span className="text-lg font-semibold">Support</span>
      <span className="block break-words">Help Center</span>
      <span className="block break-words">Contact</span>
      <span className="mt-4 break-words">
        Every individual has a right to life and good health. Our goal is to ensure that you live a healthy life.
      </span>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-[#00BCD4] text-white py-6 w-full relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>© 2024 BCA. All rights reserved.</p>

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
