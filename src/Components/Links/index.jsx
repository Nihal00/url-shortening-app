import React, { lazy } from 'react'

import { useSelector } from "react-redux";
import DisplayLinkSkeleton from '../../skeleton/DisplayLinkSkeleton';

const LazyDisplay = lazy(() => import ("./DisplayLink"))

const index = () => {

  const data = useSelector(state => state.data);

  console.log(data)

  return (
    <div className="">
      {
        data?.data.ok ? (
          <>
            <React.Suspense fallback={<DisplayLinkSkeleton />}>
              <LazyDisplay link={data.data.result.short_link} orgLink={data.data.result.original_link} /> 
            </React.Suspense>
            <React.Suspense  fallback={<DisplayLinkSkeleton />}>
              <LazyDisplay link={data.data.result.short_link2} orgLink={data.data.result.original_link} />  
            </React.Suspense>
            <React.Suspense fallback={<DisplayLinkSkeleton />}>
              <LazyDisplay link={data.data.result.short_link3} orgLink={data.data.result.original_link} />
            </React.Suspense>
          </>
        ) : ""
      }
      
    </div>
  )
}

export default index
