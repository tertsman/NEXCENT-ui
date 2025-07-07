import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import image18 from "../assets/images/image18.png"
import image19 from "../assets/images/image19.png"
import image20 from "../assets/images/image20.png"
const Blog = () => {

    const blogs = [
        {id:1,title:"Creating Streamlined Safeguarding Processes with OneRen",image:image18},
        {id:2,title:"What are your safeguarding responsibilities and how can you manage them?",image:image19},
        {id:3,title:"Revamping the Membership Model with Triathlon Australia",image:image20}
    ]
  return (
    <section
      id="testimonial"
      className="  md:px-14 py-16 max-w-screen-2xl mx-auto my-12 "
    >
      <div className=" text-center md:w-1/2 mx-auto mb-10 items-center flex flex-col">
        <h2 className="text-4xl text-neutralGray font-semibold mb-2 ">
          Caring is the new marketing
        </h2>
        <p className="text-neutralGray text-center text-sm md:w-3/4">
         The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
        </p>

       
      </div>
        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-15 md:gap-5 items-center justify-between ">
            {blogs.map(blog => <div key={blog.id} className=" mx-auto relative  cursor-pointer">
                <img src={blog.image} alt="" className="w-80 md:w-100 hover:scale-95 transition-all duration-300" />
                <div className=" text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12 flex justify-center items-center flex-col">
                    <h3>{blog.title}</h3>
                    <a href="/" className=" flex items-center font-bold text-BrandPrimary hover:text-neutral-700 ">Read More <IoIosArrowRoundForward size={20}/> </a>
                </div>
                </div>
                )}
        </div>

    </section>
  );
};

export default Blog;
