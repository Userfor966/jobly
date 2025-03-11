import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { fetchUserInfo } from '@/redux/userSlice';
export default function Skills({user,isOwner}){
 const [skill,setSkill]=useState("")
 const dispatch=useDispatch()
    const deleteSkill=async(skill)=>{
        setSkill(skill)
try{
    const res=await axios.delete("http://localhost:3001/remove-skill",{
    data:{skill},
        withCredentials:true
    })
   dispatch(fetchUserInfo())
}catch(error){
    console.log(error)
}
    }
    return(
        <div className="bg-[#1B1F23] flex flex-col relative w-[90%] max-[490px]:w-full h-auto rounded-[10px] max-[490px]:rounded-[0px]">
<div className="w-full h-[40px] flex items-center justify-between p-[5px] pl-[20px] border-b-[2px] border-[#aaaaaa88] max-[490px]:pl-[15px]">
    <p className="text-white font-bold title">Biliklər</p>
    {isOwner ? <Link href="/edit/editskills">
    <AddIcon className='text-white'/>
    </Link> : null}
</div>
<div className="flex flex-wrap gap-[10px] p-[20px] max-[490px]:pl-[15px]">
    {user?.skills?.length===0 || user?.skills=== undefined ? 
    <p className="w-full text-center text-[#E8E9E9]">
Biliklər əlavə edilməyib
    </p> :
    user?.skills?.map((skill,index)=>{
        return <span key={index} className="flex items-center gap-[10px] justify-center w-auto p-[5px] rounded-[10px] border-[1px] border-[#aaaaaa88] text-white ">
            {skill}
            {isOwner ? <CloseIcon onClick={()=>{deleteSkill(skill)}}/> : null}
        </span>
    })}
</div>
        </div>
    )
}