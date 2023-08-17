import React from 'react'

const DisplayLinkSkeleton = () => {
  return (
    <div>
       <div className="flex flex-col md:flex-row justify-between p-5 items-center rounded-md my-4 bg-white ">
            <p className="pb-3 md:pb-0 h-6 w-[50%] bg-gray"></p>
            <div className="flex flex-row gap-4 items-center">
                <p className="bg-gray w-32 h-6"></p>
                <button onClick={() => setCopy(true)} className={` bg-gray px-5 py-1 rounded-md h-6 text-white text-[0.7rem] w-28 `}>
                </button>
            </div>
        </div>
    </div>
  )
}

export default DisplayLinkSkeleton
