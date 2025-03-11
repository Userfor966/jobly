import axios from "axios"
export const deleteAccount=async(password)=>{
    const payload={
        password:password
    }
    try{
        const res=await axios.post("http://localhost:3001/delete-account",payload,{
            withCredentials:true
        })
        console.log(res.data)
        window.location.href="/"
    }catch(error){
        console.log(error)
    }
}