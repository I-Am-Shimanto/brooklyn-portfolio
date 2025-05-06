import React from "react";
import PortfolioCard from "../components/utils/PortfolioCard";
import PrimaryBtn from "../components/utils/PrimaryBtn";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="my-[100px]">
        <div className="container">
          <h2 className="text-5xl font-work-sans font-semibold text-primary leading-14 text-center">
            Portfolio
          </h2>
          <p className="max-w-[577px] text-lg font-work-sans font-normal text-secondary leading-6 text-center mx-auto mt-6 mb-[46px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <div className="cards grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <PortfolioCard
              image="images/portfolio1.png"
              top="UI-UX DESIGN"
              heading="Product Admin Dashboard"
              body="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
              button="Case Study"
            />
            <PortfolioCard
              image="images/portfolio2.png"
              top="UI-UX DESIGN"
              heading="Product Admin Dashboard"
              body="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
              button="Case Study"
            />
            <PortfolioCard
              image="images/portfolio3.png"
              top="UI-UX DESIGN"
              heading="Product Admin Dashboard"
              body="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
              button="Case Study"
            />
            <PortfolioCard
              image="images/portfolio4.png"
              top="UI-UX DESIGN"
              heading="Product Admin Dashboard"
              body="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
              button="Case Study"
            />
            <PortfolioCard
              image="images/portfolio5.png"
              top="UI-UX DESIGN"
              heading="Product Admin Dashboard"
              body="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
              button="Case Study"
            />
            <PortfolioCard
              image="images/portfolio6.png"
              top="UI-UX DESIGN"
              heading="Product Admin Dashboard"
              body="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
              button="Case Study"
            />
          </div>
          <div className="text-center mt-[50px]">
            <PrimaryBtn title="More Project" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
