import React from "react";
import ProcessCard from "../components/utils/ProcessCard";

const Process = () => {
  return (
    <>
      <section id="process" className="bg-[#F0F1F3]">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between pt-20 lg:pt-[248px] pb-[140px]">
            <div className="text max-w-[529px] mt-[180px]">
              <h2 className="text-5xl font-semibold font-work-sans text-primary leading-14">
                Work Process
              </h2>
              <p className="text-lg font-normal font-work-sans text-secondary leading-6 mt-6 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
              </p>
              <p className="text-lg font-normal font-work-sans text-secondary leading-6 mt-6 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex flex-col gap-6">
                <ProcessCard
                  image="images/process1.png"
                  heading="1. Research"
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                />
                <ProcessCard
                  image="images/process3.png"
                  heading="3. Design"
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                />
              </div>
              <div className="flex flex-col gap-6 mt-6">
                <ProcessCard
                  image="images/process2.png"
                  heading="2. Analyze"
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                />
                <ProcessCard
                  image="images/process4.png"
                  heading="4. Launch"
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
