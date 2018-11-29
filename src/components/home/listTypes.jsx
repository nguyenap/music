import React from 'react'
import classNames from 'classnames'

import './listTypes.scss'

export default class ListType extends React.Component {
  contructor() {
    
  }

  render() {
    console.log('props', this.props)
    const {className, onClick} = this.props;
    const {images, name} = this.props.data;

    return(
      <div className={classNames("container-list", className)} onClick={onClick}>
        <div className="title-container">
          <img src={images[1].url} className="image-album"/>
          <div className="title">
            {name}
          </div>
          {/* <div>View more</div> */}
        </div>
        {/* {example.map(item => 
          <Type
            src={item.src}
            depcription ={item.description}
          />)} */}
      </div>
    );
  };
};

class Type extends React.Component {
  
  render () {
    const {src, description} = this.props;
    return (
      <div>
        <img src={src} className="image" alt="image"/>
        <div className="description">
          {description}
        </div>
      </div>
    )
  }
}