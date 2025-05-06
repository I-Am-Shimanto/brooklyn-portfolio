import React from "react";
import BlogCard from "../components/utils/BlogCard";

const Blog = () => {
  return (
    <>
      <section className="py-[100px]" id="blog">
        <div className="container">
          <h2 className="text-5xl font-semibold font-poppins text-primary leading-[56px] text-center">
            Blog
          </h2>
          <p className="max-w-[540px] text-lg font-normal font-public-sans text-secondary text-center mx-auto mt-6 mb-[70px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
