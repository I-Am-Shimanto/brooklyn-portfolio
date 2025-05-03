import React from "react";
import { Link } from "react-router"
import { RxDownload } from "react-icons/rx";


const SecondBtn = ({ path, title }) => {
  return (
    <>
      <Link
        className="py-3 px-6 bg-white text-base font-semibold text-brand-color font-poppins leading-6 rounded-sm border-1 border-brand-color hover:shadow-md transition-all duration-300"
        to={path}
      >
        <p className="flex items-center gap-3">
          <RxDownload />
          {title}
        </p>
      </Link>
    </>
  );
};

export default SecondBtn;
