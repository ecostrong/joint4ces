import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

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
            <img src="https://joint4ces.com/wp-content/uploads/2021/09/Asset-52_modified4-1024x998.png" width="300px"/>
          </Col>
        </Row>
      </Container>

      <Container className="container2" fluid>
        <Row className="container2-row1">
          <Col className="container2-row1-col1">
            <h2 className="container2-h2">THE B2B NETWORKING PLATFORM FOR VETERAN-OWNED BUSINESSES</h2>
            <p className="container2-p">Create & Support Strategic Partnerships</p>
          </Col>
        </Row>
      </Container>
      
      </>
    )
  }
}
