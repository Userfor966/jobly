import { useState } from "react"
import {motion} from "framer-motion"
export default function CategoryDropdown({ label, items, onChange }) {
    const [show, setShow] = useState(false)
    const [title,setTitle]=useState(label)
    const handleSelect = (item) => {
        setTitle(item.name);
        setShow(false);
        onChange && onChange(item.name);
       // Ana bileşene seçilen değeri gönder
    };
    return (
        <div
            className={`
            bg-[#14171B]
            ${show ? "h-auto" : "h-[45px]"}
            w-full 
            outline-0 
            rounded-[3px]
            flex
            flex-col
            gap-[5px]
        `}
        >
            <div
                onClick={() => { setShow(show ? false : true) }}
                className="
                bg-[#242424]  
                rounded-[3px]  
                text-white 
                h-[45px] 
                flex 
                items-center 
                pl-[10px]"
            >
                {title}
            </div>
            <div
            className={`${show ? "h-auto max-h-[250px] overflow-scroll" : "h-[0%] overflow-hidden"} flex flex-col bg-[#242424] noscroll  rounded-[3px]`}>
                {items?.map((item, index) => {
                    return <div className="flex flex-col">
<span key={index}
                    className="flex items-center p-[5px] pl-[10px] font-bold  text-[#9CA3AF]">{item.categoryName}</span>
                    {item?.subcategories.map((subcategory,index)=>{
                        return <span
                        onClick={() => handleSelect(subcategory)}
                        className="flex items-center p-[5px] pl-[20px]  text-[#9CA3AF]"
                        >{subcategory.name}</span>
                    })}
                        </div>
                })}
            </div>
        </div>
    )
}