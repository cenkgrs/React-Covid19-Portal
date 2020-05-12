import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Common.css";

import Navi from "./Navi";
import News from "./News";
import Main from "./Main";
import Tables from "./Tables";

import NotFound from "./NotFound";

import { Route, Switch } from "react-router-dom";
import Slide from "./Slide";

const API = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "redux";

export default class App extends Component {
  state = {
    users: [],
    countries: [],
    summary: [],
    tr: [],
    allCountries: []
  };

  /*componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ covid_data: data.hits }));
  }*/

  componentDidMount() {
    this.getCountries();
    this.getSummary();
    this.getTurkey();
    this.getAllCountries();

  }
  
  getAllCountries = () => {
    fetch(
      "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ allCountries: data }));
  }
  getTurkey = () => {
    fetch(
      "https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ tr: data }));
  };

  getSummary = () => {
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((data) => this.setState({ summary: data }));
  };

  getCountries = () => {
    fetch("https://api.covid19api.com/countries")
      .then((response) => response.json())
      .then((data) => this.setState({ countries: data }));
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
              <Main {...props} tr={this.state.tr} stats={this.state.stats} />
            )}
          ></Route>
          <Route exact path="/news" component={News}></Route>

          <Route
            exact
            path="/tables"
            render={(props) => (
              <Tables
                {...props}
                allCountries = {this.state.allCountries}
                countries={this.state.countries}
                summary={this.state.summary}
              />
            )}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    );
  }
}
