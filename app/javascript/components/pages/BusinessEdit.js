import React, { Component } from 'react'
import { Input, Label } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import { Container, Button, Form } from 'react-bootstrap'

class BusinessEdit extends Component{
  constructor(props){
    super(props)
    this.state = {
      form:{
        business_name: this.props.business.business_name,
        business_description: this.props.business.business_description,
        business_email_address: this.props.business.business_email_address,
        business_mailing_address: this.props.business.business_mailing_address,
        business_phone_number: this.props.business.business_phone_number,
        business_logo: this.props.business.business_logo,
        business_url: this.props.business.business_url,
        user_id: this.props.current_user.id
      },
      submitted: false
    }
      
  }
  handleChange = (e) => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.editBusiness(this.state.form, this.props.business.id)
    this.setState({ submitted: true })
  }

  render(){
    return(
      <Container className="newbusiness-container">
        <h1>Edit your Business</h1>
        <div className="form-container">
          <div className="form">
            <Form>
              <Form.Group>
                <Label>Business Name</Label>
                <Input
                  type="text"
                  name="business_name"
                  onChange={ this.handleChange }
                  value={ this.state.form.business_name }
                />
              </Form.Group>
              <Form.Group>
                <Label>Business Description</Label>
                <Input
                  type="text"
                  name="business_description"
                  onChange={ this.handleChange }
                  value={ this.state.form.business_description }
                />
              </Form.Group>
              <Form.Group>
                <Label>Business Email</Label>
                <Input
                  type="text"
                  name="business_email_address"
                  onChange={ this.handleChange }
                  value={ this.state.form.business_email_address }
                />
              </Form.Group>
              <Form.Group>
                <Label>Business Mailing Address</Label>
                <Input
                  type="text"
                  name="business_mailing_address"
                  onChange={ this.handleChange }
                  value={ this.state.form.business_mailing_address }
                />
              </Form.Group>
              <Form.Group>
                <Label>Business Phone Number</Label>
                <Input
                  type="text"
                  name="business_phone_number"
                  onChange={ this.handleChange }
                  value={ this.state.form.business_phone_number }
                />
              </Form.Group>
              <Form.Group>
                <Label>Business Logo URL address</Label>
                <Input
                  type="text"
                  name="business_logo"
                  onChange={ this.handleChange }
                  value={ this.state.form.business_logo }
                />
              </Form.Group>
              <Form.Group>
                <Label>Business Web URL</Label>
                <Input
                  type="text"
                  name="business_url"
                  onChange={ this.handleChange }
                  value={ this.state.form.business_url }
                />
              </Form.Group>
              <Button
              name="submit"
              color="secondary"
              onClick={ this.handleSubmit }
              >
              Update Apartment
              </Button>
            </Form>
          </div>
        </div>
        { this.state.submitted && <Redirect to="/mylisting" /> }
      </Container>
    )
  }
}
export default BusinessEdit