import React from 'react'

const ServiceCard = ({heading , body}) => {
  return (
      <>
          <div className='max-w-[648px] p-8 shadow-sm border-l-[5px] border-brand-color rounded-md transition-all duration-300'>
              <h3 className='text-2xl font-semibold font-work-sans text-primary mb-4'>{heading}</h3>
              <p className='text-base font-normal font-poppins text-secondary leading-6'>{body}</p>
        </div>
      </>
  )
}

export default ServiceCard