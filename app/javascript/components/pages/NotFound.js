import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class NotFound extends Component {
  render() {
    return (
      <Container style={{marginTop: "126px", padding: "50px", height: "100vh"}}>
        <h1 style={{textAlign: "center"}}>Oops! Inhale and try again.</h1>
      </Container>
    );
  }
}
