import {api} from './api'

const apiSearch={
  search: params=>api.get('/search', params)
}
export {apiSearch}