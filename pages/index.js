import { useEffect } from "react";
import Header from "@/common-components/Header";
import ActivePage from "@/common-components/ActivePage";
import { useState } from "react";
import Users from "@/common-components/users";
import Jobs from "@/common-components/jobs";

export default function Home() {
  const [active,setActive]=useState(1)
  return (
    <div className="min-h-[100vh] relative pt-[90px]">
   <div className="fixed top-0 left-0 w-full">
   <Header/>
   <ActivePage setActive={setActive} active={active}/>
   </div>
   {active===1 &&  <Jobs/>}
   {active===2 && <Users/>}
 
    </div>
  );
}
