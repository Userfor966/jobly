import { useState, useEffect } from "react";
import { getCategories } from "@/lib/getCategories";
import CloseIcon from "@mui/icons-material/Close";
import CategoryDropdown from "@/ui-components/CategoryDropdown";
import Input from "@/ui-components/Input";
import Select from "@/ui-components/Select";
import { cities } from "@/data/city";
import Button from "@/ui-components/Button";

export default function Filter({ setOpenFilter }) {
  const [filters, setFilters] = useState({
    category: "",
    minsalary: "",
    maxsalary: "",
    city: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 flex flex-col h-[100vh] gap-[20px] max-[500px]:w-full w-[20%] bg-[#1B1F23]">
      <div className="flex justify-between p-[10px] h-[40px] border-b-[1px] border-[#fafafa]">
        <h1 className="text-white font-bold">Ətraflı axtarış</h1>
        <CloseIcon onClick={() => setOpenFilter(false)} className="text-white cursor-pointer" />
      </div>
      <div className="flex flex-col gap-[10px] p-[10px]">
        <CategoryDropdown
          label="Kateqoriya"
          items={categories}
          value={filters.category}
          onChange={(value) => setFilters({ ...filters, category: value })}
        />
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
        <Select
          label="Şəhər"
          items={cities}
          value={filters.city}
          onChange={(value) => setFilters({ ...filters, city: value })}
        />
        <Button text="Axtar" onClick={()=>{console.log(filters)}} />
      </div>
    </div>
  );
}
