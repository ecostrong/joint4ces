import React, { Component } from 'react'
import { Input, Label } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import {Button, Container, Form, } from 'react-bootstrap'
export default class BusinessNew extends Component {
  constructor(props) {
    super(props)
    this.state= {
      form: {
        business_name: "",
        business_description: "",
        business_email_address: "",
        business_mailing_address: "",
        business_phone_number: "",
        business_logo: "",
        business_url: "", 
        user_id: this.props.current_user.id
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    const {form} = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createNewBusiness(this.state.form)
    this.setState({submitted:true})
  }
  
  render() {
    return (
      <Container className="newbusiness-container">
        <h1>Create a New Business Listing</h1>
        <Form>
          <Form.Group>
            <Label>Business Name</Label>
            <Input 
              type="text"
              name="business_name"
              onChange={this.handleChange}
              value={this.state.form.business_name}
            />
          </Form.Group>
          <Form.Group>
            <Label>Business Description</Label>
            <Input 
              type="text"
              name="business_description"
              onChange={this.handleChange}
              value={this.state.form.business_description}
            />
          </Form.Group>
          <Form.Group>
            <Label>Business Email Address</Label>
            <Input 
              type="text"
              name="business_email_address"
              onChange={this.handleChange}
              value={this.state.form.business_email_address}
            />
          </Form.Group>
          <Form.Group>
            <Label>Business Mailing Address</Label>
            <Input 
              type="textarea"
              name="business_mailing_address"
              onChange={this.handleChange}
              value={this.state.form.business_mailing_address}
            />
          </Form.Group>
          <Form.Group>
            <Label>Business Phone Number</Label>
            <Input 
              type="text"
              name="business_phone_number"
              onChange={this.handleChange}
              value={this.state.form.business_phone_number}
            />
          </Form.Group>
          <Form.Group>
            <Label>Business Logo</Label>
            <Input 
              type="text"
              name="business_logo"
              onChange={this.handleChange}
              value={this.state.form.business_logo}
            />
          </Form.Group>
          <Form.Group>
            <Label>Business Url</Label>
            <Input 
              type="text"
              name="business_url"
              onChange={this.handleChange}
              value={this.state.form.business_url}
            />
          </Form.Group>
          <Button 
            name="submit"
            type="submit"
            current_user={this.props.current_user}
            onClick={this.handleSubmit}
            >Add New Business
            </Button>
        </Form>
        {this.state.submitted && <Redirect to="/mylisting" />}
      </Container>
    )
  }
}
