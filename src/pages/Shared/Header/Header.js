import React, { Component } from 'react';

import  './Header.scss';

class Header extends Component {
  constructor(props) {
    super();

    this.state = {}
  }

  render() {
    return (
      <section className="content-header">
        <div className="">
          <h1>Pesquisa</h1>
        </div>
      </section>
    )}
}

export default Header