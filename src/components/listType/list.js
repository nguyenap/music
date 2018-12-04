import React from 'react'

import './list.scss'

export default class List extends React.Component {
  constructor() {
    super();
  }


  render() {
    let {title,items,}= this.props;
    return(
      <div className="list-container">
        <div className="big-title">
          {title}
        </div>
        <div className="list">
          {items&& items.map(item=>(
            <div>
              <img src={""} alt="image"/>
              <span className="item-name">
                ""
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };
};