import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import SettingsIcon from '@mui/icons-material/Settings';
import { openMenu } from '@/redux/userSlice';
const About = ({user,isOwner}) => {
  const dispatch=useDispatch()
  return (
    <div className="bg-[#1B1F23] relative w-[90%] max-[490px]:w-full h-auto rounded-b-[10px]  max-[490px]:rounded-[0px]">
  <div className="relative flex pt-[60px]  max-[610px]:flex-col p-[20px] max-[490px]:p-[15px] gap-[30px]">
 {isOwner ? <SettingsIcon onClick={()=>{dispatch(openMenu())}} className="absolute top-4 left-4 text-white z-[999]"/> : null}
 {isOwner ? <Link href="/edit/editinfo" >
 <EditIcon className='absolute top-4 right-4 text-white'/>
 </Link>
 :null}
  <div className='w-auto max-[610px]:w-full flex justify-center'>
    <img src={`${user?.image !=null ? user?.image : "../nouser.png"}`} className='w-[180px] h-[180px]  rounded-full border-[2px] border-orange-600'/>
  </div>
   <div className='flex flex-col justify-center gap-[5px]'>
    <h1 className='text-2xl font-bold text-white'>{user?.firstName} {user?.lastName}</h1>
    <h1 className='text-2xl font-bold text-white'>{user?.companyName && user?.companyName}</h1>
    <p className='text-white'>{user?.position}</p>
    {user?.salary > 0 && user?.salary !=null ? <p className='text-white'>Əmək haqqı: {user.salary + " Azn"}</p> : null}

    {user?.city && <p className='text-white'>{user?.city + " şəhəri"}</p>}

   <div className="flex  justify-start pt-[20px] gap-[10px]">
     {user?.phone &&  <a href={`tel://${"+" +user?.phone}`} className='text-[#E8E9E9] bg-blue-600 rounded-[3px] w-[70px] p-[5px] flex items-center justify-center'>
     Telefon
      </a>}
  {user?.email && <a href={`mailto://${user?.email}`} className='text-[#E8E9E9] bg-red-600 rounded-[3px] w-[70px] p-[5px] flex items-center justify-center'>
  Email
  </a>}
    </div>
  
   </div>
  </div>
    </div>
  );
};

export default About;
