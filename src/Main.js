import React, { Component } from "react";
import Slide from "./Slide";
import { Col, Row } from "react-bootstrap";
import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="4">
            <div className="statBlock">
              <Row>
                <Col className="stats">
                  <h3>Turkey</h3> <br></br>
                  <p>
                    <strong>Total Infected</strong> : {this.props.tr.infected}
                  </p>
                  <p>
                    <strong>Total Recovered</strong> : {this.props.tr.recovered}
                  </p>
                  <p>
                    <strong>Total Deaths</strong> : {this.props.tr.deceased}
                  </p>
                  <p>
                    <strong>Total Tests</strong> : {this.props.tr.tested}
                  </p>
                  <p>
                    <strong>Source </strong> : {this.props.tr.sourceUrl}
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs="4" className="">
            <div className="statBlock">
              <Row>
                <Col className="stats">
                  <p>
                    <strong>Total</strong> : {this.props.stats.Total}
                  </p>
                  <p>
                    <strong>All</strong> : {this.props.stats.All}
                  </p>
                  <p>
                    <strong>All</strong> : {this.props.stats.Countries}
                  </p>
                  <p>
                    <strong>All</strong> : {this.props.stats.All}
                  </p>
                  <p>
                    <strong>All</strong> : {this.props.stats.All}
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs="4"></Col>
        </Row>
      </div>
    );
  }
}
