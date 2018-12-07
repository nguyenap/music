import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom';

import './listTypes.scss'
import { localData } from '../../common/until/dataLocal';

export default class ListType extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log('props list type', this.props)
    const { className, onClick, title, listData, pathname } = this.props;

    return (
      <div className={classNames("container-list", className)} >
        <div className="title">{title}</div>
        <div className="list">
          {/* <div>View more</div> */}
          {listData.map(item =>
            <Type
              id={item.id}
              src={item.icons?item.icons[0].url:item.images[0].url}
              name={item.name}
              onClick={onClick}
              pathname={pathname}
              data={item}
            />)}
        </div>
      </div>
    );
  };
};

class Type extends React.Component {
  saveId(id, pathname){
    switch(pathname){
      case '/album':
        localData.setCurrentAlbumID(id);
        break;
      case '/playlist':
        localData.setCurrentPlaylistID(id);
      case '/catagory-detail':
        localData.setCurrentCatagoryID(id);
      default:
        localData.setCurrentPlaylistID(id);
        break;
    }
  }
  render() {
    const { id, src, name, onClick, pathname, data } = this.props;
    console.log("iddd",id)
    return (
      <Link 
        to={{
          pathname:pathname,
          search: name?(name+"").replace(" ","-"):"",
          state:{
            playListID:id,
            data: data
          },
        }}
        onClick={()=>this.saveId(id,pathname)}
        className="item-container" >
        

          {/* <div style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover' }} className="image"></div> */}
          <img src={src} width="200px" height="200px" className="image"/>
        <div className="name">
          {name}
        </div>
      </Link>
    )
  }
}