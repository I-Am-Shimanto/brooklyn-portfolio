import React, { useState } from 'react'
import PrimaryBtn from '../utils/PrimaryBtn'
import { HiBars3CenterLeft } from 'react-icons/hi2'
import { Link } from 'react-router'

const Navbar = () => {

  const [open, setOpen] = useState(true)
  console.log(open)

  return (
    <>
      <nav className="py-5 bg-white">
        <div className="container flex justify-between items-center">
          <div className="logo">
            <Link to="/">
              <img src="images/Logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center text-base font-medium font-work-sans text-nav-color">
              <li>
                <Link
                  className="px-6 py-3 hover:text-brand-color duration-300 hover:scale-125"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="px-6 py-3 hover:text-brand-color duration-300 hover:scale-125"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="px-6 py-3 hover:text-brand-color duration-300 hover:scale-125"
                  to="/process"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  className="px-6 py-3 hover:text-brand-color duration-300 hover:scale-125"
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="px-6 py-3 hover:text-brand-color duration-300 hover:scale-125"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="px-6 py-3 hover:text-brand-color duration-300 hover:scale-125"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <PrimaryBtn path="/contact" title="Contact" />
            </ul>
          </div>
    
            <HiBars3CenterLeft
              className="lg:hidden cursor-pointer z-50 rounded-xl text-2xl hover:text-brand-color hover:scale-125 duration-300"
              onClick={() => setOpen(!open)}
            />
            <div className={`absolute top-10 right-20 mt-10 ${open ? "hidden" : "block"}`}>
              <ul className={`flex flex-col items-start justify-start bg-gray-400 px-20 py-5 rounded-2xl text-base font-medium font-work-sans text-nav-color`}>
                <li>
                  <Link
                    className="px-6 py-3 hover:text-brand-color duration-300 hover:scale-125"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-6 py-3 hover:text-brand-color duration-300 hover:scale-125"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-6 py-3 hover:text-brand-color duration-300 hover:scale-125"
                    to="/process"
                  >
                    Process
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-6 py-3 hover:text-brand-color duration-300 hover:scale-125"
                    to="/portfolio"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-6 py-3 hover:text-brand-color duration-300 hover:scale-125"
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-6 py-3 hover:text-brand-color duration-300 hover:scale-125"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>
                <PrimaryBtn path="/contact" title="Contact" />
              </ul>
            </div>
      
        </div>
      </nav>
    </>
  );
}

export default Navbar