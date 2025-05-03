import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoIosBasketball } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { Link } from "react-router";
import PrimaryBtn from "../components/utils/PrimaryBtn"
import SecondBtn from "../components/utils/SecondBtn"

const About = () => {
  return (
    <>
      <section id="about" >
        <div className="container">
          <div className="flex justify-between p-28 bg-white rounded-2xl translate-y-28">
            <div className="img">
              <img src="images/about_image.png" alt="about_image" />
              <div className="flex p-3 bg-white w-fit rounded-sm mx-auto -translate-y-9">
                <Link className="p-4 text-lg text-brand-color" to="/">
                  <FaFacebookF />
                </Link>
                <Link className="p-4 text-lg text-brand-color" to="/">
                  <IoIosBasketball />
                </Link>
                <Link className="p-4 text-lg text-brand-color" to="/">
                  <FaInstagram />
                </Link>
                <Link
                  className="p-4 text-lg text-white bg-brand-color rounded-sm"
                  to="/"
                >
                  <FaLinkedinIn />
                </Link>
                <Link className="p-4 text-lg text-brand-color" to="/">
                  <FaBehance />
                </Link>
              </div>
            </div>
            <div className="text max-w-[536px] mt-[76px]">
              <h2 className="text-4xl font-semibold font-work-sans text-primary leading-12">
                I am Professional User Experience Designer
              </h2>
              <p className="text-lg font-normal font-work-sans text-secondary leading-6 mt-8">
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences.
              </p>
              <p className="text-lg font-normal font-work-sans text-secondary leading-6 mt-4 mb-8">
                I design and develop services for customers specializing
                creating stylish, modern websites, web services.
              </p>
              <div className="flex items-center gap-4">
                <PrimaryBtn path="/" title="My Project" />
                <SecondBtn path="/" title="Download CV" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
