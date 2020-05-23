import React, { Component } from "react";
import Slide from "./Slide";
import { Col, Row } from "react-bootstrap";
import "./Main.css";
import { FaChartLine } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import news_png from "./c-news.png";

import { BsFillHeartFill } from "react-icons/bs";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Slide />

        <div className="stats-container">
          <h3 className="ml-5r stats-header"> World Wide Stats </h3>

          <Row className="row mt-5r">
            <Col xs="12" lg="3">
              <div className="mini-block">
                <p>
                  <strong>
                    {" "}
                    <BsFillHeartFill
                      size={30}
                      color="#343a40"
                    ></BsFillHeartFill>{" "}
                    Total Confirmed :
                  </strong>{" "}
                  <br></br>
                  <br></br>
                  <strong className="fs-2r"> 5,100,000 </strong>
                  <br></br> <strong>People</strong> <br></br>
                  <BsBarChartFill className="pull-right" size={50} />
                </p>
              </div>
            </Col>
            <Col xs="12" lg="3">
              <div className="mini-block">
                <p>
                  <strong>
                    {" "}
                    <BsFillHeartFill
                      size={30}
                      color="#343a40"
                    ></BsFillHeartFill>{" "}
                    Total Recovered :
                  </strong>{" "}
                  <br></br>
                  <br></br>
                  <strong className="fs-2r">1,547,274 </strong>
                  <br></br> <strong>People</strong> <br></br>
                  <BsBarChartFill className="pull-right" size={50} />
                </p>
              </div>
            </Col>
            <Col xs="12" lg="3">
              <div className="mini-block">
                <p>
                  <strong>
                    {" "}
                    <BsFillHeartFill
                      size={30}
                      color="#343a40"
                    ></BsFillHeartFill>{" "}
                    Total Deaths :
                  </strong>{" "}
                  <br></br>
                  <br></br>
                  <strong className="fs-2r"> 287.809 </strong>
                  <br></br> <strong>People</strong> <br></br>
                  <BsBarChartFill className="pull-right" size={50} />
                </p>
              </div>
            </Col>
            <Col xs="12" lg="3">
              <div className="mini-block">
                <p>
                  <strong>
                    {" "}
                    <BsFillHeartFill
                      size={30}
                      color="#343a40"
                    ></BsFillHeartFill>{" "}
                    Active Cases :
                  </strong>{" "}
                  <br></br>
                  <br></br>
                  <strong className="fs-2r"> 2,461,887 </strong>
                  <br></br> <strong>People</strong> <br></br>
                  <BsBarChartFill className="pull-right" size={50} />
                </p>
              </div>
            </Col>
          </Row>
          <br></br>

          <Row className="mt-3r">
            <Col xs="12" lg="3">
              <div className="mini-block">
                <p>
                  <strong>
                    {" "}
                    <BsFillHeartFill
                      size={30}
                      color="#343a40"
                    ></BsFillHeartFill>{" "}
                    Closed Cases :
                  </strong>{" "}
                  <br></br>
                  <br></br>
                  <strong className="fs-2r">1,836,484 </strong>
                  <br></br> <strong>People</strong> <br></br>
                  <BsBarChartFill className="pull-right" size={50} />
                </p>
              </div>
            </Col>

            <Col xs="12" lg="3">
              <div className="mini-block">
                <p>
                  <strong>
                    {" "}
                    <BsFillHeartFill
                      size={30}
                      color="#343a40"
                    ></BsFillHeartFill>{" "}
                    in Mild Condition :
                  </strong>{" "}
                  <br></br>
                  <br></br>
                  <strong className="fs-2r">2,407,446 (98%) </strong>
                  <br></br> <strong>People</strong> <br></br>
                  <BsBarChartFill className="pull-right" size={50} />
                </p>
              </div>
            </Col>
            <Col xs="12" lg="3">
              <div className="mini-block">
                <p>
                  <strong>
                    {" "}
                    <BsFillHeartFill
                      size={30}
                      color="#343a40"
                    ></BsFillHeartFill>{" "}
                    Serious or Critical :
                  </strong>{" "}
                  <br></br>
                  <br></br>
                  <strong className="fs-2r"> 46,375 (2%) </strong>
                  <br></br> <strong>People</strong> <br></br>
                  <BsBarChartFill className="pull-right" size={50} />
                </p>
              </div>
            </Col>
          </Row>
        </div>

        
        <div className="statBlock">
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
        </div>
      </div>
    );
  }
}
