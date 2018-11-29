import _ from 'lodash';
import querystring from 'querystring'

let _token = ""
const baseUrl = 'https://api.spotify.com/v1'
const authUrl = 'https://accounts.spotify.com/authorize'


var client_id = 'abad1fb11dac436e851d6e0e684979f5'; // Your client id
var client_secret = 'ec5e1513e61b49248860c82e0469a57c'; // Your secret
var redirect_uri = 'http://localhost:3000/home'; // Your redirect uri

var scope = 'user-read-private user-read-email user-read-playback-state';

var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const setToken = token => {
  _token = token
}
const _propmiseImplementation = null;

const DEFAULT_HEADERS  = {
  // 'Cache-Control' :'no-cache',
}

const MULTIPART_FORM_HEADER = {
  'Content-Type':'multipart/form-data',
  'Mime-Type': 'jpg|jpeg|png'
}

const idUser = '31bx5mna5qwanivy7znmhiv24noq'; 
const ids = '382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc';

const api = {
  postAuth: (endpoint, params) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        ...DEFAULT_HEADERS,
        'Content-Type':'application/json'
      }
    }
    return fetch(baseUrl + endpoint, options).then(result => result.json())
  },
  
  //postImage
  post: (endpoint: string, params: Object) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        ...DEFAULT_HEADERS,
        Accept: 'application/json',
        'Authorization': 'Bearer '+ _token,
        'Content-Type': 'application/json'
      }
    }
    return fetch(baseUrl + endpoint, options).then(result => result.json())
  },
  get: (endpoint: string): Promise => {
    const options = {
      method: 'GET',
      headers: {
        ...DEFAULT_HEADERS,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+ _token,
      }
    }
    return fetch(baseUrl + endpoint, options).then(result => result.json()).catch(e=> console.log('e',e))
  },
  put: (endpoint: string, params: Object): Promise => {
    const options = {
      method: 'PUT',
      body: JSON.stringify(params),
      headers: {
        ...DEFAULT_HEADERS,
        Authorzation: _token,
        'Content-Type': 'application/json'
      }
    }
    return fetch(baseUrl + endpoint, options).then(result => result.json())
  },

  delete: (endpoint: string, params: Object): Promise => {
    const options = {
      method: 'DELETE',
      body: JSON.stringify(params),
      headers: {
        ...DEFAULT_HEADERS,
        Authorzation: _token,
        'Content-Type': 'application/json'
      }
    }
    return fetch(baseUrl + endpoint, options).then(result => result.json)
  },

  getAccess: (): Promise  =>{
    var state = generateRandomString(16);
    const options= {
      method: 'GET',
      headers: new Headers()
    }
    const params= {
      client_id: client_id,
      response_type: 'code',
      redirect_uri: redirect_uri,
      state: state,
      scope: scope,
    }
    fetch(authUrl+"?"+ querystring.stringify(params)).then(resp => resp.json()).catch(e=> console.log('e',e));
  }
}
export {api, setToken, _token, ids};