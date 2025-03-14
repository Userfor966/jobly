import Button from "@/ui-components/Button"
import FormHeader from "@/ui-components/FormHeader"
import Input from "@/ui-components/Input"
import Select from "@/ui-components/Select"
import DateSelect from "@/ui-components/SelectForDate"
import axios from "axios"
import { useState } from "react"
export default function AddPersonalInformation(){
    const [gender,setGender]=useState("")
    const [age,setAge]=useState("")
    const [militaryStatus,setmilitaryStatus]=useState("")
     const [driverLicence,setdriverLicence]=useState("")
     const [maritalStatus,setmaritalStatus]=useState("")
   const [educationLevel,setEducationLevel]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const payload={
            gender:gender,
            militaryStatus:militaryStatus,
            maritalStatus:maritalStatus,
            age:age,
            driverLicence:driverLicence,
            educationLevel:educationLevel
        }
try{
const res=await axios.patch("http://localhost:3001/personal-information",payload,{
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
          label="Cinsiniz"
        value={gender}
        items={["Kişi","Qadın"]}
        onChange={(value)=>{setGender(value)}}
      />
         <Select
          label="Təhsil"
        value={educationLevel}
        items={["Orta təhsil","Ali təhsil"]}
        onChange={(value)=>{setEducationLevel(value)}}
      />
         <Select
         label="Hərbi bilet"
        value={militaryStatus}
        items={["Var","Yoxdur"]}
        onChange={(value)=>{setmilitaryStatus(value)}}
      />
   <Select
   label="Sürücülük vəsiqəsi"
        value={driverLicence}
        items={["Var","Yoxdur"]}
        onChange={(value)=>{setdriverLicence(value)}}
      />
       <Select
       label="Ailə vəziyyəti"
        value={maritalStatus}
        items={["Evli","Subay"]}
        onChange={(value)=>{setmaritalStatus(value)}}
      />
    <Input 
    type="number"
    placeholder="Yaşınız"
    onChange={(e)=>{setAge(e.target.value)}}
    />
            <Button onClick={handleSubmit} text="Gonder"/>
          </div>
          </div>
    )
}