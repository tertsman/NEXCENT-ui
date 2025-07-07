import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const Product = () => {
  return (
    <section id="product">
      <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 ">
        <div className=" md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12  ">
          <div>
            <img src="/src/assets/images/pana.png" alt="" />
          </div>
          <div className="md:w-3/5 mx-auto  ">
            <h2 className=" text-4xl text-neutralGray font-semibold mb-4 md:w-4/5 ">
              How to design your site footer like we did
            </h2>
            <p className=" md:w-3/5 text-sm text-neutralGray mb-8 ">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-16">
        <div className=" flex flex-col md:flex-row justify-between items-center gap-8 ">
          <div className="md:w-1/3 mx-auto flex justify-center items-center md:h-80  ">
          <img src="/src/assets/images/image9.png" alt="" className="h-full" />
          </div>

          {/* state */}
          <div className=" md:w-2/3 mx-auto  ">
            <div>
              <p className=" md:w-4/5 text-sm text-neutralGray mb-5 leading-7  ">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
                <h5 className=" text-BrandPrimary text-xl font-semibold mb-2 ">Tim Smith</h5>
                <p className=" text-sm text-neutralGray">British Dragon Boat Racing Association</p>
                <div className="flex items-center gap-7 flex-wrap">
                    <div className="flex items-center gap-4 mb-0">
                        <img src="/src/assets/images/Logo.png" alt="" className=" cursor-pointer " />
                        <img src="/src/assets/images/Logo1.png" alt="" className=" cursor-pointer " />
                        <img src="/src/assets/images/Logo2.png" alt="" className=" cursor-pointer " />
                        <img src="/src/assets/images/Logo3.png" alt="" className=" cursor-pointer " />
                        <img src="/src/assets/images/Logo4.png" alt="" className=" cursor-pointer " />
                        <img src="/src/assets/images/Logo5.png" alt="" className=" cursor-pointer " />
                    </div>
                    <a href="/" className=" flex items-center font-bold text-BrandPrimary hover:text-neutral-700 ">Meet all customer <IoIosArrowRoundForward size={20}/> </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
