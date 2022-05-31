import React, { Component } from "react";
import { Card, CardTitle,CardBody, CardSubtitle, CardText, CardLink} from "reactstrap";
// import { NavLink } from 'react-router-dom'
// import { faHome, faCity } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class BusinessIndex extends Component {
  render() {
    return (
      <>
        <h1>Index</h1>
        {this.props.businesses.map((business, i) => {
          return (
            <div key={i}>
              <Card>
                <CardBody>
                  <CardTitle tag="h5">{business.business_name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {business.business_email_address}
                  </CardSubtitle>
                </CardBody>
                <img
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  width="100%"
                />
                <CardBody>
                  <CardText>
                    {business.business_description}
                  </CardText>
                  <CardLink href="#">Card Link</CardLink>
                  <CardLink href="#">Another Link</CardLink>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </>
    );
  }
}
