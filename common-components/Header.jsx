import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Link from 'next/link';
import TuneIcon from '@mui/icons-material/Tune';
import { useState } from 'react';
export default function Header({setOpenFilter}){
    return(
        <div className="flex justify-between items-center p-[15px] bg-[#1B1F23] h-[50px]">
            <div className='flex items-center gap-[10px]'>
                <h1 className="text-white font-bold text-2xl">Joobly</h1>
            </div>
            <div className='flex gap-[15px] items-center'>
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