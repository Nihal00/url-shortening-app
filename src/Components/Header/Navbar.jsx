import React from 'react'
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="flex flex-col items-end gap-3 absolute right-4 top-[6rem]  md:static md:flex-row-reverse">
            <Link to="" className="px-4 py-1 rounded-2xl bg-primaryCyan text-white hover:bg-hovering" >Sign up</Link>
            <Link className="px-4 py-1 rounded-2xl hover:bg-primaryCyan hover:text-white">Login</Link>
        </div>
    )
}

export const Navbar1 = () => {
    return (
        <div className="invisible flex md:flex-row gap-4 md:visible">
            <Link className="px-4 py-1 rounded-2xl hover:bg-hovering hover:text-white">Login</Link>
            <Link to="" className="px-4 py-1 rounded-2xl bg-primaryCyan text-white hover:bg-hovering" >Sign up</Link>
        </div>
    )
}

