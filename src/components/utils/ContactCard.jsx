import React from 'react'
import { IoLocationOutline } from "react-icons/io5";


const ContactCard = ({heading , body}) => {
  return (
    <>
      <div className="max-w-[336px] p-6 rounded-[10px]  flex items-center gap-3 hover:shadow-2xl transition-all duration-300 cursor-pointer">
        <div className="p-3 bg-brand-color text-white text-2xl rounded-sm">
          <IoLocationOutline />
        </div>
        <div>
          <p className="text-sm font-normal font-work-sans text-[#424E60] leading-5 mb-1">
            {heading}
          </p>
          <h4 className='text-base font-medium font-work-sans text-primary leading-6'>{body}</h4>
        </div>
      </div>
    </>
  );
}

export default ContactCard