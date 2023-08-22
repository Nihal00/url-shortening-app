import React, { useState } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";

const DisplayLink = ({ link, orgLink }) => {

    const [copy, setCopy] = useState(false)

    return (
        <div className="flex flex-col md:flex-row justify-end p-5 items-start md:items-center rounded-md my-4 bg-white ">
            <p className="pb-3 w-full md:pb-0">{orgLink}</p>
            <div className="flex flex-col w-full md:flex-row md:gap-4 md:items-center md:justify-end">
                <p className="text-primaryCyan pb-3 md:pb-0 ">{link}</p>
                <CopyToClipboard text={link} >
                    <button onClick={() => setCopy(true)} className={`bg-primaryCyan h-8 md:h-auto md:px-5 md:py-1 rounded-md text-white text-[0.9rem] md:w-28 ${copy ? "bg-primaryDarkViolet" : ""}`}>
                        {
                            copy ? "Copied!" : "Copy"
                        }
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    )
}

export default DisplayLink;
