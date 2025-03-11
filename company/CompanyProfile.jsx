import axios from "axios"
import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import Input from "@/ui-components/Input";
import Button from "@/ui-components/Button";
import { deleteAccount } from "@/libs/deleteAccount";
export default function CompanyProfile({user}){
    const [password,setPassword]=useState("")
    const [modal,setModal]=useState(false)
    
    if(modal){
        return <div onClick={()=>{setModal(false)}} className="w-full h-[100vh] bg-transparent fixed top-[50%] z-[999] left-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col items-center justify-center ">
             <div onClick={(e)=>{e.stopPropagation()}} className="relative w-[300px] max-[380px]:w-[90%]  h-[150px] flex flex-col items-center justify-end gap-[20px] p-[10px] rounded-[7px]  bg-black">
            <CloseIcon onClick={()=>{setModal(false)}} className="absolute top-2 right-2 text-white"/>
            <Input type="password" placeholder="Şifrənizi daxil edin" onChange={(e)=>{setPassword(e.target.value)}}/>
            <Button text="Sil" onClick={()=>{deleteAccount(password)}}/>
            </div>
        </div>
            }

    return(
        <div className="w-full flex overflow-hidden">
           <div className="basis-[25%] h-auto min-h-[100vh] bg-[#1B1F23] flex justify-start flex-col gap-[10px] p-[10px] overflow-hidden">
            <div className="flex flex-col gap-[15px] bg-black p-[10px] rounded-[10px]">
            <h1 className="text-white">{user?.companyName}</h1>
<h1 className="text-white">{user?.email}</h1>
            </div>
            <div className="flex flex-col bg-black p-[10px] rounded-[10px] p-[10px] gap-[15px]">
            <span className="text-white">Elanlarım</span>
            <span onClick={()=>{setModal(true)}} className="text-red-600 font-bold">Hesabı sil</span>
            </div>
           </div>
        </div>
    )
}