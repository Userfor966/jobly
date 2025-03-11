import axios from "axios";
export const getJobs=async()=>{
    try {
        const res = await axios.get("https://admin-9i92.onrender.com/getJobs"); // Backend URL'ni buraya yaz
        return res.data
      } catch (error) {
        return error.response.data.message;
      }
}