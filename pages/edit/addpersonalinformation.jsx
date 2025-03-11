import Button from "@/ui-components/Button"
import FormHeader from "@/ui-components/FormHeader"
import Select from "@/ui-components/Select"
import DateSelect from "@/ui-components/SelectForDate"
import axios from "axios"
import { useState } from "react"
export default function AddPersonalInformation(){
    const [gender,setGender]=useState("")
    const [birthDate,setbirthDate]=useState("")
    const [militaryStatus,setmilitaryStatus]=useState("")
     const [driverLicence,setdriverLicence]=useState("")
     const [maritalStatus,setmaritalStatus]=useState("")
   
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const payload={
            gender:gender,
            militaryStatus:militaryStatus,
            maritalStatus:maritalStatus,
            birthDate:birthDate,
            driverLicence:driverLicence
        }
try{
const res=await axios.patch("https://admin-9i92.onrender.com/personal-information",payload,{
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
      
          <FormHeader  title="Şəxsi məlumatlar" />
          <Select
        value={gender}
        items={["Kişi","Qadın"]}
        onChange={(value)=>{setGender(value)}}
      />
         <Select
        value={militaryStatus}
        items={["Var","Yoxdur"]}
        onChange={(value)=>{setmilitaryStatus(value)}}
      />
   <Select
        value={driverLicence}
        items={["Var","Yoxdur"]}
        onChange={(value)=>{setdriverLicence(value)}}
      />
       <Select
        value={maritalStatus}
        items={["Evli","Subay"]}
        onChange={(value)=>{setmaritalStatus(value)}}
      />
      <DateSelect 
            placeholder="Doğum tarixiniz"
             value={birthDate}
             onChange={(e)=>{setbirthDate(e.target.value)}}
            />
            <Button onClick={handleSubmit} text="Gonder"/>
          </div>
          </div>
    )
}