import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const NewSletter = () => {
  return (
    <section>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div>
          <div className=' text-center flex flex-col items-center justify-center lg:w-2/5 mx-auto'>
            <h2 className=' lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug '>
              Pellentesque suscipit fringilla libero eu.
            </h2>
            <a href="/" className=" flex items-center font-bold text-BrandPrimary hover:text-neutral-700 ">Read More <IoIosArrowRoundForward size={20}/> </a>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default NewSletter
