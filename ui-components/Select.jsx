import { useState } from "react"
import {motion} from "framer-motion"
export default function Select({ label, items, onChange }) {
    const [show, setShow] = useState(false)
    const [title,setTitle]=useState(label)
    const handleSelect = (item) => {
        setTitle(item);
        setShow(false);
        onChange && onChange(item); 
    };
    return (
        <div
            onChange={onChange}
            className={`
            bg-[#14171B]
            ${show ? "h-auto" : "h-[40px]"}
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
                h-[40px] 
                flex 
                items-center 
                pl-[10px]"
            >
                {title}
            </div>
            <div
            className={`
            ${show ? "h-auto max-h-[250px] overflow-scroll" : "h-[0%] overflow-hidden"} 
            flex 
            flex-col 
            bg-[#242424] 
            noscroll  
            rounded-[3px]`
            }>
                {items.map((item, index) => {
                    return <span key={index}
                    onClick={() => handleSelect(item)}
                    className="
                    flex 
                    items-center 
                    p-[5px] 
                    pl-[10px]  
                    text-[#9CA3AF]">  
                    {item}
                    </span>
                })}
            </div>
        </div>
    )
}