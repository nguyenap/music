import React from 'react'
import { api } from '../../../api/api';
import { apiBrowser } from '../../../api/browse-api';

import './genres.scss'
import ListType from '../../../components/home/listTypes';
export default class Genres extends React.Component {
  constructor() {
    super();
    this.state = {
      listGenres: []
    }
  }
  componentDidMount() {
    apiBrowser.getAListCategories()
      .then(res => {
        console.log('res', res)
        if (!res.error) {
          this.setState({
            listGenres: res.categories.items,
          })
        }
      })
  }

  render() {
    let { listGenres } = this.state;
    return (
      <div>
        {
          listGenres?
          <ListType
            title="Genres & Moods"
            listData={listGenres}
          />
          :"sorry, this site doestn't have any data, please refest again"
        }

      </div>
    );
  };
};