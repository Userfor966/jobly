import axios from "axios"
export const getUsers=async()=>{
    try {
        const response = await axios.get("https://admin-9i92.onrender.com/users");
        console.log(response)
        return response.data
        }
       catch (error) {
     return error.response.data.message
    }
}