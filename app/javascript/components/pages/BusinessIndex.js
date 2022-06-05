import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'
export default class BusinessIndex extends Component {
  render() {
    return (
      <Container style={{marginTop: "126px", display: "flex", flexWrap: "wrap"}}>
        
        {this.props.businesses?.map((business, i) => {
          return (
            <div key={i}>
              <Card style={{ width: '18rem', margin: "10px", padding: "10px", textAlign: "center" }}> 
                <Card.Body>
                  <NavLink to={`/business/${business.id}`}>
                  <Card.Title tag="h5" style={{color: "#565e45"}}>{business.business_name}</Card.Title>
                  </NavLink>
                  <Card.Subtitle className="mb-2 text-muted" tag="h6">
                    {business.business_email_address}
                  </Card.Subtitle>
                </Card.Body>
                <img
                  alt="Card image cap"
                  src={business.business_logo}
                  width="100%"
                />
                <Card.Body>
                  <Card.Text>
                    {business.business_description}
                  </Card.Text>
                  {/* <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Container>
    );
  }
}
