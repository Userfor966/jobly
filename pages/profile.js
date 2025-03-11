
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Summary from "@/components/Summary";
import UserMenu from "@/components/UserMenu";
import { fetchUserInfo } from "@/redux/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import LanguageSkills from "@/components/LanguageSkills";
import PersonalInformation from "@/components/PersonalInformation";
import SocailAccounts from "@/components/SocialAccounts";
import CompanyProfile from "@/company/CompanyProfile";
export default function Profile(){
  const {user,isOwner,loading,showUserMenu}=useSelector(state=>state.user)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchUserInfo())
  },[])
  if(loading){
    return <div className="w-full h-[100vh] flex items-center justify-center">
      <CircularProgress size={50} className="text-white"></CircularProgress>
    </div>
  }
    return(
  
        <div className=" w-full flex flex-col gap-[10px] justify-center items-center pb-[20px] max-[490px]:pb-0">
        <About user={user} isOwner={isOwner}/>
        <Summary user={user} isOwner={isOwner}/>
        <Education user={user} isOwner={isOwner}/>
        <Experience user={user} isOwner={isOwner}/>
        <LanguageSkills user={user} isOwner={isOwner}/>
        <Skills user={user} isOwner={isOwner}/>
        <SocailAccounts user={user} isOwner={isOwner}/>
        {showUserMenu ? <UserMenu user={user}/> : null}
       </div>
    )
}
