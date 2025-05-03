import React from 'react'

const ProcessCard = ({image , heading , body}) => {
  return (
    <>
          <div className='w-xs p-8 bg-white rounded-xl'>
              <img src={image} alt="images" />
              <h3 className='text-xl font-semibold font-work-sans text-primary leading-6 mt-8 mb-3'>{heading}</h3>
              <p className='text-base font-normal font-work-sans text-secondary leading-6'>{body}</p>
        </div>
    </>
  )
}

export default ProcessCard