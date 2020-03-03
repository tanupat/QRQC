import React, { Component } from "react";
import { Col, Row } from "antd";
import InputPCDA from "./InputPCDA";
import ContainmentAction from "./ContainmentAction";
import FactorTreeAnalysisForOccurrence from "./FactorTreeAnalysisForOccurrence";
import FactorTreeAnalysisforNonDetection from "./FactorTreeAnalysisforNonDetection";
import VerifyEffectivenessResultฺฺฺByTeam from "./VerifyEffectivenessResultฺฺฺByTeam";
import TableRootCause from "./RootCause";
import VerifyEffectivenessResultByQE from "./VerifyEffectivenessResultByQE";
import PDCA_Closed from "./PDCA_Closed";
class ManagementPDCA extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col lg={12} md={24} sm={24} xs={24}>
            <h3>MANAGEMENT PDCA</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <InputPCDA /> {/* <InputPCDA /> */}
          </Col>
        </Row>
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <ContainmentAction />
          </Col>
        </Row>
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <FactorTreeAnalysisForOccurrence />
          </Col>
        </Row>
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <FactorTreeAnalysisforNonDetection />
          </Col>
        </Row>
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <TableRootCause />
          </Col>
        </Row>
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <VerifyEffectivenessResultฺฺฺByTeam />
          </Col>
        </Row>
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <VerifyEffectivenessResultByQE />
          </Col>
        </Row>
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <PDCA_Closed />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ManagementPDCA;
