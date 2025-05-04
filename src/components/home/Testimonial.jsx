import React from "react";

const Testimonial = () => {
  return (
    <>
      <section className="mt-[100px]" id="testimonial">
        <div className="container">
          <h2 className="text-5xl font-semibold font-work-sans text-nav-color leading-14 text-center">
            Testimonial
          </h2>
          <p className="max-w-[577px] mx-auto text-center text-lg font-normal font-work-sans text-[#87909D] leading-6 mt-6 mb-[70px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <h4 className="max-w-[872px] text-lg font-medium font-work-sans text-[#2B384C] leading-6 text-center mx-auto">
            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
            felis turpis, nec semper odio convallis at. Curabitur imperdiet
            semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh.
            Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
            Morbi ornare elit at libero suscipit porta.”
          </h4>
          <h3 className="text-lg font-medium font-poppins text-black leading-6 text-center mt-6 mb-2">Esther Howard</h3>
          <h5 className="text-base font-light font-poppins text-black leading-6 text-center">Managing Director, ABC company</h5>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
