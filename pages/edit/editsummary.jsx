import FormHeader from "@/ui-components/FormHeader"
import Textarea from "@/ui-components/Textarea"
import { useState } from "react"
import axios from "axios"
import Button from "@/ui-components/Button"
import { toast } from "react-hot-toast"
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from "next/router"
export default function SummaryForm(){
  const [summary,setSummary]=useState("")
  const [loading,setLoading]=useState(false)
  const router=useRouter()
  const handleSubmit = async (e,userId) => {
    e.preventDefault();
    const data={
      summary:summary
    }
    setLoading(true)
    try {
      const response = await axios.patch(`http://localhost:3001/updateinfo`, data,
      {
        withCredentials:true,
}
      );
      setLoading(false)
      router.push("/profile")
    } catch (error) {
      toast.error(error.response ? error.response.data : error.message);
      setLoading(false)
    }
  };
    return(
      <div className="flex items-center justify-center h-auto min-h-[100vh]">
      <div className="bg-[#14171B] p-[20px] w-[90%] rounded-[10px] flex flex-col items-center gap-[20px]">
          <FormHeader step={2} title="Haqqınızda"/>
     
      <Textarea
      onChange={(e)=>{setSummary(e.target.value)}}
      value={summary}
          placeholder="Haqqınızda məlumat əlavə edin"
          name="summary"
          />
          <Button text={loading ?  <CircularProgress  className="text-white" size={30}/> : "Təsdiqlə"} onClick={handleSubmit}/>
      </div>
      </div>
       
    )
}