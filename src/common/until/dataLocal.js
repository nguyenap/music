const localData={
  setCurrentSong:song => localStorage.setItem("current-song", song),

  getCurrentSong: () => localStorage.getItem("current-song"),

  setAccessToken: (token) => localStorage.setItem("access_token", token),

  getAccessToken: () => localStorage.getItem("access_token"),

  setCurrentAlbumID: (id) => localStorage.setItem("current-album-id", id),

  getCurrentAlbumID: () => localStorage.getItem("current-album-id"),

  setCurrentPlaylistID: (id) => localStorage.setItem("current-playlist-id", id),

  getCurrentPlaylistID: () => localStorage.getItem("current-playlist-id"),

  setCurrentCatagoryID: (id) => localStorage.setItem("current-category-id", id),

  getCurrentCatagoryID: () => localStorage.getItem("current-category-id")
}

export {localData};