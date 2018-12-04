import React from 'react';
import ListType from '../../components/home/listTypes';
import './home.scss';
import { albumsApi, apiAlbum } from '../../api/albums-api';
import { _token } from '../../api/api';
import { apiPlayList } from '../../api/playlists-api';

const header = ['feature', 'podcasts', 'genres & moods', 'discover'];
export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    }
  }
  componentDidMount() {
    apiAlbum.getSeveralAlbums()
      .then(resp => {
        console.log('resp', resp)
        resp.albums && resp.albums.length > 0 ?
          this.setState({
            albums: resp.albums
          })
          : null
      })
  }

  getNowPlaying() {
    spotifyApi.getMyCurrentPlayBackState()
      .then(resp => {
        this.setState({
          nowPlaying: {
            name: resp.item.name,
            albumArt: resp.item.album.images[0].url
          }
        });
      })
  }
  getDetailAlbum(album) {
    const { history } = this.props;
    const { id, href } = album;
    history.push({
      pathname: "/album",
      search: id,
      state: {
        album: album
      }
    })
  }

  render() {
    const { history } = this.props;
    const { albums } = this.state;

    return (
      <div className="home">
        <div className="header">
          {header.map((item) =>
            <a className="header-text" >
              {item}
            </a>
          )}
        </div>
        <div className="home-content">

          {albums.length > 0 ?
            <>
              <div className="title-content">Albums</div>
              <div className="home-content-items">
              {albums.map(album =>
                <ListType
                  className="item-album"
                  data={album}
                  onClick={() => this.getDetailAlbum(album)}
                />
              )}
              </div>
            </>
            : <div style={{color:"#fff", fontSize: 30}}> no content, please login again</div>}
        </div>

      </div>
    );
  };
};