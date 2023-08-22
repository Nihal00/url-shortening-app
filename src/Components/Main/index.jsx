import React from 'react';
import Links from './Link';
import DisplayLinks from "../Links";
import Background from "../../assets/bg-shorten-mobile.svg";
import BackgroundMd from "../../assets/bg-shorten-desktop.svg";

const index = () => {

  return (
    <div className="pb-20 px-6 md:px-20 relative">
      <div className="w-full bg-primaryDarkViolet p-8 rounded-xl relative md:p-10">
        <img src={Background} alt="" className="absolute top-0 right-0 rounded-tr-xl md:invisible visible rounded-xl " />
        <img src={BackgroundMd} alt="" className="absolute top-0 right-0 rounded-tr-xl h-full w-full invisible md:visible rounded-xl" />
        <Links />
      </div>
      <div className="absolute bg-lightgray w-full h-full top-[5rem] md:top-[4rem] left-0 -z-10">
      </div>
      <DisplayLinks />
    </div>
  )
}

export default index
