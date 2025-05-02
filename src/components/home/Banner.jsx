import React from "react";
import PrimaryBtn from "../utils/PrimaryBtn";
import BannerCounter from "../utils/BannerCounter";

const Banner = () => {
  return (
    <>
      <section id="banner" className="mt-32">
        <div className="container">
          <div className="flex justify-between">
            <div>
              <h1 className="max-w-[578px] text-7xl font-semibold font-work-sans text-primary leading-[84px] mt-[52px]">
                Hello, I’m Brooklyn Gilbert
              </h1>
              <p className="max-w-[648px] text-lg font-normal font-work-sans text-secondary leading-6 py-6">
                I'm a Freelance{" "}
                <span className="text-primary">UI/UX Designer</span> and{" "}
                <span className="text-primary">Developer</span> based in London,
                England. I strives to build immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </p>
              <PrimaryBtn path="/" title="Say Hello!" />
              <div className="flex gap-1 mt-36">
                <BannerCounter count="15 Y." text="Experience" />
                <BannerCounter count="250+" text="Project Completed" />
                <BannerCounter count="58" text="Happy Client" />
              </div>
            </div>
            <div>
              <img
                className="rounded-3xl"
                src="images/banner1.png"
                alt="banner"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
