import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="pt-[192px] pb-[82px] bg-[#2B384C] -z-20">
        <div className="container">
          <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-between">
            <div className="logo">
              <Link>
                <img src="images/Logo_footer.png" alt="" />
              </Link>
            </div>
            <ul className="flex items-center flex-wrap text-base font-normal font-work-sans text-[#F0F1F3] leading-6">
              <li className="p-3">
                <Link to="/">Home</Link>
              </li>
              <li className="p-3">
                <Link to="/about">About</Link>
              </li>
              <li className="p-3">
                <Link to="/services">Services</Link>
              </li>
              <li className="p-3">
                <Link to="/process">Process</Link>
              </li>
              <li className="p-3">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="p-3">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="p-3">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <p className="text-base font-normal font-work-sans text-[#F0F1F3] leading-6">
              Copyright © 2022 Picto.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
