import React from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";


const PortfolioCard = ({ image, top, heading, body, button }) => {
  return (
    <>
      <div className="rounded-lg max-w-[424px] shadow-xl mt-6">
        <img src={image} alt="" />
        <div className="p-8 bg-white">
          <h4 className="text-xs font-medium font-work-sans text-[#87909D] leading-4">
            {top}
          </h4>
          <h3 className="text-lg font-semibold font-work-sans text-primary leading-6 mt-1 mb-3">
            {heading}
          </h3>
          <p className="w-3/4 text-sm font-normal font-work-sans text-secondary leading-5 mb-5">
            {body}
          </p>
          <Link
            className="w-fit py-3 px-6 border border-brand-color hover:bg-black hover:text-white duration-300 rounded-sm text-base font-semibold font-work-sans text-brand-color leading-8"
            to="/"
          >
            <p className="flex items-center gap-3">
              {button}
              <span>
                <FaArrowRight />
              </span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
