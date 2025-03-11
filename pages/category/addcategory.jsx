import { useState } from "react";
import axios from "axios";
import Button from "@/ui-components/Button";
import Input from "@/ui-components/Input";
import FormHeader from "@/ui-components/FormHeader";
export default function CategoryForm() {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    // Form verilerini hazırla
    const payload={
        categoryName:categoryName
    }

    try {
      const response = await axios.post("http://localhost:3001/add-category", payload);
console.log(response.data.message)
     
    } catch (error) {
     console.log(error)
    }
  };

  return (
    <div className="flex items-center justify-center h-auto min-h-[100vh]">
    <div className="bg-[#14171B] p-[20px] w-[90%] rounded-[10px] flex flex-col items-center gap-[20px]">
 <div className="flex flex-col items-center gap-[15px] w-full">
     <FormHeader step={1} title="Kateqoriya əlavə et" />
     <Input
       type="text"
       placeholder="Kateqoriya adı"
       name="categoryName"
       value={categoryName}
       onChange={(e)=>{setCategoryName(e.target.value)}}
     />
     <Button onClick={handleSubmit} text="Əlavə et"/>
     </div>
      </div>
 </div>
  );
}
