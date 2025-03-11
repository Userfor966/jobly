import DateSelect from "@/ui-components/SelectForDate";
import axios from "axios";
import { useState } from "react";
import FormHeader from "@/ui-components/FormHeader";
import Input from "@/ui-components/Input";
import Button from "@/ui-components/Button";
export default function AddExperience(){
    const [company,setCompany]=useState("")
    const [position,setPosition]=useState("")
    const [startYear,setStartYear]=useState(null)
    const [endYear,setEndYear]=useState(null)
    const handleSubmit = async (e,userId) => {
        e.preventDefault();
        const experience={
            company:company,
            position:position,
startYear:startYear,
endYear:endYear,
        }
     
        try {
          const response = await axios.post(`http://localhost:3001/add-experience`, experience,
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
      
          <FormHeader  title="Təcrübə əlavə et" />
          <Input
            type="text"
            placeholder="Şirkət adı"
            name="company"
            value={company}
            onChange={(e)=>{setCompany(e.target.value)}}
          />
          <Input
            type="text"
            placeholder="Vəzifə"
            name="position"
            value={position}
            onChange={(e)=>{setPosition(e.target.value)}}
          />
         <div className="flex gap-[10px] items-center w-full">
            <DateSelect 
            placeholder="Başlanğıc tarixi"
             value={startYear}
             onChange={(e)=>{setStartYear(e.target.value)}}
            />
            <DateSelect 
            placeholder="Bitirdiyiniz tarix"
            value={endYear}
             onChange={(e)=>{setEndYear(e.target.value)}}
             />

         </div>
          <Button onClick={handleSubmit} text="Əlavə et"/>
         </div>
        </div>
    )
}