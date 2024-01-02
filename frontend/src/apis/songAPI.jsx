import axiosInstance from "./axiosInstance";

const songAPI = {
  getAllSong:() =>axiosInstance.get("/songs"),
  addSong: (values) => axiosInstance.post("/songs",values),
  addImage: (values) => axiosInstance.post("/songs/image",values),
  addArtistImg: (values) => axiosInstance.post("/songs/artistImg",values),
  addAudio: (values) => axiosInstance.post("/songs/audio",values),
  deleteSong: (songId) => axiosInstance.delete(`/songs/${songId}`),
  updateSong:(songId) => axiosInstance.put(`/songs/${songId}`),

}

export default songAPI