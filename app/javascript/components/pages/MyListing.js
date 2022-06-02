import React, { Component } from "react";
import { Row, Col, Card, Button } from "reactstrap";
import {NavLink} from 'react-router-dom'

export default class MyListing extends Component {
  render() {
    const {business} = this.props
    return (
      <>
        <h3>My Business Listing</h3>
        {business &&
        <Card>
          <Row className="cards">
            {business?.map((business) => {
              return (
                <Col sm="4" key={business.id}>
                  <div className="my-show-card">
                    <h1>{business.business_name}</h1>
                    <h6>{business.business_description}</h6>
                    <h6>{business.business_mailing_address}</h6>
                    <h6>{business.business_email_address}</h6>
                    <h6>{business.business_phone_number}</h6>
                     <img src={business.business_logo}/>
                    <h5>{business.business_url}</h5>
                    <p className="my-card-button">
                      <NavLink to={`/businessedit/${business.id}`}>
                        <button color="secondary">
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
      </>
    );
  }
}
