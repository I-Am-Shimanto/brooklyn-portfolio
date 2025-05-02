import React from 'react'
import { Link } from 'react-router'

const PrimaryBtn = ({path , title}) => {
  return (
      <>
          <Link className='py-3 px-6 bg-brand-color text-base font-semibold text-white font-poppins leading-6 rounded-sm hover:shadow-md transition-all duration-300' to={path}>{title}</Link>
      </>
  )
}

export default PrimaryBtn