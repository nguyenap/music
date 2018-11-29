const localData={
  setCurrentSong:song => localStorage.setItem("current-song", song),

  getCurrentSong: new Promise (() => localStorage.getItem("current-song")),

  setAccessToken: (token) => localStorage.setItem("access_token", token),

  getAccessToken: () => localStorage.getItem("access_token")

}

export {localData};