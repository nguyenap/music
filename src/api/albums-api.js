import {api, ids} from './api'

export const apiAlbum = {
  getSeveralAlbums : (market="VN")=> api.get(`/albums?ids=${ids}&maket=${market}`, {limit: 30}),
  getAlbumsByID: (id)=>api.get(`/albums/${id}`)
}