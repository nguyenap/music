import {api} from './api'

const apiBrowser = {
  getAvailableGenreSeeds: ()=> api.get('/recommendations/available-genre-seeds'),

  getAListCategories: ()=>api.get('/browse/categories'),

  getASingleBrowserCategory: (id, params)=>api.get(`/browse/categories/${id}`,{params}),
}
export {apiBrowser};