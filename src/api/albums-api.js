import {api, ids} from './api'

export const apiAlbum = {
  getSeveralAlbums : (market="US")=> api.get(`/albums?ids=${ids}&maket=${market}`)

}