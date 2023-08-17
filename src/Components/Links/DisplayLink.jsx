import React, { useState } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";

const DisplayLink = ({ link, orgLink }) => {

    const [copy, setCopy] = useState(false)

    return (
        <div className="flex flex-col md:flex-row justify-between p-5 items-center rounded-md my-4 bg-white ">
            <p className="pb-3 md:pb-0">{orgLink}</p>
            <div className="flex flex-row gap-4 items-center">
                <p className="text-primaryCyan">{link}</p>
                <CopyToClipboard text={link} >
                    <button onClick={() => setCopy(true)} className={`bg-primaryCyan px-5 py-1 rounded-md text-white text-[0.7rem] w-28 ${copy ? "bg-primaryDarkViolet" : ""}`}>
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
