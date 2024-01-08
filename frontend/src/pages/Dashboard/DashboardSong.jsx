import React, { useContext } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import Dashboard from './Dashboard'
import Search from '../../Components/Search/Search'
import DashboardSongContent from '../../Components/DashboardSong/DashboardSongContent'
import SongContext from '../../Context/SongContext/SongContext';
const DashboardSong = () => {
  const {allSong,handleDeleteSong,handleUpdateSong,newSongName,setNewSongName,newArtistName,setNewArtistName} = useContext(SongContext)
  return (
   <>
    <Dashboard/>
   <div className="w-full flex flex-col items-center justify-center ">
       {/* tiêu đề */}
       <p className=" text-slate-400 text-xl font-bold mt-4  hover:text-gray-700 rounded-md px-3 py-2  ">
          Songs
        </p>
        

        {/* search */}
        <div className="flex items-center">
          <NavLink to='/dashboard/add' className="text-2xl mr-4 hover:cursor-pointer"><IoIosAddCircleOutline/></NavLink>
          <Search />
        </div>
          <div className="  grid grid-cols-4 gap-12 w-[75%] my-12 p-4 border border-gray-300 bg-gray-200 ">
          {
            allSong?.map((song) => (
              <DashboardSongContent
              key = {song._id}
              image={song.image}
              nameSong ={song.name}
              artist={song.artist}
              handleDeleteSong={handleDeleteSong}
              songId={song._id}
              handleUpdateSong={handleUpdateSong}
              newSongName = {newSongName}
              setNewSongName = {setNewSongName}
              newArtistName ={newArtistName}
              setNewArtistName = {setNewArtistName}
              />
            ))
          }
      </div>

   </div>
   
   </>
  )
}

export default DashboardSong