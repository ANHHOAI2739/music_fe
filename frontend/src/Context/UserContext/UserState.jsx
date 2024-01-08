import React, { useState } from "react";
import UserContext from "./UserContext";


const UserState = ({ children }) => {

const [allUsers, setAllUsers] = useState()
const [totalUsers, setTotalUsers] = useState(0);
  return (
    <UserContext.Provider
      value={{
       allUsers,
       setAllUsers,
       totalUsers,
       setTotalUsers
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
