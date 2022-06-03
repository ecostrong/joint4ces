import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Redirect } from 'react-router-dom'

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
    console.log(form)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.editBusiness(this.state.form, this.props.business.id)
    this.setState({ submitted: true })
  }

  render(){
    return(
      <>
        <h3>Edit your Business</h3>
        <div className="form-container">
          <div className="form">
            <Form>
              <FormGroup>
                <Label>Business Name</Label>
                <Input
                  type="text"
                  name="business_name"
                  onChange={ this.handleChange }
                  value={ this.state.form.business_name }
                />
              </FormGroup>
              <FormGroup>
                <Label>Business Description</Label>
                <Input
                  type="text"
                  name="business_description"
                  onChange={ this.handleChange }
                  value={ this.state.form.business_description }
                />
              </FormGroup>
              <FormGroup>
                <Label>Business Email</Label>
                <Input
                  type="text"
                  name="business_email_address"
                  onChange={ this.handleChange }
                  value={ this.state.form.business_email_address }
                />
              </FormGroup>
              <FormGroup>
                <Label>Business Mailing Address</Label>
                <Input
                  type="text"
                  name="business_mailing_address"
                  onChange={ this.handleChange }
                  value={ this.state.form.business_mailing_address }
                />
              </FormGroup>
              <FormGroup>
                <Label>Business Phone Number</Label>
                <Input
                  type="text"
                  name="business_phone_number"
                  onChange={ this.handleChange }
                  value={ this.state.form.business_phone_number }
                />
              </FormGroup>
              <FormGroup>
                <Label>Business Logo URL address</Label>
                <Input
                  type="text"
                  name="business_logo"
                  onChange={ this.handleChange }
                  value={ this.state.form.business_logo }
                />
              </FormGroup>
              <FormGroup>
                <Label>Business Web URL</Label>
                <Input
                  type="text"
                  name="business_url"
                  onChange={ this.handleChange }
                  value={ this.state.form.business_url }
                />
              </FormGroup>
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
      </>
    )
  }
}
export default BusinessEdit