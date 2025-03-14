import axios from "axios"
export const getUsers=async()=>{
    try {
        const response = await axios.get("http://localhost:3001/users");
        console.log(response)
        return response.data
        }
       catch (error) {
     return error.response?.data?.message
    }
}