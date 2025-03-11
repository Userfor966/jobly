import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import About from "@/components/About";
import { motion } from "framer-motion";
import Summary from "@/components/Summary";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import LanguageSkills from "@/components/LanguageSkills";
import SocailAccounts from "@/components/SocialAccounts";
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function ViewProfile({user}){
    return (
<motion.div 
  initial={{ y: "100%", opacity: 0 }}
  animate={{ y: 0, opacity: 1 }} 
  exit={{ x: "-100vw", opacity: 0 }} 
  transition={{ type: "tween", duration: 0.5 }} 
  className="w-full flex flex-col items-center gap-[20px]"
>
<div className="fixed top-0 left-0 z-[999] w-full h-[40px] flex items-center gap-[20px] bg-[#1B1F23] p-[10px] pl-[20px]">
<Link href="/" >
<ArrowBackIcon className="text-white"/>
</Link>
<h2 className="text-white font-bold">Namizəd haqqında</h2>
            </div>
   <div className="flex flex-col items-center gap-[10px] w-full mt-[50px]">
   <About user={user}/>
   {!user?.summary || user?.summary?.length === 0 ? null : <Summary user={user} />}
    
   {(user?.education && user.education.length > 0) && <Education user={user} />}

{(user?.experience && user.experience.length > 0) && <Experience user={user} />}

{(user?.languages && user.languages.length > 0) && <LanguageSkills user={user} />}

{(user?.skills && user.skills.length > 0) && <Skills user={user} />}

{(user?.socialLinks && user.socialLinks.length > 0) && <SocailAccounts user={user} />}
   </div>
</motion.div>
    )
}
export async function getServerSideProps(context) {
    const { id } = context.params; // URL'den id değerini al
  
    try {
      const res = await axios.get(`http://localhost:3001/users/${id}`,); // Backend'e isteği gönder
   
      return {
        props: { 
          user: res.data,
        }, // Gelen veriyi props olarak gönder
      };
    } catch (error) {
      console.error("Error fetching user:", error);
      return {
        props: { user: null }, // Hata durumunda null döndür
      };
    }
  }