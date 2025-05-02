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
              <Link className='px-6 py-3' to="/">About</Link>
            </li>
            <li>
              <Link className='px-6 py-3' to="/">Process</Link>
            </li>
            <li>
              <Link className='px-6 py-3' to="/">Portfolio</Link>
            </li>
            <li>
              <Link className='px-6 py-3' to="/">Blog</Link>
            </li>
            <li>
              <Link className='px-6 py-3' to="/">Services</Link>
            </li>
          <PrimaryBtn path="/" title="Contact" />
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar