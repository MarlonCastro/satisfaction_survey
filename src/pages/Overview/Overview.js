import React, { Component } from 'react';

import  './Overview.scss';

import question from '../../assets/icons/question-mark.svg'
import excelente from '../../assets/icons/in-love.svg'
import happy from '../../assets/icons/happy.svg'
import confused from '../../assets/icons/confused.svg'
import sad from '../../assets/icons/sad.svg'
import angry from '../../assets/icons/angry.svg'
class Overview extends Component {
  constructor(props) {
    super();

    this.state = {}
  }

  render() {
    return (
      <div className="overview">
          <div className="header-tab">
            <div className="first-tab">
              <div className="card-overview">
                <p>PONTO DE VENDA</p>
              </div>   
            </div>
            <div className="card-overview rest d-none d-sm-none d-md-block">
            
            </div> 
         </div>
         <div className="container">
           <p className="title">Consolidado das lojas</p>
           <div className="row">
                <div className="grid-overview no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Satisfação <img src={question} alt="question" /></p>
                        <p className="description-number">82,1%</p>
                    </div>
                </div>
                <div className="grid-overview no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Avaliações <img src={question} alt="question" /></p>
                        <p className="description-number">1.298</p>
                    </div>
                </div>
                <div className="grid-overview no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Excelente</p>
                        <p className="p-value"><img src={excelente} alt="Excelente" />82,1%</p>
                    </div>
                </div>
                <div className="grid-overview no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Muito Bom</p>
                        <p className="p-value"><img src={happy} alt="Excelente" /> 82,1%</p>
                    </div>
                </div>
                <div className="grid-overview no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Razoável</p>
                        <p className="p-value"><img src={confused} alt="Excelente" /> 82,1%</p>
                    </div>
                </div>
                <div className="grid-overview no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Ruim</p>
                        <p className="p-value"><img src={sad} alt="Excelente" /> 82,1%</p>
                    </div>
                </div>
                <div className="grid-overview no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Horrível</p>
                        <p className="p-value"><img src={angry} alt="Excelente" /> 82,1%</p>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )}
}

export default Overview