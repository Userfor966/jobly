import Link from "next/link";

export default function UserCard({user,index}){
    return(
        <Link href={`/viewprofile/${user._id}`} key={index} className="flex justify-start gap-[10px] w-1/1 p-[10px] h-auto  rounded-[5px] bg-[#1B1F23]">
<div className="w-[120px] flex items-center justify-start">
    <img src={`${user.image!=null ? user.image : "./nouser.png"}`} className="w-[80px] h-[80px] rounded-full"/>
</div>

<div className="w-full flex flex-col gap-[10px] items-start">
<h1 className="text-white font-bold truncate text-start w-full">{user.firstName + " " + user.lastName}</h1>
<span className="text-[#A0A1A3] text-[15px] font-300 truncate">{user.position}</span>
<span className="text-[#A0A1A3] text-[15px] font-300 truncate">{user.salary + " Azn"}</span>
</div>
        </Link>
    )
}