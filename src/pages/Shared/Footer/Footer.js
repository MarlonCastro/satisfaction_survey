import React, { Component } from 'react';

import  './Footer.scss';
import git from '../../../assets/icons/github-logo.svg'
import linkeddin from '../../../assets/icons/linkedin.svg'
class Footer extends Component {
  constructor(props) {
    super();

    this.state = {}
  }

  render() {
    return (
      <div className="content-footer">
      <div>
      <p>Desenvolvido por Marlon Castro</p>
      <ul className="footer-ul">
            <li><a href="https://www.linkedin.com/in/marlon-castro-55507a90/"><img src={linkeddin} alt="Linkedin"/></a></li>
            <li><a href="https://github.com/MarlonCastro"><img src={git} alt="GitHub"/></a></li>
          </ul>
 
      </div>

      </div>
    )}
}

export default Footer