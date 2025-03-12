import UserCard from "@/components/UserCard"
import { getUsers } from "@/libs/getUsers"
import UserSkeleton from "@/ui-components/UserCardSkeleton"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
export default function Users(){
  const [loading,setLoading]=useState(false)
  const [users,setUsers]=useState([])
  const skeletonCount = typeof window !== "undefined" && window.innerWidth < 700 ? 10 : 20;
  useEffect(()=>{
    setLoading(true)
    getUsers().then((data)=>{
      setLoading(false)
      setUsers(data)
    })
  },[])


  if (loading) { 
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[5px] p-[10px]">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <UserSkeleton key={index} />
        ))}
      </div>
    );
  }
  
    return(
      <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-[5px] p-[10px]">
{users?.map((user,index)=>{
    return <UserCard index={index} user={user}/>
})}
      </div>
    )
}

  