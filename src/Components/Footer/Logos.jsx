import React from 'react'
import FaceBook from "../../assets/icon-facebook.svg";
import Twitter from "../../assets/icon-twitter.svg";
import Pinterest from "../../assets/icon-pinterest.svg";
import Insta from "../../assets/icon-instagram.svg";

const Logos = () => {
  return (
    <div className="flex flex-row gap-10">
      <img src={FaceBook} alt="facebook" className="cursor-pointer" />
      <img src={Twitter} alt="twitter" className="cursor-pointer" />
      <img src={Pinterest} alt="pinterest" className="cursor-pointer" />
      <img src={Insta} alt="instagram" className="cursor-pointer" />
    </div>
  )
}

export default Logos
