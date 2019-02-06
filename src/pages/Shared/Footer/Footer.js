import React, { Component } from 'react';

import  './Footer.scss';

class Footer extends Component {
  constructor(props) {
    super();

    this.state = {}
  }

  render() {
    return (
      <div className="content-footer">
          <ul className="footer-ul">
            <li>Desenvolvido por Marlon Castro</li>
            <li>Linkidin</li>
            <li>GitHub</li>
          </ul>
      </div>
    )}
}

export default Footer