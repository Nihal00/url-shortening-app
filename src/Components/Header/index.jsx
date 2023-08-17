import React, { useState } from "react";
import { Navbar, Navbar1 } from "./Navbar";
import Logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";

const index = () => {
    const [active, setActive] = useState(false);

    return (
        <div className="flex justify-between py-12 relative px-6 md:px-24 mb-10 items-center">
            <div className="flex flex-row gap-6 lg:gap-10 items-center">
                <img src={Logo} alt="Logo" className="w-24" />
                <Link to="" className="hidden lg:block text-gray hover:text-black">Features</Link>
                <Link to="" className="hidden lg:block text-gray hover:text-black">Pricing</Link>
                <Link to="" className="hidden lg:block text-gray hover:text-black">Resources</Link>

            </div>
            <Navbar1 />
            <div className="md:hidden">
                {active ? (
                    <div className="w-8">
                        <i className="fa-solid fa-xmark text-[1.8rem] text-gray " onClick={() => setActive((prev) => !prev)}></i>
                        <Navbar />
                    </div>
                ) : (
                    <div className="w-8">
                         <i className="fa-solid fa-bars text-[1.8rem] text-gray" onClick={() => setActive((prev) => !prev)}></i>
                    </div>
                )}
            </div>



        </div>
    );
};

export default index;
