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
      <header className="bg-white w-full py-4 px-[120px] shadow-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo and Search Bar */}
          <div className="flex items-center space-x-4 flex-grow">
            {/* Logo with Left Padding */}
            <div>
              <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Search Bar (Desktop Only) */}
            <div className="relative max-w-md w-full mx-auto"> {/* Centered with max-width */}
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300  w-full focus:outline-none focus:ring focus:ring-blue-200"
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
          <nav className="hidden md:flex items-center space-x">
            <div className="relative flex items-center space-x-5">
              <Link href="/healthcare-provider" className="text-gray-800 hover:underline">Healthcare Provider</Link>
              <Link href="/about" className="text-gray-800 hover:underline">About</Link>

              {/* Help Centre with Nested Dropdown */}
              <div className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center text-gray-800 hover:underline focus:outline-none">
                  Help Centre
                  <FiChevronDown className="ml-1" />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg  py-2 text-black">
                    <Link href="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</Link>
                    <Link href="/signup" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Signup</Link>
                  </div>
                )}
              </div>
            </div>

            {/* Login and Signup Buttons */}
            <Link href="/login" className="px-4 py-2 bg-[#00BCD4] text-white  hover:bg-[#00796b]">Login</Link>
            <Link href="/signup" className="px-4 py-2 text-black  ">Signup</Link>
          </nav>
        </div>

        {/* Dropdown Menu for Mobile */}
        {dropdownOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-4 bg-white shadow-md p-4 ">
            {/* Search Bar for Mobile */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300  w-full focus:outline-none focus:ring focus:ring-blue-200"
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



      <main className="flex flex-col md:flex-row justify-center gap-[30px]  max-w-[1000px] mx-auto py-10 h-full">
        {/* First Section: Sidebar with 20% Width */}
        <div className=" max-md:hidden  w-full md:w-[20%] bg-white p-6 shadow-md h-[400px] overflow-auto ">
          <div className="text-xl font-semibold mb-4 "></div>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.id} className="text-gray-800">{service.title}</li>
            ))}
          </ul>
        </div>

        {/* Second Section: Main Content with 70% Width */}
        <div className="w-full max-md:w-full md:w-[80%] relative bg-white p-6 shadow-md h-[400px]  flex flex-col md:flex-row items-center md:items-start">
          {/* Text Section */}
          <div className="flex flex-col justify-center text-left md:w-2/3 space-y-4 px">
            <span className="text-[#00BCD4] font-large text-3xl md:text-2xl lg:text-4xl">
              Changing the  ways you receive healthcare.
            </span>
            <span className="text-[#5B5B5B] text-lg md:text-xl lg:text-2xl">
              Visit any healthcare center today, to know yours and stay healthy.
            </span>
            <Link href="/login" className="w-32 px-4 py-2 bg-[#009688] text-white hover:bg-[#00796b] text-center rounded-md">
              Get Started
            </Link>
          </div>

          {/* Image Section */}
          {/* <div className="h-[300px] "> */}
            <img src="/landing.png" alt="Healthcare Illustration" height={545} width={300} className="max-[827px]:hidden  absolute bottom-0 right-0 " />
          {/* </div> */}
        </div>
      </main>





      {/* Services Section */}
      <section className="px-4 py-6 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-7xl">
          {services.map(service => (
            <div key={service.id} className="bg-white shadow-md  overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                <div className="mt-2 flex items-center justify-end">
                  <div className="flex space-x-1">{renderStars(service.rating)}</div>
                </div>
                <div className="mt-2 text-right">
                  <span className="text-sm text-white bg-[#00BCD4] px-2 py-1 ">{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-9 py-5 flex justify-center">
        <div className="flex overflow-auto justify-center items-center gap-20 max-w-full md:max-w-[85%] bg-white p-4 shadow-md  w-full">
          <img src="/image1.png" alt="Logo 1" className="h-16 w-auto object-contain" />
          <img src="/image2.png" alt="Logo 2" className="h-16 w-auto object-contain" />
          <img src="/image3.png" alt="Logo 3" className="h-16 w-auto object-contain" />
          <img src="/image4.png" alt="Logo 4" className="h-16 w-auto object-contain" />
          <img src="/image5.png" alt="Logo 5" className="h-16 w-auto object-contain" />
        </div>
      </section>
      <div className="bg-white  py-3 w-full relative">
        <section className="container mx-auto p-4 flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6 ">

          {/* Logo and Description */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <img src="/logo.png" alt="BCA Health Logo" className="mb-2" />
            <span>Every individual has a right to life and good health. Our goal is to ensure that you live a healthy life.</span>
          </div>

          {/* Info Sections */}
          <div className="flex flex-col md:flex-row flex-1 justify-between w-full">
            <div className="flex flex-col md:flex-row flex-1 space-x-0 md:space-x-6 w-full md:w-auto text-center md:text-left">

              {/* Organizations */}
              <div className="text-section flex-1">
                <h3 className="text-lg font-semibold">Organizations</h3>
                <span className="block">Consultancy</span>
                <span className="block">Specialization</span>
                <span className="block">Health Care Services</span>
              </div>

              {/* FAQ */}
              <div className="text-section flex-1">
                <h3 className="text-lg font-semibold">FAQ</h3>
                <span className="block">Reviews</span>
                <span className="block">Referrals</span>
                <span className="block">Partnership</span>
              </div>

              {/* Contact */}
              <div className="text-section flex-1">
                <h3 className="text-lg font-semibold">Contact</h3>
                <span className="block">+234 808 3440 931</span>
                <a href="mailto:info@bcahealth.com" className="block text-blue-600">info@bcahealth.com</a>
                <a href="https://www.bcahealth.com" target="_blank" rel="noopener noreferrer" className="block text-blue-600">www.bcahealth.com</a>
              </div>

              {/* Support */}
              <div className="text-section flex-1">
                <h3 className="text-lg font-semibold">Support</h3>
                <span className="block">Help Center</span>
                <span className="block">Contact</span>
              </div>
            </div>
          </div>
        </section>
      </div>




      <footer className="bg-[#00BCD4] text-white py-3 w-full relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>© 2024 BCA. All rights reserved.</p>

          <div className="absolute bottom-2 right-6 flex space-x-4">
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
