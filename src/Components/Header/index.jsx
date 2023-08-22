import React, { useState } from "react";
import Navbar from "./Navbar";
import Logo from "../../assets/logo.svg"


const index = () => {
    const [active, setActive] = useState(false);

    return (
        <div className="flex justify-between py-8 relative px-6 md:px-20 mb-10 items-center">
            <div className="flex flex-row gap-6 lg:gap-10 items-center">
                <img src={Logo} alt="Logo" className="w-24" />
            </div>

            <div className="md:hidden">
                {active ? (
                    <div className="w-8">
                        <i className="fa-solid fa-xmark text-[1.8rem] text-gray " onClick={() => setActive((prev) => !prev)}></i>
                    </div>
                ) : (
                    <div className="w-8">
                        <i className="fa-solid fa-bars text-[1.8rem] text-gray" onClick={() => setActive((prev) => !prev)}></i>
                    </div>
                )}
            </div>

            <div className="absolute top-2/3 w-[calc(100%-3rem)] ">
               {
                active && (<Navbar />)
               }
            </div>
            
            <div className="hidden md:block w-full">
               <Navbar />
            </div>
        </div>
    );
};

export default index;
