import React, { useState } from 'react'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        search();
        setSearchTerm('')
      }
    };
  
    const search = () => {
      console.log("Searching:", searchTerm);
    };
  return (
    <div >
    <input
      type="text"
      placeholder="Search here"
      className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      onKeyPress={handleKeyPress}
    />
  </div>
  )
}

export default Search