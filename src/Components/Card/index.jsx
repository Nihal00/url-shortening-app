import React from "react";
import content from "./content";


const index = () => {
    return (
        <div className="flex flex-col gap-10 pb-32 relative bg-lightgray lg:grid lg:grid-flow-col lg:grid-cols-3 lg:gap-5 px-6 md:px-20">
            {
                content.map((cont) => (
                    <div key={cont.id} className={`flex flex-col gap-4 items-center px-4 pt-20 pb-11 w-full bg-white rounded-xl relative z-10 lg:items-start lg:place-content-center lg:px-8 lg:mb-32 ${cont.id === 2 ? "lg:relative top-10" : cont.id === 3 ? "lg:relative top-24" : ""}`}>
                        <div className="bg-primaryDarkViolet w-[5rem] h-[5rem] rounded-full flex items-center justify-center absolute -top-10 ">
                            <img src={cont.logo} alt="" className="" />
                        </div>
                        <h2 className="font-bold text-2xl ">{cont.title}</h2>
                        <p className="text-center text-gray md:text-start ">
                           {cont.text}
                        </p>
                    </div>
                ))
            }   
            <div className="absolute w-2 h-[80%] bg-primaryCyan bottom-0 top-[10%] left-[49.50%] lg:h-2 lg:w-[80%] lg:top-1/3 lg:left-24 ">

            </div>
        </div>
    );
};

export default index;
