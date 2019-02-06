import React, { Component } from 'react';

import './Listing.scss'
import iconSearch from '../../assets/icons/ic-search.svg'

class Listing extends Component {
  constructor(props) {
    super();

    this.state = {}
  }

  render() {
    return (
      <div className="listing">
        <div className="container">
           <p className="title">Lojas</p>
          <div className="input-search input-group mb-10">
              <input type="text" className="form-control" placeholder="Pesquisa" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn" type="button"><img alt="icon search" src={iconSearch} /></button>
              </div>
          </div>
          <div class="table-responsive">
          <table class="table ">
            <thead>
              <tr>
                <th scope="col">NOME DA LOJA</th>
                <th scope="col">SATISFAÇÃO</th>
                <th scope="col">AVALIAÇÕES</th>
                <th scope="col">EXCELENTE</th>
                <th scope="col">MUITO BOM</th>
                <th scope="col">RAZOÁVEL</th>
                <th scope="col">RUIM</th>
                <th scope="col">HORRIVEL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a>1</a>  Belo Horizonte</td>
                <td >4,0%</td>
                <td>14</td>
                <td>90</td>
                <td>90</td>
                <td>90</td>
                <td>90</td>
                <td>90</td>
              </tr>
              <tr>
                <td><a>2</a> Rio</td>
                <td>4,0%</td>
                <td>14</td>
                <td>90</td>
                <td>90</td>
                <td>90</td>
                <td>90</td>
                <td>90</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    )}
}

export default Listing