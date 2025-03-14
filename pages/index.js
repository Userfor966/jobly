import { useEffect } from "react";
import Header from "@/common-components/Header";
import { useState } from "react";
import Users from "@/common-components/users";
import Filter from "@/common-components/Filter";

export default function Home() {
  const [openFilter,setOpenFilter]=useState(false)
  return (
    <div className="min-h-[100vh] relative pt-[90px]">
   <div className="fixed top-0 left-0 z-[999] w-full">
   <Header setOpenFilter={setOpenFilter}/>
   {openFilter ? <Filter setOpenFilter={setOpenFilter}/> : null}
   </div>
   <Users/>
 
    </div>
  );
}
