import React from 'react'

import './album-detail.scss'
import Track from '../../components/track/track';
import { apiTrack } from '../../api/tracks-api';
import { localData } from '../../common/until/dataLocal';
import { emitter, EventTypes } from '../../common/until/EventEmitter';
import { apiAlbum } from '../../api/albums-api';
import Spinner from '../../components/spinner/spinner';

import querystring from 'query-string'

export default class AlbumDetail extends React.Component {
  constructor(props) {
    super(props);
    let { location } = props;
    let { data } = location ? location.state ? location.state : [] : [];
    let tracks = data ? data.tracks : [];
    this.state = {
      currentStracksId: "",
      album: tracks ? data : null,
      loading: true,
    }
  }

  componentDidMount() {
    let { album } = this.state;
    let { location } = this.props;
    if (!album) {
      let albumID = location ? querystring.parse(location.search).id : "";
      if (albumID !== "") {
        this.getAlbums(albumID);
      }
    }
  }

  getAlbums(albumID) {
    apiAlbum.getAlbumsByID(albumID)
      .then(res => {
        // console.log('res', res);
        setTimeout(() => {
          if (!res.error) {
            this.setState({
              album: res
            })
          }
        }, 1000)
        this.setState({
          loading: false,
        })

      })
      .catch(e =>
        this.setState({
          loading: false,
        }));
  }
  play() {
    emitter.emit(EventTypes.PLAY_MUSIC)
  }

  render() {
    let { album, loading } = this.state;
    const { name, artists, images, release_date, total_tracks, tracks } = album ? album : "";
    // console.log('list', tracks)
    return (
      <div className="container-album">
        {album
          ?
          <div className="album-detail">
            <div className="album-description">
              <img src={images[0].url} className="album-image" />
              <div className="album-description-detail">
                <div className="album-title">{name}</div>
                <div className="text artist">
                  Artist:
                  <span>
                    {artists.map(artists => (
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
            </div>
            <div className="song-list">
              <div className="tracks-container">
                {tracks.items.length > 0 && tracks.items.map(track => (
                  <Track
                    song={track}
                    onClick={() => this.play()}
                  />
                ))}
              </div>
            </div>
          </div>
          :
          loading ?
            <div>
              <Spinner />
              <div style={{ color: "#fff", textAlign: "center" }}>Loading</div>

            </div>
            :
            <div>
              <div style={{ fontSize: 30, color: "#fff", textAlign: "center" }}>no content, please login again</div>

            </div>
        }
      </div>
    );
  };
};