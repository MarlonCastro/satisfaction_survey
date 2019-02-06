import React, { Component } from 'react';

import  './Overview.scss';

class Overview extends Component {
  constructor(props) {
    super();

    this.state = {}
  }

  render() {
    return (
      <div className="overview">
       <div className="row">
         <div className="col-2 no-padding-col">
           <div className="card-overview">
             <p>PONTO DE VENDA</p>
           </div>   
         </div>
         <div className="col-10 no-padding-col">
           <div className="card-overview rest"></div> 
         </div>
         <div className="container">
           <p className="title">Consolidado das lojas</p>
           <div className="row">
                <div className="col-2 no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Satisfação</p>
                        <p className="description-number">82,1%</p>
                    </div>
                </div>
                <div className="col-2 no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Satisfação</p>
                        <p className="description-number">82,1%</p>
                    </div>
                </div>
                <div className="col-2 no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Satisfação</p>
                        <p className="description-number">82,1%</p>
                    </div>
                </div>
                <div className="col-2 no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Satisfação</p>
                        <p className="description-number">82,1%</p>
                    </div>
                </div>
                <div className="col-2 no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Satisfação</p>
                        <p className="description-number">82,1%</p>
                    </div>
                </div>
                <div className="col-2 no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Satisfação</p>
                        <p className="description-number">82,1%</p>
                    </div>
                </div>
           </div>
         </div>
       </div>

      </div>
    )}
}

export default Overview