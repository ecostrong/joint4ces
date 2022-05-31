



CRUD ACTION TESTING:

business.update(business_name:"New Business Name")

business = Business.find(1)

business.destroy

Business.create business_name: "Test Business", business_description: "The Business Description", business_email_address: "Business email address", business_mailing_address: "business mailing address", business_phone_number: "Business phone number", business_logo: "www.google.com", business_url: "www.google.com", business_status: "Business Status", user_id: 1


 <Row className="cards">
        { this.props.businesses.map(business => {
        <Col sm="4" key={ business.id }>
          <Card body>
            <CardTitle>
              <h5>{ business.business_name }</h5>
              <h5>{ business.business_description }, { business.business_email_address }</h5> 
              <p className="card-button">
                {/* <NavLink to={`/businesses/${business.id}`}>
                  <Button color="secondary">
                    More Info
                  </Button>
                </NavLink> */}
              </p>
            </CardTitle>
          </Card> 
        </Col> 
        })} 
        </Row>