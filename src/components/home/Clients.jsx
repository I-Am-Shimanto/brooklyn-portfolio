import React from "react";

const Clients = () => {
  return (
    <>
      <section className="mt-[100px]" id="client">
        <div className="container">
          <h2 className="text-5xl font-semibold font-work-sans text-primary leading-14 text-center">
            Happy Clients
          </h2>
          <p className="max-w-[577px] text-lg font-normal font-work-sans text-secondary text-center leading-6 my-6 mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <div className="brands grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            <img
              className="cursor-pointer"
              src="images/google.png"
              alt="google"
            />
            <img
              className="cursor-pointer"
              src="images/dribbble.png"
              alt="dribbble"
            />
            <img
              className="cursor-pointer"
              src="images/linkedin.png"
              alt="linkedin"
            />
            <img
              className="cursor-pointer"
              src="images/amazon.png"
              alt="amazon"
            />
            <img
              className="cursor-pointer"
              src="images/medium.png"
              alt="medium"
            />
            <img
              className="cursor-pointer"
              src="images/spotify.png"
              alt="spotify"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
