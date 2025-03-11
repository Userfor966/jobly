import Link from "next/link"
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchUserInfo } from "@/redux/userSlice";
export default function Education({user,isOwner}){
    const dispatch=useDispatch()
    const deleteEducation=async(id)=>{
        try{
            const res=await axios.delete(`http://localhost:3001/remove-education/${id}`,{
                withCredentials:true
            })
           dispatch(fetchUserInfo())
        }catch(error){
            console.log(error)
        }
    }
    return(
        <div className="bg-[#1B1F23] flex flex-col relative w-[90%] max-[490px]:w-full h-auto rounded-[10px] max-[490px]:rounded-[0px]">
<div className="w-full h-[40px] flex items-center justify-between p-[5px] pl-[20px] border-b-[2px] border-[#aaaaaa88]  max-[490px]:pl-[15px]">
    <p className="text-white font-400 title">Təhsil</p>
    {isOwner ? <Link href="/edit/addeducation" >
 <AddIcon className='text-white'/>
 </Link>:null}
</div>
<div className="flex flex-col gap-[10px] p-[20px]">
    {user?.education?.length===0 || user?.education?.length=== undefined ? 
    
<p className="w-full text-center  text-[#E8E9E9]">Təhsil məlumatları yoxdur</p>
:
user?.education?.map((edu,index)=>{
    return <div key={index} className="relative flex justify-between items-center gap-[20px] pb-[10px] border-b-[1px] border-[#aaaaaa88]">
        <div className="flex flex-col">
<h1 className="font-bold text-white">{edu?.schoolName}</h1>
<p className="text-white">{edu?.specialty}</p>
<p className="text-white">{edu?.degree}</p>
<div className="flex items-center gap-[5px]">
<p className="text-[#A0A1A3] font-600">{edu.startYear}</p>
<span className="text-[#A0A1A3]">-</span>
<p className="text-[#A0A1A3] font-600">{edu.endYear}</p>
    </div>
            </div>
            {isOwner ? 
 <DeleteIcon onClick={()=>{deleteEducation(edu?._id)}} className='text-white' />
 :null}
        </div>
})}
</div>
        </div>
    )
}