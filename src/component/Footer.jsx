import React from "react";
import logo from "../assets/images/Icon.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
const Footer = () => {
  return (
    <section id="faq" className="  md:px-14 max-w-screen-2xl mx-auto py-16 bg-neutral-800 ">
      <div className="flex items-center flex-col md:flex-row justify-between gap-8">
        <div className="md:w-1/3 items-start">
          <a
            href="#"
            className=" text-2xl font-semibold items-center flex space-x-3"
          >
            <img src={logo} alt="" />
            <span className="text-white">NEXCENT</span>
          </a>
          <p className="text-sm text-white mt-4">Copyright © 2025 Tert codding</p>
          <p className="text-sm text-white">All rights reserved</p>
          <div className=" flex items-center gap-3 mt-4">
            <a href="/" className="p-2 w-8 h-8  rounded-full bg-neutral-300/10 flex items-center justify-center  ">
                <FaLinkedinIn className=" text-white font-serif"/>
            </a>
            <a href="/" className="p-2 w-8 h-8  rounded-full bg-neutral-300/10 flex items-center justify-center  ">
                <FiGithub className=" text-white font-serif"/>
            </a>
            <a href="/" className="p-2 w-8 h-8  rounded-full bg-neutral-300/10 flex items-center justify-center  ">
                <FiSend className=" text-white font-serif"/>
            </a>
            <a href="/" className="p-2 w-8 h-8  rounded-full bg-neutral-300/10 flex items-center justify-center  ">
                <TbWorld className=" text-white font-serif"/>
            </a>
          </div>
        </div>
        <div className="md:w-10/13 grid grid-cols-2 lg:grid-cols-3 gap-5 p-6 ">
         <div className="flex flex-col items-start gap-2 ">
            <h4 className="text-xl font-semibold text-white mb-2  ">Company</h4>
            <a href="/" className="text-neutral-50 text-sm">About us</a>
            <a href="/" className="text-neutral-50 text-sm">Blog</a>
            <a href="/" className="text-neutral-50 text-sm">Contact us</a>
            <a href="/" className="text-neutral-50 text-sm">Pricing</a>
            <a href="/" className="text-neutral-50 text-sm">Testimonials</a>
         </div>
         <div className="flex flex-col items-start gap-2 ">
            <h4 className="text-xl font-semibold text-white mb-2  ">Support</h4>
            <a href="/" className="text-neutral-50 text-sm">Help center</a>
            <a href="/" className="text-neutral-50 text-sm">Terms of service</a>
            <a href="/" className="text-neutral-50 text-sm">Legal</a>
            <a href="/" className="text-neutral-50 text-sm">Privacy policy</a>
            <a href="/" className="text-neutral-50 text-sm">Status</a>
         </div>
         <div className="flex flex-col items-start gap-2 ">
            <h4 className="text-xl font-semibold text-white mb-2  ">Stay up to date</h4>
            <div className=" relative rounded-md bg-neutral-200/10  ">
                <input type="text" placeholder="Your email address " className="w-full focus:outline-none h-full text-neutral-200 px-4 py-2" />
                <FiSend className=" absolute top-2 right-3 text-xl text-white "/>
               
            </div>
         </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
