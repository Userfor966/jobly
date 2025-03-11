import { useState } from "react"
import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";
import { useSelector } from "react-redux";
export default function PersonalInformation({user,isOwner}){
  
    return(
        <div className="bg-[#1B1F23] flex flex-col relative w-[90%] max-[490px]:w-full h-auto rounded-[10px] max-[490px]:rounded-[0px]">
<div className="w-full h-[40px] flex items-center justify-between p-[5px] pl-[20px] border-b-[2px] border-[#aaaaaa88] max-[490px]:pl-[15px]">
    <p className="title text-white font-bold">Şəxsi məlumatlar</p>
    {isOwner ? <Link href="/edit/addpersonalinformation">
    <EditIcon className="text-white "/>
    </Link> : null}
</div>
<div className="flex flex-col gap-[15px]  p-[20px] max-[490px]:pl-[15px]">
<div className="flex items-center w-full gap-[10px]">
  <p className="font-bold text-[#E8E9E9]">Cinsi: </p>
  <span className=" text-[#E8E9E9]">
  {user?.gender===undefined ? "Qeyd edilməyib" : user?.gender}
  </span>
    </div>  

    <div className="flex items-center w-full gap-[10px]">
  <p className="font-bold text-[#E8E9E9]">Doğum tarixi: </p>
  <span className=" text-[#E8E9E9]">
  {user?.birthDate===undefined ? "Qeyd edilməyib" : user?.birthDate}
  </span>
    </div> 

    <div className="flex items-center w-full gap-[10px]">
  <p className="font-bold text-[#E8E9E9]">Ailə vəziyyəti: </p>
  <span className=" text-[#E8E9E9]">
  {user?.maritalStatus===undefined ? "Qeyd edilməyib" : user?.maritalStatus}
  </span>
    </div> 
    <div className="flex items-center w-full gap-[10px]">
  <p className="font-bold text-[#E8E9E9]">Sürücülük vəsiqəsi: </p>
  <span className=" text-[#E8E9E9]">
  {user?.driverLicence===undefined ? "Qeyd edilməyib" : user?.driverLicence}
  </span>
    </div> 
    <div className="flex items-center w-full gap-[10px]">
  <p className="font-bold text-[#E8E9E9]">Hərbi bilet: </p>
  <span className=" text-[#E8E9E9]">
  {user?.militaryStatus===undefined ? "Qeyd edilməyib" : user?.militaryStatus}
  </span>
    </div> 

</div>
        </div>
    )
}