import React, { Component } from "react";
import { Col, Row } from "antd";
import Attendants from "./Attendants";
class Attendant extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row>
          <Col lg={12} md={24} sm={24} xs={24}>
            <h3>Attendants</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Attendants />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Attendant;
