import React, { Component } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";

export default class Tables extends Component {
  render() {
    return (
      <div className="tables-container">
        <br></br>

        <Row>
          <Col xs="12">
            <h4 className="text-center theme-color"><strong>All World</strong></h4>
            <br></br>
            <Table className="table-shadow m-auto" style={{ width: "85%" }}>
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
        </Row>
      </div>
    );
  }
}
