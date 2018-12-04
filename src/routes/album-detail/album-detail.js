import React from 'react'

import './album-detail.scss'
import Track from '../../components/track/track';
import { apiTrack } from '../../api/tracks-api';
import { localData } from '../../common/until/dataLocal';
import { emitter, EventTypes } from '../../common/until/EventEmitter';
import { apiAlbum } from '../../api/albums-api';
import Spinner from '../../components/spinner/spinner';


export default class AlbumDetail extends React.Component {
  constructor(props) {
    super(props);
    let {album} = props.location.state
    let {tracks} = album;
    this.state = {
      currentStracksId: "",
      album: tracks?album:null,
    }
  }
  componentDidMount(){
    let {album}= this.state;
    let albumID = window.location.search.replace("?","")
    if(!album){
      apiAlbum.getAlbumsByID(albumID)
      .then(res =>{
        console.log('res', res);
        setTimeout(()=>{
          if(!res.error){
            this.setState({
              album:res
            })
          }
        }, 1000)
        
      })
      .catch(e => console.log(e));
    }
  }
  play() {
    emitter.emit(EventTypes.PLAY_MUSIC)
  }

  render() {
    let {album} = this.state;
    const { name, artists, images, release_date, total_tracks, tracks } = album?album:"";
    console.log('list', tracks)
    return (
      <div className="container-album">
      {album
      ?
        <div className="album-detail">
          <div className="album-description">
            <img src={images[0].url} className="album-image" />
            <div className="album-title">{name}</div>
            <div className="text artist">
              Artist:
            <span>{artists.map(artists => (
                <span> {artists.name} </span>
              ))}
              </span>
            </div>
            <div className="text">
              Release date: <span>{release_date}</span>
            </div>
            <div className="text">
              Total tracks: <span>{total_tracks}</span>
            </div>
          </div>
          <div className="song-list">
            <div className="tracks-container">
              {tracks.items.length > 0 && tracks.items.map(track => (
                <Track
                  song = {track}
                  onClick={() => this.play()}
                />
              ))}
            </div>
          </div>
        </div>
        :
        <div>
          <Spinner/>
          <div>Loading</div>

        </div>
        }
      </div>
    );
  };
};