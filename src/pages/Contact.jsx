import React, { useState } from "react";
import ContactCard from "../components/utils/ContactCard";
import { FaFacebookF } from "react-icons/fa";
import { IoIosBasketball } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { Link } from "react-router";

const Contact = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameErr("Enter Your Name!");
    } else if (!email) {
      setEmailErr("Enter Your Email!");
    }
  };

  return (
    <>
      <section className="mt-[100px]" id="contact">
        <div className="container p-[88px] rounded-2xl shadow-2xl">
          <div className="flex justify-between items-center">
            <div className="text max-w-[481px]">
              <h2 className="text-[38px] font-semibold font-work-sans text-primary leading-[50px]">
                Let’s discuss your Project
              </h2>
              <p className="text-lg font-normal font-work-sans text-secondary leading-6 mt-4 mb-9">
                There are many variations of passages of Lorem Ipsu available.
                but the majority have suffered alte.
              </p>
              <div className="flex flex-col gap-3">
                <ContactCard heading="Address :" body="New Mexico 31134" />
                <ContactCard heading="My Email:" body="mymail@mail.com" />
                <ContactCard heading="Call Me Now:" body="00-1234 00000" />
              </div>
              <div className="flex p-3 bg-white w-fit rounded-sm mt-9">
                <Link
                  className="p-4 text-lg text-white bg-brand-color rounded-sm"
                  to="/"
                >
                  <FaFacebookF />
                </Link>
                <Link className="p-4 text-lg text-brand-color" to="/">
                  <IoIosBasketball />
                </Link>
                <Link className="p-4 text-lg text-brand-color" to="/">
                  <FaInstagram />
                </Link>
                <Link className="p-4 text-lg text-brand-color" to="/">
                  <FaLinkedinIn />
                </Link>
                <Link className="p-4 text-lg text-brand-color" to="/">
                  <FaBehance />
                </Link>
              </div>
            </div>
            <div className="forms max-w-[560px]">
              <p className="text-lg font-normal font-work-sans text-[#87909D] leading-6 mt-[26p] mb-[50px]">
                There are many variations of passages of Lorem Ipsu available,
                but the majority have suffered alte.
              </p>
              <form onSubmit={handleSubmit} action="">
                {nameErr && <p>{nameErr}</p>}
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameErr("");
                  }}
                  type="text"
                  placeholder="Name*"
                />
                {
                  emailErr &&
                  <p>{emailErr}</p>
                }
                <input
                  onChange={(e) => {
                    setEmail(e.target.value), setEmailErr("");
                  }}
                  type="email"
                  placeholder="Email*"
                />
                {}
                <input type="text" placeholder="Location" />
                {}
                <input type="text" placeholder="Budget*" />
                {}
                <input type="text" placeholder="Subject*" />
                {}
                <textarea>Message*</textarea>
                {}
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
