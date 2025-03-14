import { useState, useEffect } from "react";
import { getCategories } from "@/lib/getCategories";
import CloseIcon from "@mui/icons-material/Close";
import CategoryDropdown from "@/ui-components/CategoryDropdown";
import Input from "@/ui-components/Input";
import Select from "@/ui-components/Select";
import { cities } from "@/data/city";
import Button from "@/ui-components/Button";
import Checkboxes from "@/ui-components/checkbox";


export default function Filter({ setOpenFilter }) {
  const [filters, setFilters] = useState({
    category: "",
    minsalary: "",
    maxsalary: "",
    city: "",
  });
  const [gender,setGender]=useState("")
    const [birthDate,setbirthDate]=useState("")
    const [militaryStatus,setmilitaryStatus]=useState("")
     const [driverLicence,setdriverLicence]=useState("")
     const [maritalStatus,setmaritalStatus]=useState("")
   const [educationLevel,setEducationLevel]=useState("")
   const [minAge,setMinAge]=useState(null)
   const [maxAge,setMaxAge]=useState(null)

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
      console.log(data);
    });
  }, []);

  const handleSearch = async () => {
    const queryParams = new URLSearchParams({
      category: filters.category || "",
      minsalary: filters.minsalary || "",
      maxsalary: filters.maxsalary || "",
      city: filters.city || "",
      gender: gender || "",
      educationLevel: educationLevel || "",
      militaryStatus: militaryStatus || "",
      driverLicence: driverLicence || "",
      maritalStatus: maritalStatus || "",
      minAge: minAge || "",
      maxAge: maxAge || "",
    });
  console.log(queryParams.toString())
    try {
      const response = await fetch(`http://localhost:3001/users-search?${queryParams.toString()}`);
      const data = await response.json();
      console.log("Filtrelenen İstifadəçilər:", data);
    } catch (error) {
      console.error("Axtarış zamanı xəta:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 flex flex-col h-[100vh] gap-[20px] max-[500px]:w-full w-[20%] bg-[#1B1F23]">
      <div className="flex justify-between p-[10px] h-[40px] border-b-[1px] border-[#A9A9A9]">
        <h1 className="text-white font-bold">Ətraflı axtarış</h1>
        <CloseIcon onClick={() => setOpenFilter(false)} className="text-white cursor-pointer" />
      </div>
      <div className="flex flex-col overflow-scroll gap-[10px] p-[10px] noscroll">
        <CategoryDropdown
          label="Fəaliyyət sahəsi"
          items={categories}
          value={filters.category}
          onChange={(value) => setFilters({ ...filters, category: value })}
        />
       <div className="flex items-center gap-[3px]">
       <Input
          placeholder="Min əmək haqqı"
          value={filters.minsalary}
          type="number"
          onChange={(e) => setFilters({ ...filters, minsalary: e.target.value })}
        />
        <Input
          placeholder="Max əmək haqqı"
          value={filters.maxsalary}
          type="number"
          onChange={(e) => setFilters({ ...filters, maxsalary: e.target.value })}
        />
       </div>
       <div className="flex items-center gap-[3px]">
       <Input
          placeholder="Min yaş"
          value={minAge}
          type="number"
          onChange={(e) => setMinAge(e.target.value)}
        />
        <Input
          placeholder="Max yaş"
          value={maxAge}
          type="number"
          onChange={(e) => setMaxAge(e.target.value )}
        />
       </div>
         <Select
          label="Cinsi"
        value={gender}
        items={["Fərqi yoxdur","Kişi","Qadın"]}
        onChange={(value)=>{setGender(value)}}
      />
         <Select
          label="Təhsili"
        value={educationLevel}
        items={["Fərqi yoxdur","Orta təhsil","Ali təhsil"]}
        onChange={(value)=>{setEducationLevel(value)}}
      />
         <Select
         label="Hərbi bilet"
        value={militaryStatus}
        items={["Vacib deyil","Var","Yoxdur"]}
        onChange={(value)=>{setmilitaryStatus(value)}}
      />
   <Select
   label="Sürücülük vəsiqəsi"
        value={driverLicence}
        items={["Vacib deyil","Var","Yoxdur"]}
        onChange={(value)=>{setdriverLicence(value)}}
      />
       <Select
       label="Ailə vəziyyəti"
        value={maritalStatus}
        items={["Fərqi yoxdur","Evli","Subay"]}
        onChange={(value)=>{setmaritalStatus(value)}}
      />
        <Select
          label="Şəhər"
          items={cities}
          value={filters.city}
          onChange={(value) => setFilters({ ...filters, city: value })}
        />
        <Button text="Axtar" onClick={handleSearch} />
      </div>
    </div>
  );
}
