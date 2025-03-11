import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
export default function FormHeader({ title }) {
const router=useRouter()
    const returnBack=()=>{
router.push("/")
    }
    return (
        <div className="flex items-center justify-between gap-[20px] w-full  ">
            <p className="text-white font-400 text-[18px]">{title}</p>
            <span
            onClick={()=>{returnBack()}}
            className="
            w-[20px] 
            h-[20px] 
            p-[3px] 
            flex 
            items-center 
            justify-center 
            rounded-full 
            bg-white 
            text-black 
            font-bold">
                <CloseIcon fontSize='small'/>
            </span>
        </div>
    )
}