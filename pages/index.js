import { useEffect } from "react";
import Header from "@/common-components/Header";
import ActivePage from "@/common-components/ActivePage";
import { useState } from "react";
import Users from "@/common-components/users";
import Jobs from "@/common-components/jobs";
import Filter from "@/common-components/Filter";

export default function Home() {
  const [active,setActive]=useState(1)
  const [openFilter,setOpenFilter]=useState(false)
  return (
    <div className="min-h-[100vh] relative pt-[90px]">
   <div className="fixed top-0 left-0 z-[999] w-full">
   <Header setOpenFilter={setOpenFilter}/>
   {openFilter ? <Filter setOpenFilter={setOpenFilter}/> : null}
   <ActivePage setActive={setActive} active={active}/>
   </div>
   {active===1 &&  <Jobs/>}
   {active===2 && <Users/>}
 
    </div>
  );
}
