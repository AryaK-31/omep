import React from "react";

const Services = () => {
    return (
        <div className="bg-gray-200 services pt-6 font-montserrat">
            <div className="heading lg:text-6xl text-5xl text-center text-uppercase font-taglineP tracking-wide font-bold text-[#0a0342] underline underline-offset-[20px] decoration-yellow-500">
                SERVICES
            </div>
            <div className="p-6 lg:p-6 works lg:h-3/4 lg:w-3/4 mx-auto mt-12 flex flex-col lg:flex-row justify-between gap-8 items-center">
                <div className="lg:p-4  work1 h-[600px] w-full lg:w-1/3 bg-[#0a0342] lg:mr-8">
                    <div className="img h-2/5 sm:h-3/2 w-full bg-blue-100 bg-cover bg-right" style={{ backgroundImage: "url(https://fractory.com/wp-content/uploads/2019/08/Tube-Bending-Machine.jpg)" }}></div>
                    <h3 className="text-2xl text-yellow-600 mt-8 lg:mx-8 text-center">Pipe (Tube) Bending works</h3>
                    <p className="text-yellow-600  overflow-hidden lg:mx-8 mt-4 p-2">
                        Tube bending is a mechanical process used to deform tubes using a bending process that transforms straight tubes into curved shapes. Although straight tubes are beneficial for certain applications, in many cases, to meet specific requirements, tubes need to be bent, shaped, and stressed.
                    </p>
                </div>
                <div className="lg:p-4 work2 h-[600px] w-full lg:w-1/3 bg-[#0a0342] lg:mr-8">
                    <div className="img h-2/5 sm:h-1/2 w-full bg-blue-100 bg-cover bg-right" style={{ backgroundImage: "url(https://unitedpipe.com/wp-content/uploads/2020/01/Copper-Tube_1200x717.jpg)" }}></div>
                    <h3 className="text-2xl text-yellow-600 mt-8 lg:mx-8 text-center">M.S. SS & Copper piping</h3>
                    <p className="text-yellow-600  overflow-hidden lg:mx-8 mt-4 p-2">
                        Copper tubing is most often used for heating systems and as a refrigerant line in HVAC systems. Copper tubing is slowly being replaced by PEX tubing in hot and cold water applications. There are two basic types of copper tubing, soft copper and rigid copper.
                    </p>
                </div>
                <div className="lg:p-4 work3 h-[600px] w-full lg:w-1/3 bg-[#0a0342]">
                    <div className="img2 h-2/5 sm:h-1/2 w-full bg-blue-100 bg-cover bg-right" style={{ backgroundImage: "url(https://cdn.britannica.com/96/224096-050-296B9F04/Hydraulic-piston-system-for-bulldozers.jpg)" }}></div>
                    <h3 className="text-2xl text-yellow-600 mt-8 lg:mx-8 text-center">Hydraulics Pneumatic System piping.</h3>
                    <p className="text-yellow-600  overflow-hidden lg:mx-8 mt-4 p-2">
                        Pneumatics provides fluid power by means of pressurized air or gases. Hydraulics provides fluid power by means of pressurized liquids, such as oil or water.
                    </p>
                </div>
            </div>

        </div>

    );
};

export default Services;
