import {api} from './api';

export const libraryApi = {
  removeAlbums : api.delete('/v1/me/albums'),
  removeTracks: api.delete('v1/me/tracks')

}