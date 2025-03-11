import { useState } from "react"
import axios from "axios"
import FormHeader from "@/ui-components/FormHeader"
import Input from "@/ui-components/Input"
import Button from "@/ui-components/Button"
import toast from "react-hot-toast";
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import FormContainer from "@/ui-components/FormContainer"
import CircularProgress from '@mui/material/CircularProgress';

export default function UserRegister() {
  const [step,setStep]=useState(1)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [phone,setPhone]=useState(null)
const [otp,setOtp]=useState(null)
const [loading,setLoading]=useState(false)
const {user}=useSelector(state=>state.user)
const router=useRouter()


  const handleSubmitOtp = async (e) => {
    e.preventDefault();
 const payload={
    email:email,
  }
  setLoading(true)
  
  try {
      const response = await axios.post("https://admin-9i92.onrender.com/send-otp", payload)
  setStep(2)
      setLoading(false)
    } catch (error) {
     setLoading(false)
  toast.error(error.response.data.message)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 const payload={
  firstName:firstName,
  lastName:lastName,
  password:password,
  phone:phone,
    email:email,
    otp:otp,
  }
  setLoading(true)
  try {
      const response = await axios.post("https://admin-9i92.onrender.com/register", payload)
      toast.success("Hesab uğurla yaradıldı")
      router.push="/authentication/login"
      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast.error(error.response?.data?.message)
    }
  };
 
  return (
   <FormContainer>
  {step===1 &&  <>
      <FormHeader step={1} title="Qeydiyyat" />
      <Input
        type="text"
        placeholder="Adınız"
        name="lastname"
        value={firstName}
        onChange={(e)=>{setFirstName(e.target.value)}}
      />
       <Input
        type="text"
        placeholder="Soyadınız"
        name="lastname"
        value={lastName}
        onChange={(e)=>{setLastName(e.target.value)}}
      />
      <Input
        type="number"
        placeholder="Telefon nömrəniz"
        name="phone"
        value={phone}
        onChange={(e)=>{setPhone(e.target.value)}}
      />
      <Input
        type="email"
        placeholder="Email ünvanı"
        name="email"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
      />
      <Input
        type="password"
        placeholder="Şifrə"
        name="password"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
      />
      <Button onClick={handleSubmitOtp} text={loading ? <CircularProgress className="text-white" size={30}/> : "Təsdiqləmə kodu göndər"}/>
    </>}
    {step===2 &&  <>
      <FormHeader step={1} title="Hesabı təsdiqlə" />
      <Input
        type="number"
        placeholder="Təsdiqləmə kodunu daxil edin"
        name="otp"
        value={otp}
        onChange={(e)=>{setOtp(e.target.value)}}
      />
      <Button onClick={handleSubmit} text={loading ? <CircularProgress className="text-white" size={30}/> : "Qeydiyyatı bitir"}/>
    </>}
    </FormContainer>
  )
}