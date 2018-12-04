import React from 'react';
import { _token, setToken } from '../api/api';
import { localData } from '../common/until/dataLocal';


export default class Login extends React.Component {
  constructor() {
    super();
    let token = window.location.search.replace("?access_token=","");
    console.log('access-token', token)
    token ?
      (setToken(token),
        localData.setAccessToken(token)
      ): null;
  }


  getHashParams(){
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  render() {
    return (
      <div style={{fontSize: 35,height: '100%', color: '#fff'}}>
      { ` token is : ${_token}`}
      </div>
    );
  };
};