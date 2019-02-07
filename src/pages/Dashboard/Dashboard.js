import React, { Component } from 'react';


import Header from './../Shared/Header/Header';
import Overview from './../Overview/Overview';
import Listing from '../Listing/Listing';
import Footer from '../Shared/Footer/Footer';

import ServiceApi from './../../api/service.api';
import ErrorMessage from './../../api/error.model';

class Dashboard extends Component {
  constructor(props) {
    super();

    this.state = {
      allSearchs: [],
      valuesOverview: {},
      valuesDataTable: []
    }
  }

  componentDidMount () {
   this.getSearchs()
  }

  makeValuesOverview = () => {
    let total = this.state.allSearchs.length;
    let eclt= 0, bm = 0, rzl = 0, rm = 0, hrl = 0
    this.state.allSearchs.map(function (object, i) {
       switch (object.score) {
         case 1:
            hrl++
           break;
         case 2:
           rm++
           break;
         case 3:
           rzl++
           break;
         case 4:
           bm++
           break;    
         default:
           eclt++
           break;
       }
    })
    let jsonValues = []
    jsonValues.push({
      'great': (100*eclt/total),
      'good': (100*bm/total),
      'reasonable': (100*rzl/total),
      'bad': (100*rm/total),
      'horrible': (100*hrl/total),
      'evaluation': total,
      'satisfaction': ((eclt+bm)/total*100)
    })
    this.setState({valuesOverview: jsonValues})
  }


  getSearchs =() => {
    ServiceApi.showSearchs().then((response) => {
      if (response instanceof ErrorMessage) {
        alert("Erro ao buscar dados! Erro-> "+response.error)
        return;
      }
      this.setState({
        allSearchs: response
      }, () => {
        this.makeValuesOverview()
        this.makeDataTable()
      })
    })
  }

  makeDataTable = () => {
     let jsonSepared = [], index
     this.state.allSearchs.map(function (object, i) {
       if(jsonSepared[object.storeId]) {
          jsonSepared[object.storeId] = {
            'id':object.storeId,
            'name': object.storeName, 
            'great': (object.score === 5 ? jsonSepared[object.storeId].great + 1: jsonSepared[object.storeId].great + 0), 
            'good': (object.score === 4 ? jsonSepared[object.storeId].good + 1: jsonSepared[object.storeId].good + 0),
            'reasonable': (object.score === 3 ? jsonSepared[object.storeId].reasonable + 1: jsonSepared[object.storeId].reasonable + 0),
            'bad': (object.score === 2 ? jsonSepared[object.storeId].bad + 1: jsonSepared[object.storeId].bad + 0),
            'horrible': (object.score === 1 ? jsonSepared[object.storeId].horrible + 1: jsonSepared[object.storeId].horrible + 0),
          }
       } else {
          jsonSepared[object.storeId] = {
            'id':object.storeId,
            'name': object.storeName, 
            'great': (object.score === 5 ? 1: 0), 
            'good': (object.score === 4 ? 1: 0),
            'reasonable': (object.score === 3 ? 1: 0),
            'bad': (object.score === 2 ? 1: 0),
            'horrible': (object.score === 1 ? 1: 0),
          }
       }
     })
     this.setState({
      valuesDataTable: jsonSepared
     })
  }
 


  render() {
    return (
      <div>
        <Header />
          <Overview dataValues={this.state.valuesOverview} />
          <Listing dataSearchs={this.state.valuesDataTable} />
        <Footer/>
      </div>
    )}
}

export default Dashboard