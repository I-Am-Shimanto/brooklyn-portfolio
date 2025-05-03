import React from 'react'

const Blog = () => {
  return (
    <>
      <section className="py-[100px]" id="blog">
        <div className="container">
          <h2 className="text-5xl font-semibold font-poppins text-primary leading-[56px] text-center">
            Blog
          </h2>
          <p className='max-w-[540px] text-lg font-normal font-public-sans text-secondary text-center mx-auto mt-6 mb-[70px]'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
      </section>
    </>
  );
}

export default Blog