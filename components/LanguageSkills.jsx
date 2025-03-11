import Link from "next/link"
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchUserInfo } from "@/redux/userSlice";
import { toast } from "react-hot-toast";
export default function LanguageSkills({user,isOwner}){
    const dispatch=useDispatch()
    const deleteLanguage=async(id)=>{
        try{
            const res=await axios.delete(`https://admin-9i92.onrender.com/remove-language/${id}`,{
                withCredentials:true
            })
           dispatch(fetchUserInfo())
           toast.success(res.data?.message)
        }catch(error){
            console.log(error)
        }
    }
    return(
        <div className="bg-[#1B1F23] flex flex-col relative w-[90%] max-[490px]:w-full h-auto rounded-[10px] max-[490px]:rounded-[0px]">
<div className="w-full h-[40px] flex items-center justify-between p-[5px] pl-[20px] border-b-[2px] border-[#aaaaaa88]  max-[490px]:pl-[15px]">
    <p className="text-white font-400 title">Dil bilikləri</p>
    {isOwner ? <Link href="/edit/addlanguage" >
 <AddIcon className='text-white'/>
 </Link>:null}
</div>
<div className="flex flex-col gap-[10px] p-[20px]">
    {user?.languages?.length===0 || user?.languages?.length=== undefined ? 
    
<p className="w-full text-center  text-[#E8E9E9]">Dil bilikləri əlavə edilməyib</p>
:
user?.languages?.map((lang,index)=>{
    return <div key={index} className="relative flex justify-between items-center gap-[20px] pb-[10px] border-b-[1px] border-[#aaaaaa88]">
        <div className="flex flex-col">
<h1 className="font-bold text-white">{lang?.name}</h1>
<p className="text-[#A0A1A3]">{lang?.level}</p>
            </div>
            {isOwner ? 
 <DeleteIcon onClick={()=>{deleteLanguage(lang?._id)}} className='text-white' />
 :null}
        </div>
})}
</div>
        </div>
    )
}