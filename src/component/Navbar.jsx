import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import logo from "../assets/images/Icon.png";
const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // toggle menu
  const ToggleMenu = () => {
    setIsMenu(!isMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const itemsMenu = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];
  return (
    <header className=" bg-white md:bg-transparent w-full fixed top-0 left-0 right-0  ">
      <nav className= {` py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b border-gray-200 bg-white duration-300   ":""} `}>
        <div className=" flex justify-between text-base items-center gap-8 ">
          <a
            href="#"
            className=" text-2xl font-semibold items-center flex space-x-3"
          >
            <img src={logo} alt="" />
            <span className="text-[#263238]">NEXCENT</span>
          </a>

          {/* menu larg device  */}

          <ul className="md:flex items-center space-x-12 hidden">
            {itemsMenu.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className=" block text-base text-gray-900 hover:text-BrandPrimary first:font-medium pointer "
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* btn for large device */}

          <div className=" space-x-10 hidden lg:flex items-center  ">
            <a
              href="#"
              className=" lg:flex items-center hidden text-BrandPrimary hover:text-gray-900  "
            >
              Login
            </a>
            <button className=" bg-BrandPrimary text-white py-2 px-6 transition-all duration-300 rounded-md hover:bg-neutralDGray  ">
              {" "}
              Sing Up{" "}
            </button>
          </div>

          {/* menu only mobile  */}
          <div className=" md:hidden  ">
            <button 
            onClick={ToggleMenu}
            className=" focus:outline-none focus:text-gray-500 ">
              {isMenu ? (
                <IoMdClose className=" h-6 w-6 text-neutralDGray  " />
              ) : (
                <IoIosMenu className=" h-6 w-6 text-neutralDGray  " />
              )}
            </button>
          </div>
        </div>

        {/* item menu mobile device  */}
        <div className={` space-y-4 px-4 mt-16 py-7 bg-white  shadow-md ${isMenu ? "block fixed top-0 right-0 left-0 ": "hidden"} `}>
                    {itemsMenu.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className=" block text-base text-gray-900 hover:text-BrandPrimary first:font-medium pointer "
              >
                {link}
              </Link>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
