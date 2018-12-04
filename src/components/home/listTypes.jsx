import React from 'react'
import classNames from 'classnames'

import './listTypes.scss'

export default class ListType extends React.Component {
  contructor() {

  }

  render() {
    console.log('props', this.props)
    const { className, onClick, title, listData } = this.props;

    return (
      <div className={classNames("container-list", className)} >
        <div className="title">{title}</div>
        <div className="list">
          {/* <div>View more</div> */}
          {listData.map(item =>
            <Type
              src={item.icons[0].url}
              name={item.name}
            />)}
        </div>
      </div>
    );
  };
};

class Type extends React.Component {

  render() {
    const { src, name } = this.props;
    return (
      <div className="item-container">
        <img src={src} className="image" alt="image" />
        <div className="name">
          {name}
        </div>
      </div>
    )
  }
}