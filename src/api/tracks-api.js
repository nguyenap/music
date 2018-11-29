import {api} from './api'
const apiTrack = {
  getATracks: (id)=> api.get(`/tracks/${id}`)
}

export {apiTrack};