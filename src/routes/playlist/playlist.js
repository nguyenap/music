import React from 'react'
import { apiPlayList } from '../../api/playlists-api';

import './playlist.scss'
import Spinner from '../../components/spinner/spinner';
import Track from '../../components/track/track';
import { emitter, EventTypes } from '../../common/until/EventEmitter';
import querystring from 'query-string';

export default class PlayList extends React.Component {
  constructor(props) {
    super(props);
    console.log("props233232", props)
    this.state = {
      playList: null,
      loading: true,
    }
  }
  componentDidMount() {
    let { playList } = this.state;
    let { location } = this.props;
    let playListID = location ? querystring.parse(location.search).id : "";;
    !playList ?
      playListID !== ""
        ? this.getAPlayList(playListID) : console.log("no id") : console.log("no state");

  }

  getAPlayList(playListId) {
    let params = {
      market: "VN",
      fields: "fields=name,description,owner(!href,external_urls),images",
    }
    apiPlayList.getAPlayList(playListId, params)
      .then(res => {
        console.log('playlist', res);
        if (!res.error) {
          this.setState({
            playList: res
          })
        };
        this.setState({
          loading: false,
        })
      })
      .catch(e => this.setState({ loading: false }))
  }
  getAPlayListTracks(playListId) {
    let params = {
      market: "VN",
      fields: "name,items(track(name,href,id,preview_url,artists,duration_ms))",
      limit: 20,
      offset: 0
    }
    apiPlayList.getAPlistTracks(playListId, params)
      .then(res => {
        // console.log('tracks', res);
        if (!res.error) {
          this.setState({
            tracks: res,
          })
        };
        this.setState({
          loading: false,
        })

      })
      .catch(e => this.setState({ loading: false }))
  }

  play(track) {
    let { history } = this.props;
    // history.push({
    //   hash:track.track.name
    // })
    emitter.emit(EventTypes.PLAY_MUSIC)
  }

  render() {
    let { playList, loading } = this.state;
    const { name, artists, owner, description, images, release_date, total_tracks, tracks } = playList ? playList : "";
    return (
      <div className="container-playlist">
        {playList
          ?
          <div className="playlist-detail">
            <div className="playlist-description">
              <img src={images[0].url} className="playlist-image" />
              <div className="playlist-description-detail">
                <div className="playlist-title">{name}</div>
                <div className="text artist">
                  {artists ?
                    <span>{artists.map(artists => (
                      <span> {artists.name}</span>
                    ))}
                    </span>
                    : <span>{owner.display_name}</span>
                  }
                </div>
                <div className="text">
                  {
                    release_date ? <span>{release_date}</span> : ""
                  }
                  {

                    description ? <span>{description}</span> : ""
                  }
                </div>
                <div className="text">
                  Total: <span>{total_tracks ? total_tracks : tracks.items.length}songs</span>
                </div>
              </div>
            </div>
            <div className="song-list">
              <div className="tracks-container">
                {tracks.items.length > 0 && tracks.items.map(track => (
                  <Track
                    song={track.track}
                    onClick={() => this.play(track)}
                  />
                ))}
              </div>
            </div>
          </div>
          :
          (loading ?
            <div>
              <Spinner />
              <div style={{ textAlign: "center" }}>Loading</div>

            </div>
            :
            <div>
              <div style={{ fontSize: 30, textAlign: "center" }}>no content, please login again</div>
            </div>)
        }
      </div>

    );
  };
};