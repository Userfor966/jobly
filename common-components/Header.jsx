import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Link from 'next/link';
export default function Header(){
    return(
        <div className="flex justify-between items-center p-[15px] bg-[#1B1F23] h-[50px]">
            <div className="p-[20px]">
                <h1 className="text-white font-bold text-2xl">Joobly</h1>
            </div>
            <div className='flex gap-[15px] items-center p-[20px]'>
                <Link href="/addjob">
                <AddBoxOutlinedIcon className='text-white' fontSize='medium'/>
                </Link>
                <Link href="/profile">
                <AccountCircleOutlinedIcon className='text-white' fontSize='medium'/>
                </Link>
            </div>
        </div>
    )
}