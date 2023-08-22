import React from 'react'
import { Link } from "react-router-dom"
import Style from "../Style"

const Navbar = () => {
    return (
        <nav className={`${Style.Navbar}`}>
            <div className="flex flex-col items-center gap-5 py-7 w-[80%] px-8 md:flex-row">
                <Link to="" className={`${Style.NavLink}`}>Features</Link>
                <Link to="" className={`${Style.NavLink}`}>Pricing</Link>
                <Link to="" className={`${Style.NavLink}`}>Rources</Link>
            </div>
            
            <div className="flex flex-col-reverse border-t w-[80%] items-center gap-4 py-7 md:border-none md:flex-row-reverse md:w-[50%]">
                <Link to="" className="font-bold px-5 py-2 rounded-2xl bg-primaryCyan text-white hover:bg-hovering" >Sign up</Link>
                <Link to="" className="font-bold px-4 py-1 text-white rounded-2xl hover:bg-primaryCyan hover:text-white md:text-gray">Login</Link>
            </div>
        </nav>
    )
}



export default Navbar;




