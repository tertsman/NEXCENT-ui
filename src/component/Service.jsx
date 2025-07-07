import React from "react";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/images/Icon3.png",
    },
    {
      id: 1,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments ",
      image: "/src/assets/images/Icon1.png",
    },
    {
      id: 1,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/images/Icon2.png",
    },
  ];
  return (
    <section
      id="service"
      className="  md:px-14 py-16 max-w-screen-2xl mx-auto "
    >
      <div className=" text-center my-8  ">
        <h2 className="text-4xl text-neutralGray font-semibold mb-2 ">
          Our Clients
        </h2>
        <p className="text-neutralGray">
          We have been working with some Fortune 500+ clients
        </p>

        {/* company logo */}
        <div className=" flex justify-between flex-wrap items-center my-12 px-12">
          <img src="/src/assets/images/Logo.png" alt="" />
          <img src="/src/assets/images/Logo1.png" alt="" />
          <img src="/src/assets/images/Logo2.png" alt="" />
          <img src="/src/assets/images/Logo3.png" alt="" />
          <img src="/src/assets/images/Logo4.png" alt="" />
          <img src="/src/assets/images/Logo5.png" alt="" />
          <img src="/src/assets/images/Logo6.png" alt="" />
        </div>
        {/* service card */}
        <div className="md:w-1/2 mx-auto text-center">
          <h2 className="text-4xl text-center text-neutralGray  font-semibold mb-2 ">
            Manage your entire community in a single system
          </h2>
          <p className="text-neutralGray">Who is Nextcent suitable for?</p>
        </div>

        {/* card  */}
        <div className=" flex flex-col md:flex-row-reverse mt-12 gap-4 ">
            {services.map(service=>
             <div key={service.id} className="px-4 py-8 md:w-[300px] w-[300px]  mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex justify-center items-center ">
                <div>
                    <div className=" bg-[#E8F5E9] h-14 w-14  mx-auto rounded-br-3xl ">
                        <img src={service.image} alt="" className="-ml-5" />
                    </div>
                    <h4 className=" text-2xl font-semibold text-neutralGray mb-2 px-2">{service.title}</h4>
                    <p className=" text-sm text-shadow-neutralGray ">{service.description}</p>
                </div>


             </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default Service;
