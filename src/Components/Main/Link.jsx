import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { fetching } from "../../redux/action/linkAction"

const Link = () => {

  const [input, setInput] = useState("")
  const [err, setErr] = useState(false)
  const dispatch = useDispatch();

  function check() {
    if (input.trim() === "") {
      return setErr(true);
    } else {
      setErr(false);

    }

    dispatch(fetching(input));
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-between">

      <input type="text" className={`p-3 rounded-lg z-10 outline-none md:w-full ${err ? "outline-red-900" : ""}`} onChange={(e) => setInput(e.target.value)} placeholder="Shorten a link here..." />

      <button className="p-3 rounded-lg bg-primaryCyan text-[1rem] font-bold text-white z-10  md:w-[14rem] hover:bg-hovering" onClick={check} >Shorten It!</button>

      {
        err ? <p className="absolute z-10 bottom-2 text-secondary italic">Please add a link</p> : ""
      }
    </div>
  )
}

export default Link
