import JobCard from "@/components/JobCard";
import { getJobs } from "@/libs/getJobs";
import JobSkeleton from "@/ui-components/JobCardSkeleton";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Jobs() {
  const skeletonCount = typeof window !== "undefined" && window.innerWidth < 700 ? 10 : 20;
 const [loading,setLoading]=useState(true)
  const [jobs,setJobs]=useState([])

  useEffect(()=>{
getJobs().then((data)=>{
  setLoading(false)
 setJobs(data)
})
  },[])

  if (loading) { 
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[5px] p-[10px]">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <JobSkeleton key={index} />
        ))}
      </div>
    );
  }
 
  return (
    <div>
<div className="grid grid-cols-1 lg:grid-cols-5 w-full p-[10px] gap-[10px]">
  {jobs?.map((job) => {
          return <JobCard job={job}/>
})}
  </div>
     
    </div>
  );
}
