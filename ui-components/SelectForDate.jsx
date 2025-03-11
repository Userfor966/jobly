import { useState } from "react";

export default function DateSelect({placeholder,onChange}) {
  const [inputType, setInputType] = useState("text");
  const [value, setValue] = useState("");

  return (
    <input
      type={inputType}
      onFocus={() => setInputType("date")}
      onBlur={() => !value && setInputType("text")}
      placeholder={placeholder}
      className="
      text-white
      bg-[#242424] 
      pl-[10px] 
      p-[5px] 
      h-[40px] 
      w-full 
      outline-0 
      rounded-[3px]
      "
      onChange={onChange}
    />
  );
}