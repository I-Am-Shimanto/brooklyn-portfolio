import React from 'react'
import {Link} from 'react-router'
import PrimaryBtn from '../utils/PrimaryBtn'

const Navbar = () => {
  return (
    <>
      <nav className="py-5 bg-white">
        <div className="container flex justify-between items-center">
          <div className="logo">
            <Link to="/">
              <img src="images/Logo.png" alt="Logo" />
            </Link>
          </div>
          <ul className='flex items-center text-base font-medium font-work-sans text-nav-color'>
            <li>
              <Link className='px-6 py-3' to="/">Home</Link>
            </li>
            <li>
              <Link className='px-6 py-3' to="/about">About</Link>
            </li>
            <li>
              <Link className='px-6 py-3' to="/process">Process</Link>
            </li>
            <li>
              <Link className='px-6 py-3' to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link className='px-6 py-3' to="/blog">Blog</Link>
            </li>
            <li>
              <Link className='px-6 py-3' to="/services">Services</Link>
            </li>
          <PrimaryBtn path="/contact" title="Contact" />
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar