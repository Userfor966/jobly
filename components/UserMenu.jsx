import { openMenu } from "@/redux/userSlice";
import Switcher from "@/ui-components/Switch";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch,useSelector } from "react-redux";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { useState } from "react";
import Input from "@/ui-components/Input";
import Button from "@/ui-components/Button";
export default function UserMenu({user}){
    const dispatch=useDispatch()
    const router=useRouter()
    const [modal,setModal]=useState(false)
    const [password,setPassword]=useState("")
    const [error,setError]=useState(null)
   

    if(modal){
return <div onClick={()=>{setModal(false)}} className="w-full h-[100vh] bg-transparent fixed top-[50%] z-[999] left-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col items-center justify-center ">
     <div onClick={(e)=>{e.stopPropagation()}} className="relative w-[300px] max-[380px]:w-[90%]  h-[150px] flex flex-col items-center justify-end gap-[20px] p-[10px] rounded-[7px]  bg-black">
    <CloseIcon onClick={()=>{setModal(false)}} className="absolute top-2 right-2 text-white"/>
    <Input type="password" placeholder="Şifrənizi daxil edin" onChange={(e)=>{setPassword(e.target.value)}}/>
    <Button text="Sil" onClick={deleteAccount(password)}/>
    </div>
</div>
    }

    return(
      <div
      
      className="fixed top-0 left-0 w-full bg-[#0000006a] z-[999] h-[100vh]">
         <motion.div
         initial={{ x: "-100%", opacity: 0 }} 
         animate={{ x: 0, opacity: 1 }} 
         exit={{ x: "-100vw", opacity: 0 }} 
         transition={{ type: "tween", duration: 0.5 }} 
         className=" w-[300px] h-[100vh] bg-[#1B1F23]">
        <div className="w-full flex items-center border-[#aaaaaa88] border-b-[1px] p-[10px] justify-between">
            <span className="text-white font-bold text settings">Tənzimləmələr</span>
            <CloseIcon onClick={()=>{dispatch(openMenu())}} className="text-white"/>
        </div>
         <div className="flex pt-[30px] items-center w-full justify-between p-[10px]">
            <span className="text-white settings">İş təkliflərini qəbul edirəm</span>
            <Switcher user={user}/>
        </div>
        <div className="flex items-center w-full justify-between p-[10px]">
            <span onClick={()=>{setModal(true)}} className="text-red-600 cursor-pointer settings">Hesabı sil</span>
        </div>
       </motion.div>
      </div>
    )
}