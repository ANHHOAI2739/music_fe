import React, { useContext } from 'react'
import { FaUsers } from "react-icons/fa";
import { TbUserStar } from "react-icons/tb";
import { FiMusic } from 'react-icons/fi';
import { GiMusicalNotes } from 'react-icons/gi';
import Dashboard from './Dashboard'
import DashboardHomeBox from '../../Components/Dashboard/DashboardHomeBox'
import UserContext from '../../Context/UserContext/UserContext';

const DasgboardHome = () => {
  const {totalUsers} = useContext(UserContext)
  return (
    <>
    <Dashboard/>
    <div className="w-full flex flex-col items-center justify-center ">
    <div className="mt-40 grid grid-cols-4 gap-12">
    <DashboardHomeBox bgColor= 'bg-teal-100' icon={<FaUsers/>} text= 'Users' count={totalUsers}/>
    <DashboardHomeBox bgColor= 'bg-slate-200' icon={<FiMusic/>} text= 'Songs' count='1'/>
    <DashboardHomeBox bgColor= 'bg-orange-300' icon={<TbUserStar/>} text= 'Artists' count='2'/>
    <DashboardHomeBox bgColor= 'bg-red-300' icon={<GiMusicalNotes/>} text= 'Albums' count='1'/>
    
      
      </div>

    </div>
    </>
  )
}

export default DasgboardHome