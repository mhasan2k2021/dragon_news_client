import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../../shared/Navbar/Navbar";
import LeftSide from "../../shared/LeftSide/LeftSide";
import { Outlet } from "react-router-dom";
import RightSide from "../../shared/RightSide/RightSide";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <Row>
          <Col lg="2">
            <LeftSide></LeftSide>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSide></RightSide>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
