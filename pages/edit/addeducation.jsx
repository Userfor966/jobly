import DateSelect from "@/ui-components/SelectForDate";
import axios from "axios";
import { useState } from "react";
import FormHeader from "@/ui-components/FormHeader";
import Input from "@/ui-components/Input";
import Button from "@/ui-components/Button";
export default function AddEducation(){
    const [schoolName,setSchoolName]=useState("")
    const [specialty,setSpecialty]=useState("")
    const [degree,setDegree]=useState("")
    const [startYear,setStartYear]=useState(null)
    const [endYear,setEndYear]=useState(null)
    const handleSubmit = async (e,userId) => {
        e.preventDefault();
        const education={
            schoolName:schoolName,
            specialty:specialty,
degree:degree,
startYear:startYear,
endYear:endYear,
        }
     
        try {
          const response = await axios.post(`https://admin-9i92.onrender.com/add-education`, education,
          {
            withCredentials:true,
        }
          );
          console.log("Güncelleme başarılı:", response.data);
        } catch (error) {
          console.error("Hata:", error.response ? error.response.data : error.message);
        }
      };
    return(
        <div className="flex items-center justify-center h-auto min-h-[100vh]">
        <div className="bg-[#14171B] max-[470px]:p-[10px] p-[20px] w-[90%] max-[470px]:w-full max-[470px]:rounded-[0px]  rounded-[10px] flex flex-col items-center gap-[20px]">
      
          <FormHeader  title="Təhsil əlavə et" />
          <Input
            type="text"
            placeholder="Təhsil müəssisəsinin adı"
            name="schoolName"
            value={schoolName}
            onChange={(e)=>{setSchoolName(e.target.value)}}
          />
          <Input
            type="text"
            placeholder="İxtisas"
            name="specialty"
            value={specialty}
            onChange={(e)=>{setSpecialty(e.target.value)}}
          />
          <Input
            type="text"
            placeholder="Dərəcə"
            name="degree"
            value={degree}
            onChange={(e)=>{setDegree(e.target.value)}}
          />
         <div className="flex gap-[10px] items-center w-full">
            <DateSelect 
             placeholder="Daxil olduğunuz tarix"
             value={startYear}
             onChange={(e)=>{setStartYear(e.target.value)}}
            />
            <DateSelect 
            placeholder="Bitirdiyiniz tarix"
            value={endYear}
             onChange={(e)=>{setEndYear(e.target.value)}}
             />

         </div>
          <Button onClick={handleSubmit} text="Təsdiqlə"/>
         </div>
        </div>
    )
}