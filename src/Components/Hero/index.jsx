import React from "react";
import MainLogo from "../../assets/illustration-working.svg";
import Button from "../../Common/Button";

const index = () => {
  return (
    <div className="flex flex-col gap-3 md:flex-row-reverse px-6 md:px-24 mb-20">
      <div className="">
        <img src={MainLogo} alt="hero section logo" className="" />
      </div>

      <div className="w-full flex flex-col items-center gap-5 md:items-start ">
        <h1 className="text-[2.6rem] font-bold text-center md:text-start">
          More than just <br />
          shorter links
        </h1>
        <p className="text-gray text-lg text-center md:text-start">
          Build your brand's recognition and get detailed{" "}
          <br className="md:visible invisible" /> insights on how your links are
          performing.
        </p>
        <Button />
      </div>
    </div>
  );
};

export default index;
