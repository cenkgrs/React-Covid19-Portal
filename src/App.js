import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Common.css";

import Navi from "./Navi";
import News from "./News";
import Main from "./Main";
import Tables from "./Tables";
import Slide from "./Slide";
import About from "./About";
import Charts from "./Charts";
import NewsItem from "./NewsItem";
import NotFound from "./NotFound";

import { Route, Switch } from "react-router-dom";

const API = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "redux";

export default class App extends Component {
  state = {
    tr: [],
    allCountries: [],
    totalData: []
  };

  /*componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ covid_data: data.hits }));
  }*/

  componentDidMount() {
    localStorage.clear();
    let isNewDay = false;
    let oldDate = localStorage.getItem("updatedDate")
    let newDate = new Date().getDay()
    console.log(newDate)


    if(localStorage.getItem('allCountries')){
      console.log("old items getted")
      this.setState({ allCountries : JSON.parse(localStorage.getItem('allCountries')) }) 
      console.log(JSON.parse(localStorage.getItem('allCountries')));
      // setting cachedColors to null if it wasn't stored today
      if( new Date().getDay().toString() != oldDate ) {
        isNewDay = true;
      }

       // if cachedColors still got value, it means we can use it as valid cache for today
      if(!isNewDay){

      }

    }else{
        this.getAllCountries();
    }

      
    this.getTurkey();

  }
  
  getTotalData = () => {
    fetch('https://api.collectapi.com/corona/totalData', { 
      method: 'get', 
      headers: new Headers({
        'authorization': 'apikey 7J8woCmXgDo7BcwpBFop6v:6dxTlvYIzOvTwDDew5ei4p', 
        'content-Type': 'application/json'
      }), 


    })
      .then((response) => response.json())
      .then((data) => this.setState({ totalData: data}))

      localStorage.setItem("totalData", JSON.stringify(this.state.totalData))
      localStorage.setItem("updatedDate", new Date().getDay().toString())
      console.log("new item stored")

  }
  getAllCountries = () => {
    fetch(
      "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ allCountries: data }));

      localStorage.setItem("allCountries", JSON.stringify(this.state.allCountries))
      localStorage.setItem("updatedDate", new Date().getDay().toString())

  }
  getTurkey = () => {
    fetch(
      "https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ tr: data }));
  };


  render() {


    return (
      <div>
        <Navi />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Main {...props} tr={this.state.tr} stats={this.state.totalData} />
            )}
          ></Route>
          <Route exact path="/charts" component={Charts}></Route>
          <Route exact path="/news-panel" component={News}></Route>
          <Route exact path="/news" component={NewsItem}></Route>


          <Route
            exact
            path="/tables"
            render={(props) => (
              <Tables
                {...props}
                allCountries = {this.state.allCountries}
              />
            )}
          ></Route>
          <Route exact path="/about" component={About}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    );
  }
}
