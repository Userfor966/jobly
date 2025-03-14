import { useState } from "react";
import Input from "@/ui-components/Input";
import FormHeader from "@/ui-components/FormHeader";
import Button from "@/ui-components/Button";
import { useRouter } from "next/router";
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import FormContainer from "@/ui-components/FormContainer";
export default function Login(){
  const [loading,setLoading]=useState(false)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
const router=useRouter()
const handleLogin = async () => {
  setLoading(true)
  const data = {
    email: email,
    password: password,
  };

  try {
    const res = await axios.post("http://localhost:3001/login",data,{
      withCredentials:true
    });

   
    if (res.status === 200) {
      
      router.push("/profile");  
    }
    setLoading(false)
  } catch (error) {
    console.log(error);
    setLoading(false)
  
  }
};
    return(
      <FormContainer>
        <FormHeader title="Giriş"/>
<Input
type="email"
placeholder="Email ünvanı"
value={email}
onChange={(e)=>{setEmail(e.target.value)}}
/>
<Input 
type="password"
placeholder="Şifrə"
value={password}
onChange={(e)=>{setPassword(e.target.value)}}
/>
<Button onClick={handleLogin} text={loading ? <CircularProgress  className="text-white" size={30}/> : "Giriş et"}/>
      </FormContainer>
    )
}