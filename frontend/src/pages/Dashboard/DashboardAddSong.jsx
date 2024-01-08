import React, { useContext } from "react";
import Dashboard from "./Dashboard";
import DashboardAddImage from "../../Components/DashboardAddSongs/DashboardAddImage";
import DashboardAddAudio from "../../Components/DashboardAddSongs/DashboardAddAudio";
import SongContext from "../../Context/SongContext/SongContext";
import DashboardAddArtistImg from "../../Components/DashboardAddSongs/DashboardAddArtistImg";

const DashboardAddSong = () => {
  const {
    songData,
    setSongData,
    handleImageChange,
    handleAudioChange,
    handleArtistImageChange,
    handleSubmit,
  } = useContext(SongContext);
  return (
    <>
      <Dashboard />
      <div className="flex justify-center">
        <form className="w-4/5" onSubmit={handleSubmit}>
          <div className="p-10 flex">
            <div className="mb-4 w-1/5 mr-4">
              <div>
                <input
                  id="artist"
                  name="artist"
                  type="text"
                  autoComplete="artist"
                  placeholder="Artirts Name"
                  className="px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 w-full"
                  onChange={(e) =>
                    setSongData({ ...songData, artist: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mb-4 w-1/5 mr-4">
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Song Name"
                  className="px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 w-full"
                  onChange={(e) =>
                    setSongData({ ...songData, name: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mb-4 w-1/5 mr-4">
              <div>
                <input
                  id="album"
                  name="album"
                  type="text"
                  autoComplete="album"
                  placeholder="Album"
                  className="px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 w-full"
                  onChange={(e) =>
                    setSongData({ ...songData, album: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mb-4 w-1/5 mr-4">
              <div>
                <input
                  id="category"
                  name="category"
                  type="text"
                  autoComplete="category"
                  placeholder="Category"
                  className="px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 w-full"
                  onChange={(e) =>
                    setSongData({ ...songData, category: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="mb-4 w-1/5 mr-4">
              <div>
                <input
                  id="language"
                  name="language"
                  type="text"
                  autoComplete="language"
                  placeholder="Language"
                  className="px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 w-full"
                  onChange={(e) =>
                    setSongData({ ...songData, language: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between ml-2 p-10 ">
              {/* image */}
              <DashboardAddArtistImg
                handleArtistImageChange={handleArtistImageChange}
              />
              <DashboardAddImage handleImageChange={handleImageChange} />
              {/* audio */}
              <DashboardAddAudio handleAudioChange={handleAudioChange} />
            </div>
            <button className="ml-10 px-4 rounded-full border-solid border-2 border-red-600">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DashboardAddSong;
