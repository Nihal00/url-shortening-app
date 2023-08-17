import React from 'react'
import Button from '../../Common/Button'
import Background1 from "../../assets/bg-boost-mobile.svg"
import Background2 from "../../assets/bg-boost-desktop.svg"

const index = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-primaryDarkViolet py-24 relative">
        <img src={Background1} alt="background" className="absolute top-0 h-full w-full md:invisible" />
        <img src={Background2} alt="background" className=" invisible absolute top-0 h-full w-full  md:visible" />
        <h2 className="font-bold text-[1.8rem] text-white z-10 text-center">Boost your links today</h2>
        <Button />
    </div>
  )
}

export default index;
