import React from 'react'
import Dashboard from './Dashboard'
import Search from '../../Components/Search/Search'
import DashboardArtistContent from '../../Components/DashboardArtist/DashboardArtistContent'
import DashboardAlbumsContent from '../../Components/DashboardAlbums/DashboardAlbumsContent'

const DashboardAlbums = () => {
  return (
    <>
    <Dashboard/>
   <div className="w-full flex flex-col items-center justify-center ">
       {/* tiêu đề */}
       <p className=" text-slate-400 text-xl font-bold mt-4  hover:text-gray-700 rounded-md px-3 py-2  ">
         Albums
        </p>
        

        {/* search */}
        <div className="flex items-center">
        
         <Search/>
        </div>
          <div className="  grid grid-cols-4 gap-12 w-[75%] my-12 p-4 border border-gray-300 bg-gray-200 ">
          <DashboardAlbumsContent image ='https://i.pinimg.com/236x/d4/3d/9a/d43d9aea26281198a6ad5e967d6d6421.jpg'  album='Nhạc rock'/>
            <DashboardAlbumsContent image ='https://i.pinimg.com/236x/e0/18/14/e018140ccae468e42d51fe393d27fa76.jpg' album='Nhạc trữ tình'/>
            <DashboardAlbumsContent image ='https://i.pinimg.com/236x/d0/2f/35/d02f3592bbb54feb81e2dbd9eb6fe4aa.jpg' album='Nhạc trẻ'/>
            <DashboardAlbumsContent image ='https://i.pinimg.com/236x/73/47/40/734740287b9dfe95a6e9118c07b4b99d.jpg'  album='Nhạc lãng mạn'/>
            <DashboardAlbumsContent image ='https://i.pinimg.com/236x/a1/26/35/a126359a151497dd1d087beb46a6416a.jpg'  album='Nhạc tình yêu'/>
            <DashboardAlbumsContent image ='https://i.pinimg.com/236x/73/d9/9b/73d99bf405247b4f9225387e108785cd.jpg'  album='Nhạc cháy'/>
            <DashboardAlbumsContent image ='https://i.pinimg.com/236x/be/5e/6a/be5e6abc8b8b7e97ff30b1a710580d61.jpg'  album='Nhạc suy'/>
            <DashboardAlbumsContent image ='https://i.pinimg.com/236x/f9/e3/dd/f9e3dde4415113166240bf7c571ed5e7.jpg'  album='Nhạc trap '/>
         
            
        
      </div>

   </div>
   
   </>
    
  )
}

export default DashboardAlbums