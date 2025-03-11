import UserCard from "@/components/UserCard";
import axios from "axios";

export default function Candidate({ users }) {
  return (
    <div>
      <h1>Namizədlər</h1>

  <div className="flex flex-col lg:flex-row w-full p-[10px] gap-[3px]">
  {users?.map((user) => {
          return <UserCard user={user}/>
})}
  </div>
     
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get("http://localhost:3001/users"); // Backend URL'ni buraya yaz
    return {
      props: { users: res.data }, // Gelen veriyi props olarak gönder
    };
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return {
      props: { users: [] }, // Hata durumunda boş liste döndür
    };
  }
}
