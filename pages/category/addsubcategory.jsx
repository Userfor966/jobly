import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@/ui-components/Button";
import Input from "@/ui-components/Input";
import FormHeader from "@/ui-components/FormHeader";
import Select from "@/ui-components/Select";
import { getCategories } from "@/lib/getCategories";
import CategoryDropdown from "@/ui-components/CategoryDropdown";

export default function AddSubCategoryForm() {
    const [categories,setCategories]=useState([])
    const [parent,setParent]=useState(null)
  const [name, setName] = useState("");
const [banner,setBanner]=useState(null)
  useEffect(()=>{
    getCategories().then((data)=>{
          setCategories(data);
    })
  },[])


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBanner(file)
      console.log(file)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData=new FormData()
    formData.append("categoryId",parent)
    formData.append("subcategoryName",name)
    if (banner) {
        formData.append("banner", banner);
      }

    try {
      const response = await axios.post("http://localhost:3001/add-subcategory", formData,  {
        headers: {
          'Content-Type': 'multipart/form-data',
        },});
console.log(response.data.message)
     
    } catch (error) {
     console.log(error)
    }
  };

  return (
    <div className="flex items-center justify-center h-auto min-h-[100vh]">
    <div className="bg-[#14171B] p-[20px] w-[90%] rounded-[10px] flex flex-col items-center gap-[20px]">
 <div className="flex flex-col items-center gap-[15px] w-full">
     <FormHeader step={1} title="Alt kateqoriya əlavə et" />
     <CategoryDropdown
     items={categories}
     onChange={(selectedCategory)=>{setParent(selectedCategory),console.log(selectedCategory)}}
     />
     <Input
       type="text"
       placeholder="Alt kateqoriya adı"
       name="name"
       value={name}
       onChange={(e)=>{setName(e.target.value)}}
     />
     <Input type="file"
     placeholder="Sekil sec"
     onChange={handleImageChange}/>
    
     <Button onClick={handleSubmit} text="Əlavə et"/>
     </div>
      </div>
 </div>
  );
}
