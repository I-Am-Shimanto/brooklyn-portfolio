import React from "react";
import BlogCard from "../components/utils/BlogCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "../components/utils/SliderBtn";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <NextArrow styling="absolute top-1/2 -right-5 -translate-y-1/2" />
    ),
    prevArrow: (
      <PrevArrow styling="absolute top-1/2 -left-5 -translate-y-1/2" />
    ),
    appendDots: (dots) => (
      <div>
        <ul className="flex gap-5 justify-center"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-5 h-5 bg-brand-color rounded-full cursor-pointer"></div>
    ),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-[100px] overflow-hidden" id="blog">
        <div className="container">
          <h2 className="text-5xl font-semibold font-poppins text-primary leading-[56px] text-center">
            Blog
          </h2>
          <p className="max-w-[540px] text-lg font-normal font-public-sans text-secondary text-center mx-auto mt-6 mb-[70px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <div className="slider-container">
            <Slider {...settings}>
              <BlogCard
                image="images/blog1.png"
                heading="22 Oct, 2020 / 246 Comments"
                body="Lorem ipsum dolor sit consea. Nulla purus arcu"
              />
              <BlogCard
                image="images/blog2.png"
                heading="22 Oct, 2020 / 246 Comments"
                body="Lorem ipsum dolor sit consea. Nulla purus arcu"
              />
              <BlogCard
                image="images/blog3.png"
                heading="22 Oct, 2020 / 246 Comments"
                body="Lorem ipsum dolor sit consea. Nulla purus arcu"
              />
              <BlogCard
                image="images/blog4.png"
                heading="22 Oct, 2020 / 246 Comments"
                body="Lorem ipsum dolor sit consea. Nulla purus arcu"
              />
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
