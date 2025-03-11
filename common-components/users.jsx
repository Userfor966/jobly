import UserCard from "@/components/UserCard"
import { getUsers } from "@/libs/getUsers"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
export default function Users(){
  console.log("render edildi")
  const [users,setUsers]=useState([])

  useEffect(()=>{
    getUsers().then((data)=>{
      setUsers(data)
    })
  },[])
    return(
      <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-[5px] p-[10px]">
{users?.map((user,index)=>{
    return <UserCard index={index} user={user}/>
})}
      </div>
    )
}

  