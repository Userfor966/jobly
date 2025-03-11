import Link from "next/link";
import VisibilityIcon from '@mui/icons-material/Visibility';
export default function JobCard({job}){
    return(
        <Link href={`/jobdetail/${job._id}`} className="relative flex flex-col gap-[10px] w-1/1 p-[10px] h-auto  rounded-[2px] bg-[#1B1F23]">
<h1 className="text-white font-bold truncate">{job.title}</h1>
<span className="text-[#F5F5F5]">{job.city}</span>
<p className="text-[#F5F5F5] flex items-center justify-center p-[5px] border-[1px] border-[#A0A1A3] w-[90px] h-[30px] rounded-[5px]">{job.salary + " Azn"}</p>
        <span className="flex items-center gap-[10px] absolute bottom-2 right-2 ">
            <VisibilityIcon className="text-[#A0A1A3]"/>
            <p className="text-[#A0A1A3]">{job?.viewCount}</p>
        </span>
        </Link>
    )
}