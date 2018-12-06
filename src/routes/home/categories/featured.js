import React from 'react'
import CatagoriesContainer from '../../../components/home/catagories-container';
import { apiBrowser } from '../../../api/browse-api';
import ListType from '../../../components/home/listTypes';
import Spinner from '../../../components/spinner/spinner';
import { apiAlbum } from '../../../api/albums-api';


export default class Featured extends React.Component {
  constructor() {
    super();
    this.state = {
      listFeatured: null,
      albums: null
    }
  }
  componentDidMount() {
    this.getFeatured();
    this.getSeveralAlbums();
  }
  getSeveralAlbums() {
    apiAlbum.getSeveralAlbums()
      .then(resp => {
        console.log('getSeveralAlbums', resp)
        resp.albums && resp.albums.length > 0 ?
          this.setState({
            albums: resp.albums
          })
          : null
      })
  }
  getFeatured() {
    let params = {
      country: "VN",
      locale: "sv_VN",
      timestamp: "2014-10-23T09:00:00",
      limit: 10,
      offset: 0
    }
    apiBrowser.getAListFeatured(params)
      .then(res => {
        console.log('getAListFeatured', res);
        if (!res.error) {
          this.setState({
            listFeatured: res,
          })
        };
      })
  }
  handleClick(playlistId, name) {
    let { history } = this.props;

    history.push({
      pathname: `/playlist/${name}`,
      search: playlistId,
      state: {
        playlistId: playlistId,
      }
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


  render() {
    let { listFeatured, albums } = this.state;
    return (
      <CatagoriesContainer>
        {
         albums?
              <ListType
                title="Albums"
                className="item-album"
                listData={albums}
                // onClick={() => this.getDetailAlbum(album)}
                pathname="/album"
              />
            : <div style={{ color: "#fff", fontSize: 30 }}> album no content, please login again</div>
                
                }
                
                { 
        listFeatured ?
          (<ListType
            title={listFeatured.message}
            listData={listFeatured.playlists.items}
            // onClick={(id, name) => this.handleClick(id, name)}
            pathname="/playlist"
          />)
          : <div style={{ color: "#fff", fontSize: 30 }}> no content, please login again</div>
         }
          {/* <><Spinner /><div style={{ color: "#fff", textAlign: "center" }}>{"Data is loading, please wait a bit...."}</div></>} */}
      </CatagoriesContainer>
    );
  };
};