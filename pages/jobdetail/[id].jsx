import axios from "axios"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function JobDetail({job}){
    return(
        <div className="w-full flex items-start justify-center gap-[20px] pt-[20px]">
            <div className="fixed top-0 left-0 w-full h-[40px] flex items-center gap-[20px] bg-[#1B1F23] p-[10px] pl-[20px]">
<Link href="/" >
<ArrowBackIcon className="text-white"/>
</Link>
<h2 className="text-white font-bold">İş haqqında</h2>
            </div>
            <div className="flex flex-col gap-[30px] mt-[40px] w-[60%] max-[650px]:w-full max-[650px]:min-h-[100vh] bg-[#1B1F23] p-[20px]">
           <div className="flex flex-col gap-[20px]">
           <h1 className="text-white font-bold text-xl">{job?.title}</h1>
           
            <span className="text-white font-bold flex bg-blue-600 rounded-[3px] p-[5px] w-[120px] justify-center items-center">{job?.salary + " Azn"}</span>
           </div>
           <div className="flex gap-[15px] flex-col">
  {job?.description?.split(". ").map((sentence, index) => (
    <p key={index} className="text-white">
      {sentence.trim()}
    </p>
  ))}
</div>
<div className="flex gap-[10px]">
    <a href={`tel://${job?.phone}`} className="bg-blue-600 p-[5px] w-[100px] text-white flex items-center justify-center gap-[10px]">
        <CallIcon className="text-white"/>
        Telefon
        </a>
    <a href={`mailto://${job?.email}`} className="bg-red-600 p-[5px] w-[100px] text-white flex items-center justify-center gap-[10px]">
        <EmailIcon className="text-white"/>
        Email
        </a>
</div>
        </div>
        </div>
    )
}
export async function getServerSideProps(context) {
    const { id } = context.params; 
  
    try {
      const res = await axios.get(`http://localhost:3001/job/${id}`,); // Backend'e isteği gönder
   console.log(res.data)
      return {
        props: { 
          job: res.data,
        }, // Gelen veriyi props olarak gönder
      };
    } catch (error) {
      console.error("Error fetching user:", error);
      return {
        props: { job: null }, // Hata durumunda null döndür
      };
    }
  }