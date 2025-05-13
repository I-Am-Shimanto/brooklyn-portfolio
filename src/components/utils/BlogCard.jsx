import React from 'react'

const BlogCard = ({image , heading , body}) => {
  return (
    <>
      <div className="w-full rounded-lg cursor-pointer px-5">
        <img className='w-full' src={image} alt="" />
        <div className="p-6">
          <h4 className="text-sm font-normal font-work-sans text-[#87909D] leading-5 mb-2">
            {heading}
          </h4>
          <h3 className='text-lg font-medium font-work-sans text-nav-color leading-6'>{body}</h3>
        </div>
      </div>
    </>
  );
}

export default BlogCard