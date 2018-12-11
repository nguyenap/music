import React from 'react'
import querystring from 'query-string';

import CatagoriesContainer from '../../components/home/catagories-container';
import ListType from '../../components/home/listTypes';
import { apiBrowser } from '../../api/browse-api';

import './catagory-detail.scss'

export default class CatagoryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.someData = props.location.state.data;
    this.state = {
      catagoryDetail: []
    }
  }
  componentDidMount() {
    // console.log('props', this.props)
    let { location } = this.props;
    let playListID  = location? querystring.parse(location.search).id:"";
    playListID!==""? this.getCatagoryDetail(playListID):console.log("have no palylist id");
    
  }

  getCatagoryDetail(playListID){
    let params = {
      country: "VN",
      limit: 20,
      offset: 0
    }
    apiBrowser.getACategoryPlaylists(playListID, params)
      .then(res => {
        console.log('playlist catagory', res);
        if (!res.error)
          this.setState({
            catagoryDetail: res.playlists.items
          })
        else alert(res.error)
      })
      .catch(_ => console.log(_))
  }
  render() {
    let { catagoryDetail } = this.state;
    let { name, icons } = this.someData;
    return (
      <CatagoriesContainer className="catagory-detail-cus">
        <div className="catagory-title" style={{ backgroundImage: `url(${icons[0].url})` }}>
          {name}
        </div>

        {
          catagoryDetail && catagoryDetail.length > 0 ?
            <ListType
              title={name}
              className="catagory-detail-content"
              listData={catagoryDetail}
              // onClick={() => this.getDetailAlbum(album)}
              pathname="/playlist"
            />
            : <div style={{ color: "#fff", fontSize: 30 }}> album no content, please login again</div>

        }
        {/* <><Spinner /><div style={{ color: "#fff", textAlign: "center" }}>{"Data is loading, please wait a bit...."}</div></>} */}
      </CatagoriesContainer>
    );
  };
};