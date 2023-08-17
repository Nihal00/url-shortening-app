import React from 'react'
import Logo1 from "../../assets/logo1.svg"
import data from "./data";
import { Link } from "react-router-dom"
import Logos from './Logos';

const index = () => {
  return (
    <div className="flex flex-col items-center -mt-1 py-16 bg-darkBlue  gap-6  md:grid md:grid-flow-col md:place-items-center md:items-start md:px-1 md:gap-4">
      <img src={Logo1} alt="logo" className="hover:fill-primaryCyan w-32 pb-10" />
      <div className="flex flex-col items-center gap-10 text-white md:grid md:grid-flow-col md:place-items-start pb-6 ">
        {
          data?.map((ele) => (
            <div key={ele.id} className="flex flex-col items-center gap-4 ">
              <h3 className="text-2xl font-bold">{ele.title}</h3>
              {
                ele.links.map((link) => (
                  <Link to={link.path} className="hover:text-primaryCyan text-gray">{link.text}</Link>
                ))
              }
            </div>
          ))
        }
      </div>
      <Logos />
    </div>
  )
}

export default index
