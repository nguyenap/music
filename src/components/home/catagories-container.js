import React from 'react'

import './catagories-container.scss'
export default class CatagoriesContainer extends React.Component {
  render() {
    let { children, className } = this.props;
    return (
      <div className={"catagories-container " +(className?className:"")}>
        {children}
      </div>
    );
  };
};