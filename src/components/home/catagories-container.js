import React from 'react'
export default class CatagoriesContainer extends React.Component {
  render() {
    let { children } = this.props;
    return (
      <div className="catagories-container">
        {children}
      </div>
    );
  };
};