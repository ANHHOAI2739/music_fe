import React, { useContext } from 'react';
import AuthenContext from '../../Context/AuthenContext/AuthenContext';

const Profile = () => {
  const {auth} = useContext(AuthenContext)
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[80%] p-4 bg-rose-200">
          <div className="flex flex-row">
            {/* ảnh */}
            <div className="relative w-40 h-40">
            
                <img
                  src={auth.user.profilePic}
                  alt="Avatar"
                  className="w-full h-full rounded-full object-cover"
                />
            
            </div>
            
            {/* cột hiện tên */}
            <div className="ml-4">
              <h2 className="text-2xl text-white  text-center border bg-neutral-800">{auth.user.username}</h2>
              <h2 className=" mt-2 text-xl text-white  text-center border bg-neutral-800">{auth.user.email}</h2>
              {/* Thêm các thành phần khác liên quan đến thông tin người dùng */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;