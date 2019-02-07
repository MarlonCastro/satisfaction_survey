import React, { Component } from 'react';

import './Listing.scss'
import iconSearch from '../../assets/icons/ic-search.svg'

class Listing extends Component {
  constructor(props) {
    super();

    this.state = {
      lines :[]
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.renderLines(nextProps.dataSearchs)
  }

  renderLines = (array) => {
    let lines = array.map(function(object,i){
      let total = object.great + object.good + object.reasonable+ object.bad+ object.horrible
      return(
        <tr>
          <td><a>{i}</a>&nbsp;&nbsp;&nbsp;&nbsp; {object.name}</td>
          <td >{(object.great+object.good)/total*100} %</td>
          <td>{total}</td>
          <td>{object.great}</td>
          <td>{object.good}</td>
          <td>{object.reasonable}</td>
          <td>{object.bad}</td>
          <td>{object.horrible}</td>
        </tr>
      )
    })
    this.setState({ lines:lines })
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
          <div className="table-responsive">
          <table className="table ">
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
              {this.state.lines}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    )}
}

export default Listing