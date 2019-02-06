import React, { Component } from 'react';


import Header from './../Shared/Header/Header';
import Overview from './../Overview/Overview';
import Listing from '../Listing/Listing';
import Footer from '../Shared/Footer/Footer';

class Dashboard extends Component {
  constructor(props) {
    super();

    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <body>
          <Overview />
          <Listing />
        </body>
        <Footer/>
      </div>
    )}
}

export default Dashboard