import {api, ids} from './api'

export const apiAlbum = {
  getSeveralAlbums : (market="VN")=> api.get(`/albums?ids=${ids}&maket=${market}`),
  getAlbumsByID: (id)=>api.get(`/albums/${id}`)
}