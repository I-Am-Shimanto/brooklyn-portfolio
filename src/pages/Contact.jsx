import React, { useState } from "react";
import ContactCard from "../components/utils/ContactCard";
import { FaFacebookF } from "react-icons/fa";
import { IoIosBasketball } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { LiaLocationArrowSolid } from "react-icons/lia";
import { Link } from "react-router";

const Contact = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [location, setLocation] = useState("");
  const [locationErr, setLocationErr] = useState("");
  const [budget, setBudget] = useState("");
  const [budgetErr, setBudgetErr] = useState("");
  const [message, setMessage] = useState("");
  const [messageErr, setMessageErr] = useState("");
  const [submit, setSubmit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameErr("Enter Your Name!");
    } else if (!email) {
      setEmailErr("Enter Your Email!");
    } else if (!location) {
      setLocationErr("Enter Your Location!");
    } else if (!budget) {
      setBudgetErr("Enter Your Budget!");
    } else if (!message) {
      setMessageErr("Enter Your Message!");
    } else {
      setSubmit("Submitted!");
      setName("")
      setEmail("")
      setLocation("")
      setBudget("")
      setMessage("")
    }
  };

  return (
    <>
      <section className="mt-[100px]" id="contact">
        <div className="container p-[88px] rounded-2xl shadow-2xl">
          <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-center">
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
                {nameErr && <p className="text-base font-semibold text-red-500">{nameErr}</p>}
                <input
                  className="w-full h-[38px] outline-none border-b-[2px] border-brand-color mb-2"
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameErr("");
                  }}
                  value={name}
                  type="text"
                  placeholder="Name*"
                />
                {emailErr && <p className="text-base font-semibold text-red-500">{emailErr}</p>}
                <input
                  className="w-full h-[38px] outline-none border-b-[2px] border-brand-color mb-2"
                  onChange={(e) => {
                    setEmail(e.target.value), setEmailErr("");
                  }}
                  value={email}
                  type="email"
                  placeholder="Email*"
                />
                {locationErr && <p className="text-base font-semibold text-red-500">{locationErr}</p>}
                <input
                  className="w-full h-[38px] outline-none border-b-[2px] border-brand-color mb-2"
                  onChange={(e) => {
                    setLocation(e.target.value), setLocationErr("");
                  }}
                  value={location}
                  type="text"
                  placeholder="Location"
                />
                {budgetErr && <p className="text-base font-semibold text-red-500">{budgetErr}</p>}
                <input
                  className="w-full h-[38px] outline-none border-b-[2px] border-brand-color mb-2"
                  onChange={(e) => {
                    setBudget(e.target.value), setBudgetErr("");
                  }}
                  value={budget}
                  type="number"
                  placeholder="Budget*"
                />
                {messageErr && <p className="text-base font-semibold text-red-500">{messageErr}</p>}
                <textarea
                  className="w-full h-12 outline-none border-b-2 border-brand-color mb-12"
                  onChange={(e) => {
                    setMessage(e.target.value), setMessageErr("");
                  }}
                  value={message}
                  placeholder="Message*"
                ></textarea>
                {submit && <p className="text-black font-bold font-work-sans text-2xl">{submit}</p>}
                <div>
                  <button className="px-6 py-3 bg-brand-color text-white flex gap-3 items-center cursor-pointer rounded-sm text-base font-semibold font-work-sans leading-6">
                    Submit{" "}
                    <LiaLocationArrowSolid className="rotate-90 text-2xl" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
