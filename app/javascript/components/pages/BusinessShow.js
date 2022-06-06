import React, { Component } from 'react'
import { Container } from 'react-bootstrap'


export default class BusinessShow extends Component {
  render() {
    const {business} = this.props
    return business ? (
      <Container style={{marginTop: "126px"}}>  
        <h3>Business Features</h3>
          <div className="show-card-container">
              <div className="show-card">
                <h4>{business.business_name}</h4>
                <img src={business.business_logo} width="400px"/> 
                <p>{ business.business_description }</p>
                <h5>{ business.business_phone_number }, 
                { business.business_email_address }</h5>
                <br />
                <h4>Manager Info</h4>
                <h5>{ business.business_mailing_address }</h5>
              </div>
          </div>
      </Container>
    ) : <h3>no business found</h3>
  }
}


