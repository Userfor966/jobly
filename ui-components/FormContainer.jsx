export default function FormContainer({children}){
    return(
        <div className="flex items-center justify-center h-auto min-h-[100vh]">
           <div className="bg-[#14171B] p-[20px] w-[50%] max-[750px]:w-full max-[750px]:min-h-[100vh] rounded-[10px] flex flex-col items-center gap-[20px]">
            {children}
           </div>
            </div>
    )
}