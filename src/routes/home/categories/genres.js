import React from 'react'
import { api } from '../../../api/api';
import { apiBrowser } from '../../../api/browse-api';

import './genres.scss'
import ListType from '../../../components/home/listTypes';
import CatagoriesContainer from '../../../components/home/catagories-container';
import Spinner from '../../../components/spinner/spinner';
export default class Genres extends React.Component {
  constructor() {
    super();
    this.state = {
      listGenres: null,
      loading: true,
    }
  }
  componentDidMount() {
   setTimeout(()=>apiBrowser.getAListCategories()
      .then(res => {
        console.log('listGenres', res)
        if (!res.error) {
          this.setState({
            listGenres: res.categories.items,
          })
        }
        this.setState({
          loading: false,
        })
      })
      .catch(e => this.setState({ loading: false }))
   ,1500)
  }

  render() {
    let { listGenres, loading } = this.state;
    return (
      <CatagoriesContainer>
        {
          listGenres ?
            <ListType
              title="Genres & Moods"
              listData={listGenres}
              pathname="/catagory-detail"
            />
            : loading
              ? <><Spinner/><div style={{ color: "#fff", textAlign: "center" }}>{"Data is loading, please wait a bit...."}</div></>
              : <div style={{ fontSize:30, color: "#fff", textAlign: "center" }}>sorry, this site doestn't have any data, please refest again</div>
        }
      </CatagoriesContainer>
    );
  };
};