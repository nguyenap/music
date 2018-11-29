import {api} from './api'
const apiPlayList = {
  getList: (option)=>api.get("/me/playlists",{option})
}

export {apiPlayList}