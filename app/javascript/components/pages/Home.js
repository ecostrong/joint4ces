import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaCannabis,
  FaListAlt,
  FaNetworkWired,
  FaUserAlt,
} from "react-icons/fa";

export default class Home extends Component {
  render() {
    return (
      <>
        <Container className="container1" fluid>
          <Row className="row1">
            <Col className="row1-col1">
              <h1 className="container1-h1">WELCOME TO JOINT 4CES</h1>
              <p className="container1-p">The Home Of Veteran Businesses</p>
            </Col>
            <Col classNam="row1-col2">
              <img
                src="https://joint4ces.com/wp-content/uploads/2021/09/Asset-52_modified4-1024x998.png"
                width="300px"
              />
            </Col>
          </Row>
        </Container>

        <Container className="container2" fluid>
          <Row className="container2-row1">
            <Col className="container2-row1-col1">
              <FaCannabis className="all-icons" />
              <h2 className="container2-h2">
                THE B2B NETWORKING PLATFORM FOR VETERAN-OWNED BUSINESSES
              </h2>
              <p className="container2-p">
                Create & Support Strategic Partnerships
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container3" fluid>
          <Row className="container3-row1">
            <Col className="container3-row1-col1">
              <div className="divider">
                <h2>ADVERTISE, STRATEGIZE & ORGANIZE</h2>
              </div>
            </Col>
          </Row>

          <Row className="container3-row2">
            <Col className="container3-col1">
              <Col className="container3-row2-col1">
                <FaListAlt className="four-icons" />
                <h2>Exclusive Veteran Business Directory</h2>
                <p>
                  All listed businesses are verified by our team and align with
                  our values of integrity, teamwork and inclusivity.
                </p>
              </Col>
              <Col className="container3-row2-col2">
                <FaNetworkWired className="four-icons" />
                <h2>Grow Your Network</h2>
                <p>
                  With high quality businesses who have all been highly vetted,
                  you can grow and reach out with confidence!
                </p>
              </Col>
            </Col>
            <Col>
              <Col className="container3-row2-col1">
                <FaCalendarAlt className="four-icons" />
                <h2>Industry & Local Events</h2>
                <p>
                  Meet Joint 4ces at local gatherings and find connections at
                  network events across the nation.
                </p>
              </Col>
              <Col className="container3-row2-col2">
                <FaUserAlt className="four-icons" />
                <h2>Profile System</h2>
                <p>
                  Maintain a rich profile system and connect with like-minded
                  entrepreneurs in the network.
                </p>
              </Col>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
