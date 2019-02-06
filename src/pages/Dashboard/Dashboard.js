import React, { Component } from 'react';


import Header from './../Shared/Header/Header';
import Overview from './../Overview/Overview';

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
        </body>
      </div>
    )}
}

export default Dashboard