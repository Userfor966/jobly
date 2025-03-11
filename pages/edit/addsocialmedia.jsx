import Button from "@/ui-components/Button"
import FormHeader from "@/ui-components/FormHeader"
import Input from "@/ui-components/Input"
import Select from "@/ui-components/Select"
import { useState } from "react"
import axios from "axios"
export default function SocialMediaForm(){
  const [name,setName]=useState("")
  const [url,setUrl]=useState("")
  const socialMediaChoices=["Github","Behance","Linkedin","Instagram","Tiktok"]

  const handleSubmit=async()=>{
    const payload={
      name:name,
      url:url
    }
    try{
const res=await axios.post("http://localhost:3001/add-socialmedia",payload,{
  withCredentials:true
})
console.log(res.data)
    }catch(error){
      console.log(error)
    }
  }
    return(
      <div className="flex items-center justify-center h-auto min-h-[100vh]">
      <div className="bg-[#14171B] max-[470px]:p-[10px] p-[20px] w-[90%] max-[470px]:w-full max-[470px]:rounded-[0px]  rounded-[10px] flex flex-col items-center gap-[20px]">
        <FormHeader  title="Sosial media hesablarınız"/>
    <Select 
    items={socialMediaChoices}
    value={name}
    onChange={(value)=>{setName(value)}}
    />
    <Input 
    type="text"
    placeholder="Url daxil edin"
    name="url"
    value={url}
    onChange={(e)=>{setUrl(e.target.value)}}
    />
    <Button onClick={handleSubmit} text="Əlavə et"/>
      </div>
      </div>
    )
}