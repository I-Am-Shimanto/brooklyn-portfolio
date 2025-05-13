import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function NextArrow({ styling, onClick }) {
  return (
    <div
      className={`${styling} w-10 h-10 bg-brand-color rounded-full flex justify-center items-center text-white cursor-pointer hover:bg-primary transition-all duration-300 z-50`}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
}

function PrevArrow({ styling, onClick }) {
  return (
    <div
      className={`${styling} w-10 h-10 bg-brand-color rounded-full flex justify-center items-center text-white cursor-pointer hover:bg-primary transition-all duration-300 z-50`}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
}

export { NextArrow, PrevArrow };
