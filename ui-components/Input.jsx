export default function Input({type,placeholder,onChange,value}){
    return(
        <input 
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
       
        className="
        text-white 
        bg-[#242424] 
        pl-[10px] 
        p-[5px] 
        h-[45px] 
        w-full 
        outline-0 
        rounded-[3px]
        ">

        </input>
    )
}