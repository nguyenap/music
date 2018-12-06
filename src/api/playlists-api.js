import {api} from './api'
const apiPlayList = {
  getAPlayList: (playListId, params)=>api.get(`/playlists/${playListId}`,params),

  getAPlistTracks: (playListId, params) => api.get(`/playlists/${playListId}/tracks`, params)
}

export {apiPlayList}