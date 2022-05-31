import React, { Component } from 'react'
// import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
// import { NavLink } from 'react-router-dom'
// import { faHome, faCity } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class BusinessIndex extends Component {
  render() {
    return (
      <Row className="cards">
        {/* { this.props.businesses.map(business => {
        <Col sm="4" key={ business.id }>
          <Card body>
            <CardTitle>
              <h5><FontAwesomeIcon icon={ faHome } className="fa-icon" />{ business.street }</h5>
              <h5><FontAwesomeIcon icon={ faCity } className="fa-icon" />{ business.city }, { business.state }</h5> 
              <p className="card-button">
                <NavLink to={`/businesses/${business.id}`}>
                  <Button color="secondary">
                    More Info
                  </Button>
                </NavLink>
              </p>
            </CardTitle>
          </Card> 
        </Col> 
        })}  */}
        </Row>
    )
  }
}

      









