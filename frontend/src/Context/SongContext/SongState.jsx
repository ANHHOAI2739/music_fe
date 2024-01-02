import React, { useEffect, useState } from "react";
import SongContext from "./SongContext";
import songAPI from "../../apis/songAPI";

const SongState = ({ children }) => {
  const [allSong, setAllSong] = useState();
  const [newSongName, setNewSongName] = useState('');
  const [newArtistName, setNewArtistName] = useState('')
  const [songData, setSongData] = useState({
    artist: "",
    name: "",
    album: "",
    category: "",
    language: "",
    image: "",
    song: "",
    artistImg: "",
  });
  // console.log(songData);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const data = new FormData();
      data.append("image", file);
      const imageSong = await songAPI.addImage(data);
      console.log(imageSong.data.data);
      setSongData({ ...songData, image: imageSong.data.data });
    } catch (error) {
      console.log(error);
    }
  };
  const handleArtistImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const data = new FormData();
      data.append("artistImg", file);
      const imageArtist = await songAPI.addArtistImg(data);
      setSongData({ ...songData, artistImg: imageArtist.data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAudioChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const data = new FormData();
      data.append("audio", file);
      const imageAudio = await songAPI.addAudio(data);
      setSongData({ ...songData, song: imageAudio.data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await songAPI.addSong(songData);

      setSongData({
        artist: "",
        name: "",
        album: "",
        category: "",
        language: "",
        image: "",
        song: "",
        artistImg: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteSong = async (songId) => {
    console.log(songId);
    try {
      const song = await songAPI.deleteSong(`${songId}`);
      setAllSong((prev) => prev.filter((song) => song._id !== songId));
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateSong = async (songId,newSongName,newArtistName) => {
   console.log(newArtistName,'newArtistName');
    try {
      const {
       artist,
        name,
        album,
        category,
        language,
        image,
        song,
        artistImg,
      } = songData;
      const updateSong = await songAPI.updateSong(`${songId}`, {
        artist,
        name,
        album,
        category,
        language,
        image,
        song,
        artistImg,
      });
      console.log(updateSong);
      console.log(newArtistName,'newArtistName sau updateSong');
    } catch (error) {
      console.log(error);
    }
  };
  //get all
  useEffect(() => {
    const fetchAllSong = async () => {
      try {
        const response = await songAPI.getAllSong();
        if (response) {
          setAllSong(response.data.data);
        }
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllSong();
  }, []);
  return (
    <SongContext.Provider
      value={{
        allSong,
        setAllSong,
        songData,
        setSongData,
        handleImageChange,
        handleAudioChange,
        handleArtistImageChange,
        handleSubmit,
        handleDeleteSong,
        handleUpdateSong,
        newSongName,
        setNewSongName,
        newArtistName,
        setNewArtistName

      }}
    >
      {children}
    </SongContext.Provider>
  );
};

export default SongState;
