import React from 'react';
import ListType from '../../components/home/listTypes';
import './home.scss';

const header =  [ 'feature', 'podcasts', 'genres & moods', 'discover'];
export default class Home extends React.Component {
  contructor() {
    
  }

  render() {
    const {history} = this.props;
    console.log('props', this.props)

    return(
        <div className="home">
          <div className="header">
            {header.map((item)=>
              <a className="header-text">
                {item}
              </a>
            )}
          </div>
          <div className="home-content">
            {
              [1,1,1,1].map(item => 
                <ListType
                  title="Vài bản nhạc nhẹ trước khi đi ngủ"
                />
              )
            }
          </div>
        </div>
    );
  };
};