import React from 'react'

import './album-detail.scss'
import Track from '../../components/track/track';
import { apiTrack } from '../../api/tracks-api';
import { localData } from '../../common/until/dataLocal';
import { emitter, EventTypes } from '../../common/until/EventEmitter';

export default class AlbumDetail extends React.Component {
  constructor(props) {
    super(props);
    this.album = { ...props.location.state.album };
    this.state = {
      currentStracksId: ""
    }
  }
  play() {
    emitter.emit(EventTypes.PLAY_MUSIC)
  }

  render() {
    console.log('album', this.album)
    const { name, artists, images, release_date, total_tracks, tracks } = this.album;
    console.log('list', tracks)
    return (
      <div className="container-album">
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
      </div>
    );
  };
};