import React, { Component } from "react";
import {NavLink} from 'react-router-dom'
import { Container, Card, Row, Col, Button } from "react-bootstrap";

export default class MyListing extends Component {
  render() {
    const {myBusiness} = this.props
    return (
      <Container fluid style={{marginTop: "126px"}}>
        <h3 style={{padding: "20px"}}>My Business Listing</h3>
        {myBusiness &&
        <Card style={{width: "40vw", padding: "20px", margin: "20px", textAlign: "center"}}>
          <Row className="cards">
            {myBusiness?.map((business) => {
              return (
                <Col sm="4" key={business.id}>
                  <div className="my-show-card">
                    <h5>{business.business_name}</h5>
                    <h6>{business.business_description}</h6>
                    <h6>{business.business_mailing_address}</h6>
                    <h6>{business.business_email_address}</h6>
                    <h6>{business.business_phone_number}</h6>
                     <img src={business.business_logo} width="75%"/>
                    <h5>{business.business_url}</h5>
                    <p className="my-card-button">
                      <NavLink to={`/businessedit/${business.id}`} >
                      <button color="secondary" style={{margin: "20px"}}>
                          Update Listing
                      </button>
                      </NavLink>
                      <NavLink to="/businessindex">
                        <Button onClick={() => this.props.deleteBusiness(business.id)} >
                          Remove Listing
                        </Button>
                      </NavLink>
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Card>}
      </Container>
    );
  }
}