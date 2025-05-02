import React from "react";

const BannerCounter = ({ count, text }) => {
  return (
    <>
      <div className="w-[212px] h-[106px] bg-banner-count py-4">
        <h2 className="text-[32px] font-semibold font-work-sans text-[#424E60] leading-10 mb-2 text-center">
          {count}
        </h2>
        <p className="text-base font-normal font-work-sans text-[#697484] leading-6 text-center">
          {text}
        </p>
      </div>
    </>
  );
};

export default BannerCounter;
