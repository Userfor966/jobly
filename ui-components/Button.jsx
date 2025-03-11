export default function Button({ text,onClick }) {
    return (
        <button
        type="submit"
        onClick={onClick}
            className="
        bg-[#8A2BE2]
        w-auto
        min-w-[250px]
        max-[470px]:w-full
        min-w-[120px] 
        rounded-[5px] 
        flex 
        items-center 
        justify-center 
        text-white 
        font-400
        p-[7px]
        button-text">
            {text}
        </button>
    )
}