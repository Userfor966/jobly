import axios from "axios"

export const getCategories= async()=>{
    try{
        const res=await axios.get("https://admin-9i92.onrender.com/categories")
        return res.data.categories
    }catch(error){
        console.log(error)
        return error
    }
}