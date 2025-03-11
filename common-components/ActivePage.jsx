import { useState } from "react"

export default function ActivePage({setActive,active}) {
    return (
        <div className="w-full flex h-[40px] bg-[#1B1F23]">
            <span 
            onClick={()=>{setActive(1)}}
            className={`
${active === 1 ? "border-b-[2px] border-blue-700" : "border-0"} 
w-[50%] 
text-white 
font-bold 
h-full 
flex 
items-center 
justify-center`
            }>
                İş elanları
            </span>
            <span 
            onClick={()=>{setActive(2)}}
            className={`${active === 2 ? "border-b-[2px] border-blue-700" : "border-0"} 
w-[50%] 
text-white 
font-bold 
h-full 
flex 
items-center 
justify-center`
            }>
                Namizədlər
            </span>
        </div>
    )
}