import React, { Component } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

export default class BusinessNew extends Component {
  constructor(props) {
    super(props)
    this.state= {
      form: {
        business_name: ""
      }
    }
  }

  handleChange = (e) => {
    const {form} = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }
  
  render() {
    console.log(this.state.form.business_name)
    return (
      <>
        <h1>BusinessNew</h1>
        <Form>
          <FormGroup>
            <Label>Business Name</Label>
            <Input 
              type="text"
              name="business_name"
              onChange={this.handleChange}
              value={this.state.form.business_name}
            />
          </FormGroup>
        </Form>
      </>
    )
  }
}
