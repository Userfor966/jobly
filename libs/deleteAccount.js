import axios from "axios"
export const deleteAccount=async(password)=>{
    const payload={
        password:password
    }
    try{
        const res=await axios.post("https://admin-9i92.onrender.com/delete-account",payload,{
            withCredentials:true
        })
        console.log(res.data)
        window.location.href="/"
    }catch(error){
        console.log(error)
    }
}