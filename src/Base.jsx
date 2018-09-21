import { Component } from 'react';

import React from 'react';
import App from './App.jsx';
import styles from './App.css';
import $ from 'jquery';
import data from './data/data.js';

class Base extends Component {
  constructor(props){
    super(props);
    this.state = { 
      show: false,
      data: data
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  };

  hideModal() {
    this.setState({ show: false });
  };

  componentDidMount() {

    const idPath = window.location.pathname;
    const id = idPath.substring(1, idPath.length - 1);

    this.setState({data: data})
    var that = this;
    var settings = {
      "async": true,
      "crossDomain": true,
      //'url': 'http://localhouse:3007/house'
      "url": `/photos/${id}`,
      "method": "GET",
      "headers": {
        "Cache-Control": "no-cache",
        "Postman-Token": "21422b57-759d-4710-83dc-565d97eae64f"
      }
    }

    $.ajax(settings).done(function (response) {
      var new_data = {properties: response};
      that.setState({data: new_data})
    });
  }

  render() {
    return (
      <main class='main-div'>
        <App show={this.state.show} data={this.state.data} handleClose={this.hideModal}/>
          <div className={styles.heroSection} onClick={this.showModal}>
            <button className={styles.heroViewphotosButton}> <i class="far fa-images"></i> View Photos </button>
            <button className={styles.heroShareButton}> <i class="far fa-share-square"></i> Share </button>
            <button className={styles.heroSaveButton}> <i class="far fa-heart"></i> Save </button>
          </div>
      </main>
    );
  }
}

export default Base