import React from 'react'

const ServiceCard = () => {
  return (
    <>
      <div className="collapse collapse-arrow max-w-[648px] p-8 shadow-sm rounded-md transition-all duration-300 border-l-[5px] border-transparent [&:has(input:checked)]:border-l-brand-color">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-2xl font-semibold font-work-sans text-primary">
          <h2>User Experience (UX)</h2>
        </div>
        <div className="collapse-content text-base font-normal font-poppins text-secondary leading-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum.z
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow max-w-[648px] p-8 shadow-sm rounded-md transition-all duration-300 border-l-[5px] border-transparent [&:has(input:checked)]:border-l-brand-color">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-semibold font-work-sans text-primary">
          <h2>User Interface (UI)</h2>
        </div>
        <div className="collapse-content text-base font-normal font-poppins text-secondary leading-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum.z
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow max-w-[648px] p-8 shadow-sm rounded-md transition-all duration-300 border-l-[5px] border-transparent [&:has(input:checked)]:border-l-brand-color">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-semibold font-work-sans text-primary">
          <h2>Web Development</h2>
        </div>
        <div className="collapse-content text-base font-normal font-poppins text-secondary leading-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum.z
          </p>
        </div>
      </div>
    </>
  );
}

export default ServiceCard