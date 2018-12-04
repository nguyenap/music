import React from 'react';
import ListType from '../../components/home/listTypes';
import './home.scss';
import { albumsApi, apiAlbum } from '../../api/albums-api';
import { _token } from '../../api/api';
import { apiPlayList } from '../../api/playlists-api';
import Genres from './categories/genres';

const header = ['feature', 'podcasts', 'genres & moods', 'discover'];


const tabs = [
  {
    id: 0,
    name: 'feature',
    components: "Feature",
    path: '/feature'
  },
  {
    id: 1,
    name: 'podcasts',
    components: "podcasts",
    path: '/feature'
  },
  {
    id: 2,
    name: 'genres & moods',
    components: <Genres/>,
    path: '/feature'
  },
  {
    id: 3,
    name: 'discover',
    components: "Feature",
    path: '/feature'
  }];
export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      activeTabID: 0,
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
        album: album,
      }
    })
  }

  changeTab(id){
    this.setState({
      activeTabID: id,
    })
  }
  renderContent(){
    let {activeTabID} = this.state;
    return tabs[activeTabID].components;
  }

  render() {
    const { history } = this.props;
    const { albums, activeTabID } = this.state;
    console.log('state', this.state);
    return (
      <div className="home">
        <div className="header">
          {tabs.map(item =>
            <a className= {"header-text " +(activeTabID===item.id? "active":"") } onClick={()=>this.changeTab(item.id)}>
              {item.name}
            </a>
          )}
        </div>
        <div className="home-content">
          {this.renderContent()}
          {/* {albums.length > 0 ?
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
            : <div style={{ color: "#fff", fontSize: 30 }}> no content, please login again</div>} */}
        </div>

      </div>
    );
  };
};