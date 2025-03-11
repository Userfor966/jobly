import { useState } from "react"
import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";
import { useSelector } from "react-redux";
export default function Summary({user,isOwner}){
    const [readMore,setReadMore]=useState(false)
  
    return(
        <div className="bg-[#1B1F23] flex flex-col relative w-[90%] max-[490px]:w-full h-auto rounded-[10px] max-[490px]:rounded-[0px]">
<div className="w-full h-[40px] flex items-center justify-between p-[5px] pl-[20px] border-b-[2px] border-[#aaaaaa88] max-[490px]:pl-[15px]">
    <p className="title text-white font-bold">Haqqımda</p>
    {isOwner ? <Link href="/edit/editsummary">
    <EditIcon className="text-white "/>
    </Link> : null}
</div>
<div className="flex flex-col gap-[15px]  p-[20px] max-[490px]:pl-[15px]">
  {user?.summary===undefined ? 
  <p className="w-full text-center text-[#E8E9E9]">Məlumat yoxdur</p>
  :
  <p className={`${readMore ? "h-auto" : "h-[100px]"} overflow-hidden text-[#E8E9E9]`}>
  {user?.summary}
   </p> 
}  
 {user?.summary===undefined ? null :  <button
    onClick={() => setReadMore(!readMore)}
    className="flex items-center justify-center p-[5px] pl-[0px] rounded-[5px] border-[#E8E9E9] border-[1px] w-[100px] bg-transparent text-[#E8E9E9]"
  >
    {readMore ? "Daha az" : "Daha çox"}
  </button>}

</div>
        </div>
    )
}