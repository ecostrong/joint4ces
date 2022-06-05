import React, { Component } from "react";
import { Container } from "react-bootstrap";
// import { Container } from 'reactstrap'

export default class Footer extends Component {
  render() {
    return (
        <Container className="footer-container" fluid>
            <Container>
              <h6 className="footer-text0 ftext">Created By</h6>
              <h6 className="footer-text ftext">Amanda • Dustin • Jimmy • Neco</h6>
              <h6 className="footer-text2 ftext">2022</h6>
            </Container>
        </Container>
    );
  }
}
