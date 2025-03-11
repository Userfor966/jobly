import Button from "@/ui-components/Button"
import FormHeader from "@/ui-components/FormHeader"
import Input from "@/ui-components/Input"
import Textarea from "@/ui-components/Textarea"
import { useState,useEffect } from "react"
import axios from "axios"
import Select from "@/ui-components/Select"
import { cities } from "@/data/city"
import CategoryDropdown from "@/ui-components/CategoryDropdown"
import { getCategories } from "@/lib/getCategories"
import FormContainer from "@/ui-components/FormContainer"
export default function AddJob() {
    const [title, setTitle] = useState("")
    const [salary, setSalary] = useState(null)
    const [description, setDescription] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState("")
    const [category,setCategory]=useState("")
    const [gender,setGender]=useState("")
    const [otp,setOtp]=useState("")
    const [step,setStep]=useState(1)

    const [categories,setCategories]=useState([])

    useEffect(()=>{
      getCategories().then((data)=>{
    setCategories(data)
    console.log(data)
      })
    },[])

const handleSubmitOtp=async(e)=>{
e.preventDefault()


const payload={
    email:email,
 
}
try {
    const response = await axios.post(`http://localhost:3001/send-job-otp`, payload,
    {
      withCredentials:true,
     }
    );
    console.log("Güncelleme başarılı:", response.data);
    setStep(2)
  } catch (error) {
    console.error("Hata:", error.response ? error.response.data : error.message);
  }
}


const handleSubmit=async()=>{
    const payload={
        title:title,
        category:category,
        salary:salary,
        description:description,
        city:city,
        phone:phone,
        email:email,
        gender:gender,
        otp:otp,
    }
    try{
const res=await axios.post("http://localhost:3001/addjob",payload,{
    withCredentials:true
})
console.log(res.data)
    }catch(error){
        console.log(error)
    }
}
    return (
        <FormContainer>
            {step===1 && 
<>
                <FormHeader title="Yeni iş elanı" />
                <Input
                    placeholder="Email"
                    value={email}
                    type="text"
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                   <Input
                    placeholder="Əlaqə nömrəsi, (nümunə +99455xxxxxxxx)"
                    value={phone}
                    type="number"
                    onChange={(e) => { setPhone(e.target.value) }}
                />
                  <CategoryDropdown
      label="Kateqoriya"
      items={categories}
        onChange={(value)=>{setCategory(value)}}
      />
                 <Input
                    placeholder="Elan başlığı"
                    value={title}
                    type="text"
                    onChange={(e) => { setTitle(e.target.value) }}
                />
                   <Input
                    placeholder="Əmək haqqı"
                    value={salary}
                    type="number"
                    onChange={(e) => { setSalary(e.target.value) }}
                />
                <Select 
                label="Cinsi"
                items={["Kişi","Qadın","Fərqi yoxdur"]}
                value={gender}
                type="text"
                    onChange={(value) => { setGender(value) }}
                    />
    
                 <Select
                    label="Şəhər"
                    items={cities}
                    value={city}
                    type="text"
                    onChange={(value) => { setCity(value) }}
                />
                <Textarea
placeholder="Açıqlama"
onChange={(e)=>{setDescription(e.target.value)}}
                />
                <Button onClick={handleSubmitOtp} text="Əlavə et"/>

            </>}

            {step===2 && 
<>
                <FormHeader title="Təsdiqləmə kodu" />
                <Input
                    placeholder="Təsdiqləmə kodunu daxil edin"
                    value={otp}
                    type="text"
                    onChange={(e) => { setOtp(e.target.value) }}
                />
                <Button onClick={handleSubmit} text="Əlavə et"/>

            </>}
            </FormContainer>
    )
}