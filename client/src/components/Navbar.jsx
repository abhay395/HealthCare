import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo Section */}
      <Link to="/" className="text-2xl font-bold tracking-wide hover:text-blue-300">
        HealthCare
      </Link>
      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/appointment"
            className="hover:bg-blue-800 transition duration-200 ease-in-out p-2 rounded-lg"
          >
            Appointments
          </Link>
        </li>
        <li>
          <Link
            to="/doctor"
            className="hover:bg-blue-800 transition duration-200 ease-in-out p-2 rounded-lg"
          >
            Doctors
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="hover:bg-blue-800 transition duration-200 ease-in-out p-2 rounded-lg"
          >
            Patients
          </Link>
        </li>
      </ul>
      {/* Mobile Menu Button */}
      {/* <div className="md:hidden">
        <button className="text-white focus:outline-none focus:ring-2 focus:ring-blue-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div> */}
    </div>
  </nav>
  
  )
}

export default Navbar