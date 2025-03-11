export default function Textarea({placeholder,onChange,value}){
    return (
        <textarea 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="text-white bg-[#242424] pl-[10px] p-[5px] h-[40px]  outline-0 rounded-[3px] min-w-full max-w-full min-h-[200px] max-h-[200px]">


        </textarea>
    )
}