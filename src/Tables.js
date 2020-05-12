import React, { Component } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";

export default class Tables extends Component {
  render() {
    return (
      <div className="container-fluid">
        <br></br>

        <Row>
          <Col xs="12">
            <h4 className="text-center theme-color"><strong>All World</strong></h4>
            <br></br>
            <Table className="table-shadow">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Infected</th>
                  <th>Recovered</th>
                  <th>Deaths</th>
                  <th>Tests</th>
                </tr>
              </thead>
              <tbody>
                {this.props.allCountries.map((country) => (
                  <tr key={country.id}>
                    <td> {country.country}</td>
                    <td> {country.infected} </td>
                    <td> {country.recovered}</td>
                    <td> {country.deceased}</td>
                    <td> {country.tested}</td>

                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col xs="6">
            <h4>Countries</h4>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Country</th>
                  <th>Slug</th>
                </tr>
              </thead>
              <tbody>
                {this.props.countries.map((news) => (
                  <tr key={news.id}>
                    <td> {news.Id}</td>
                    <td> {news.Country} </td>
                    <td> {news.Slug}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}
