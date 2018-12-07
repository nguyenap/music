import {api} from './api'

const apiBrowser = {
  getAListFeatured: (params)=>api.get('/browse/featured-playlists',{params}),

  getAvailableGenreSeeds: ()=> api.get('/recommendations/available-genre-seeds'),

  getAListCategories: ()=>api.get('/browse/categories'),

  getASingleBrowserCategory: (id, params)=>api.get(`/browse/categories/${id}`,{params}),

  getACategoryPlaylists:(id, params)=>api.get(`/browse/categories/${id}/playlists`,{params}),
}
export {apiBrowser};