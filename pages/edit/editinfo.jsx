import { useState,useEffect } from "react"
import axios from "axios"
import ChooseImage from "@/ui-components/ChooseImage"
import FormHeader from "@/ui-components/FormHeader"
import Input from "@/ui-components/Input"
import Button from "@/ui-components/Button"
import { useSelector } from "react-redux"
import { cities } from "@/data/city"
import Select from "@/ui-components/Select"
import { getCategories } from "@/lib/getCategories"
import CategoryDropdown from "@/ui-components/CategoryDropdown"
import FormContainer from "@/ui-components/FormContainer"
export default function AboutForm() {
  const {user}=useSelector(state=>state.user)
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [position,setPosition]=useState("")
  const [salary,setSalary]=useState(null)
  const [city,setCity]=useState("")
  const [image,setImage]=useState(null)
  const [categories,setCategories]=useState([])

useEffect(()=>{
  getCategories().then((data)=>{
setCategories(data)
console.log(data)
  })
},[])
   
  
   
  const handleSubmit = async (e,userId) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("position", position);
    formData.append("salary",salary);
    formData.append("city", city);
    if (image) {
      formData.append("image", image);
    }
    try {
      const response = await axios.patch(`https://admin-9i92.onrender.com/updateinfo`, formData,
      {
        withCredentials:true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },}
      );
      console.log("Güncelleme başarılı:", response.data);
    } catch (error) {
      console.error("Hata:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <FormContainer>
      <FormHeader  title="Profil məlumatları" />
     <ChooseImage setImage={setImage} />
      <Input
        type="text"
        placeholder="Adınız"
        name="firstName"
        value={firstName}
        onChange={(e)=>{setFirstName(e.target.value)}}
      />
      <Input
        type="text"
        placeholder="Soyadınız"
        name="lastName"
        value={lastName}
        onChange={(e)=>{setLastName(e.target.value)}}
      />
      <CategoryDropdown
      label="Fəaliyyət sahəniz"
      items={categories}
        onChange={(selectedItem)=>{setPosition(selectedItem)}}
      />
      <Input
        type="number"
        placeholder="Əmək haqqı gözləntiniz"
        name="salary"
        value={salary}
        onChange={(e)=>{setSalary(e.target.value)}}
      />
      <Select
        label="Şəhər"
        items={cities}
        onChange={(value)=>{setCity(value)}}
      />
      <Button onClick={handleSubmit} text="Təsdiqlə"/>
      </FormContainer>
  
  
  )
}