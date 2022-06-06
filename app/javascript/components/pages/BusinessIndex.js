import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'
export default class BusinessIndex extends Component {
  render() {
    return (
      <Container style={{marginTop: "126px", display: "flex", flexWrap: "wrap", justifyContent: "flex-start"}}>
        
        {this.props.businesses?.map((business, i) => {
          return (
              <Card key={i} style={{ margin: "10px", padding: "10px", textAlign: "center", width: "550px" }}> 
                <Card.Body>
                  <NavLink to={`/business/${business.id}`}>
                  <Card.Title tag="h5" style={{color: "#565e45"}}>{business.business_name}</Card.Title>
                  </NavLink>
                  <Card.Subtitle className="mb-2 text-muted" tag="h6">
                    {business.business_email_address}
                  </Card.Subtitle>
                </Card.Body>
                <div className="image-container">
                <img
                  className="index-image"
                  alt="Card image cap"
                  src={business.business_logo}
                  width="50%"
                />
                </div>
                <Card.Body>
                  <Card.Text>
                    {business.business_description}
                  </Card.Text>
                </Card.Body>
              </Card>
          );
        })}
      </Container>
    );
  }
}
