import React from 'react'


import './listTypes.scss'
const example = [{
  src:"https://images.all-free-download.com/images/wallpapers_large/fresh_nature_9757.jpg",
  description:"Acoustic Favorites"
},{
  src:"https://images.all-free-download.com/images/wallpapers_large/fresh_nature_9757.jpg",
  description:"Acoustic Favorites"
}]
export default class ListType extends React.Component {
  contructor() {
    
  }

  render() {
    const {title} = this.props;
    return(
      <div>
        <div className="title-container">
          <div className="title">
            {title}
          </div>
          <div>View more</div>
        </div>
        {example.map(item => 
          <Type
            src={item.src}
            depcription ={item.description}
          />)}
      </div>
    );
  };d
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