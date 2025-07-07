
import banner1 from "../assets/images/Illustration.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Home = () => {
    
  return (
    <section id='home' className=' bg-neutralSilver  '>
        <div className='px-4 lg:px-12  max-w-screen mx-auto min-h-screen h-screen'>
         <Swiper
      spaceBetween={50}
      slidesPerView={1}
       modules={[Pagination]}
       loop
       pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="p-12 max-w-full min-h-screen flex flex-col md:flex-row-reverse justify-between items-center py-12 ">
          
          <div>
          <img src={banner1} alt="" className=" w-100 h-100 " />
          </div>
          <div>
            <h2 className=" text-3xl md:text-5xl text-neutralDGray mb-1 font-semibold">Learn and Earn <br/> <span className=" text-BrandPrimary ">in 4 Months</span> </h2>
            <p className=" text-neutralGray">Where to grow your business as a photographer: site or social media?</p>
            <button className=" py-2 px-6 rounded-md bg-BrandPrimary text-white font-semibold mt-3 hover:bg-neutralGray transition-all duration-300 ">
              Register
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-12 max-w-full min-h-screen flex flex-col md:flex-row-reverse justify-between items-center py-12 ">
          
          <div>
          <img src={banner1} alt="" className=" w-100 h-100 " />
          </div>
          <div>
            <h2 className=" text-3xl md:text-5xl text-neutralDGray mb-1 font-semibold">Lessons and insights <br/> <span className=" text-BrandPrimary ">from 8 years</span> </h2>
            <p className=" text-neutralGray">Where to grow your business as a photographer: site or social media?</p>
            <button className=" py-2 px-6 rounded-md bg-BrandPrimary text-white font-semibold mt-3 hover:bg-neutralGray transition-all duration-300 ">
              Register
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-12 max-w-full min-h-screen flex flex-col md:flex-row-reverse justify-between items-center py-12 ">
          
          <div>
          <img src={banner1} alt="" className=" w-100 h-100 " />
          </div>
          <div>
            <h2 className=" text-3xl md:text-5xl text-neutralDGray mb-1 font-semibold">Lessons and insights <br/> <span className=" text-BrandPrimary ">from 8 years</span> </h2>
            <p className=" text-neutralGray">Where to grow your business as a photographer: site or social media?</p>
            <button className=" py-2 px-6 rounded-md bg-BrandPrimary text-white font-semibold mt-3 hover:bg-neutralGray transition-all duration-300 ">
              Register
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-12 max-w-full min-h-screen flex flex-col md:flex-row-reverse justify-between items-center py-12 ">
          
          <div>
          <img src={banner1} alt="" className=" w-100 h-100 " />
          </div>
          <div>
            <h2 className=" text-3xl md:text-5xl text-neutralDGray mb-1 font-semibold">Lessons and insights <br/> <span className=" text-BrandPrimary ">from 8 years</span> </h2>
            <p className=" text-neutralGray">Where to grow your business as a photographer: site or social media?</p>
            <button className=" py-2 px-6 rounded-md bg-BrandPrimary text-white font-semibold mt-3 hover:bg-neutralGray transition-all duration-300 ">
              Register
            </button>
          </div>
        </div>
      </SwiperSlide>
      
    </Swiper>
        </div>

     
    </section>
  )
}

export default Home





