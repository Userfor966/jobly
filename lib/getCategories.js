import axios from "axios"

export const getCategories= async()=>{
    try{
        const res=await axios.get("http://localhost:3001/categories")
        return res.data.categories
    }catch(error){
        console.log(error)
        return error
    }
}