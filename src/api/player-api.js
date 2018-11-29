import {api} from './api'

const apiPlayer = {
  getDevices: ()=> api.get("/me/player/devices"),
  
}