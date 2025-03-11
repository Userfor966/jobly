import JobCard from "@/components/JobCard";
import { getJobs } from "@/libs/getJobs";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Jobs() {
  console.log("render ")
  const [jobs,setJobs]=useState([])

  useEffect(()=>{
getJobs().then((data)=>{
 setJobs(data)
})
  },[])
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
