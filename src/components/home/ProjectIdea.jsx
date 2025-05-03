import React from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const ProjectIdea = () => {
  return (
    <>
      <section className="bg-primary py-[100px]" id="projectidea">
        <div className="container">
          <h2 className="max-w-[621px] text-5xl font-work-sans font-semibold text-white leading-14 text-center mx-auto">
            Do you have Project Idia? Let's discuss your project!
          </h2>
          <p className="max-w-[621px] text-lg font-normal font-work-sans text-secondary leading-6 my-8 text-center mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <div className="text-center">
            <Link
              className="py-3 pl-6 pr-[30px] bg-brand-color text-white text-base font-semibold font-work-sans leading-6"
              to="/"
            >
              <p className="flex items-center gap-3">
                Let’s work Together <FaArrowRight />
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectIdea;
