import DateSelect from "@/ui-components/SelectForDate";
import axios from "axios";
import { useState } from "react";
import FormHeader from "@/ui-components/FormHeader";
import Input from "@/ui-components/Input";
import Button from "@/ui-components/Button";
import Select from "@/ui-components/Select";
export default function AddLanguage(){
    const [name,setName]=useState("")
    const [level,setLevel]=useState("")
    const langs=["Azərbaycan","İngilis","Rus","Fransız"]
    const levels=["Əla","Orta","Zəif"]
   
    const handleSubmit = async (e,userId) => {
        e.preventDefault();
        const language={
            name:name,
            level:level,
        }
     
        try {
          const response = await axios.post(`https://admin-9i92.onrender.com/add-language`, language,
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
      
          <FormHeader  title="Dil əlavə et" />
        <Select
        items={langs}
        label="Dil seçin"
        onChange={(selectedItem)=>{setName(selectedItem)}}
        />
          <Select
        items={levels}
        label="Səviyyə seçin"
        onChange={(selectedItem)=>{setLevel(selectedItem)}}
        />
          <Button onClick={handleSubmit} text="Əlavə et"/>
         </div>
        </div>
    )
}