import Button from "@/ui-components/Button";
import FormHeader from "@/ui-components/FormHeader";
import Input from "@/ui-components/Input";
import axios from "axios"
import { useState } from "react";
export default function SkillsForm(){
    const [skills, setSkills] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Skill'leri virgüllere göre ayır ve boşlukları temizle
        const skillsArray = skills
          .split(",")
          .map((skill) => skill.trim())
          .filter((skill) => skill.length > 0);
    
        if (skillsArray.length === 0) {
          alert("Lütfen en az bir bilik (skill) girin.");
          return;
        }
    
        try {
          const response = await axios.post(
            "http://localhost:3001/add-skill",
            { skills: skillsArray },
            { withCredentials: true }
          );
          console.log("Biliklər uğurla əlavə edildi:", response.data);
          setSkills(""); // Input'u temizle
        } catch (error) {
          console.error("Hata:", error.response ? error.response.data : error.message);
        }
      };
    return(
        <div className="flex items-center justify-center h-auto min-h-[100vh]">
        <div className="bg-[#14171B] p-[20px] w-[90%] rounded-[10px] flex flex-col items-center gap-[20px]">
            <FormHeader title="Biliklər"/>
            <Input type="text" placeholder="Biliklər"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            />
            <p className="text-[#f5f6f7] w-full text-start">Biliklərinizi vergül ilə ayrılmış formada daxil edin</p>
        <Button onClick={handleSubmit} text="Təsdiqlə"/>
        </div>
        </div>
    )
}