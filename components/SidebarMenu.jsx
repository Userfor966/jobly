import { Sidebar } from "../styles/styled";

export default function SidebarMenu(){
    const lists=[
        "About",
        "Projects",
        "Education",
        "Skills",
        "Contact"
    ]
    return(
<Sidebar>
    <ul>
{lists.map((list,index)=>{
    return <li key={index}>{list}</li>
})}
    </ul>
</Sidebar>
    )
}