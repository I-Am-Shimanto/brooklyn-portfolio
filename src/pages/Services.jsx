import React from 'react'
import PrimaryBtn from '../components/utils/PrimaryBtn'
import ServiceCard from '../components/utils/ServiceCard'


const Services = () => {
  return (
    <>
      <section className="py-[150px] bg-[#F0F1F3]" id="user">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text mb-10 md:mb-0">
              <h2 className="text-5xl font-semibold font-work-sans text-nav-color leading-14 mb-6">
                What I do?
              </h2>
              <p className="max-w-[529px] text-lg font-normal font-work-sans text-[#87909D] leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
              </p>
              <p className="max-w-[529px] text-lg font-normal font-work-sans text-[#87909D] leading-6 mt-4 mb-[50px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non.
              </p>
              <PrimaryBtn title="Say Hello!" />
            </div>
            <div className="cards flex flex-col gap-6">
              <ServiceCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services