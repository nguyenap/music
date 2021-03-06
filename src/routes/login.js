import React from 'react';
import { _token, setToken } from '../api/api';
import { localData } from '../common/until/dataLocal';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    let {location}= props;
    let token = location.search.replace("?access_token=","");
    token ?
      (setToken(token),
        localData.setAccessToken(token)
      ): null;
  }

  componentDidMount(){
    let {history}= this.props;
    _token?history.push("/home")
    :null;
  }
  // getHashParams(){
  //   var hashParams = {};
  //   var e, r = /([^&;=]+)=?([^&;]*)/g,
  //     q = window.location.hash.substring(1);
  //   while (e = r.exec(q)) {
  //     hashParams[e[1]] = decodeURIComponent(e[2]);
  //   }
  //   return hashParams;
  // }
  render() {
    let {history}= this.props;
    return (
      <div style={{fontSize: 35,height: '100%', color: '#fff'}} onClick={()=>history.push({pathname: "/home" })}>
        { _token
        ? `token: ${_token}`
        : "please, press login again to refesh token"
        }
      </div>

    );
  };
};