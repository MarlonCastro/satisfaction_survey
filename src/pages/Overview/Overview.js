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

    this.state = {
        satisfaction: 0,
        evaluation: 0,
        great: 0,
        good: 0,
        reasonable: 0,
        bad: 0,
        horrible: 0
    }
    
  }

 componentWillReceiveProps(nextProps) {
     if(nextProps.dataValues.length) {
        this.setState({
            satisfaction: nextProps.dataValues[0].satisfaction,
            evaluation: nextProps.dataValues[0].evaluation,
            great: nextProps.dataValues[0].great,
            good: nextProps.dataValues[0].good,
            reasonable: nextProps.dataValues[0].reasonable,
            bad: nextProps.dataValues[0].bad,
            horrible: nextProps.dataValues[0].horrible
        })
     }

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
                        <p className="description-number">{this.state.satisfaction}%</p>
                    </div>
                </div>
                <div className="grid-overview no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Avaliações <img src={question} alt="question" /></p>
                        <p className="description-number">{this.state.evaluation}</p>
                    </div>
                </div>
                <div className="grid-overview no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Excelente</p>
                        <p className="p-value"><img src={excelente} alt="Excelente" />{this.state.great}%</p>
                    </div>
                </div>
                <div className="grid-overview no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Muito Bom</p>
                        <p className="p-value"><img src={happy} alt="Excelente" /> {this.state.good}%</p>
                    </div>
                </div>
                <div className="grid-overview no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Razoável</p>
                        <p className="p-value"><img src={confused} alt="Excelente" /> {this.state.reasonable}%</p>
                    </div>
                </div>
                <div className="grid-overview no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Ruim</p>
                        <p className="p-value"><img src={sad} alt="Excelente" /> {this.state.bad}%</p>
                    </div>
                </div>
                <div className="grid-overview no-padding-col bd-1">
                    <div className="card-balance">
                        <p className="title-small">Horrível</p>
                        <p className="p-value"><img src={angry} alt="Excelente" /> {this.state.horrible}%</p>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )}
}

export default Overview