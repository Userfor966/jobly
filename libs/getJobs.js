import axios from "axios";
export const getJobs=async()=>{
    try {
        const res = await axios.get("http://localhost:3001/getJobs"); // Backend URL'ni buraya yaz
        return res.data
      } catch (error) {
        return error.response.data.message;
      }
}