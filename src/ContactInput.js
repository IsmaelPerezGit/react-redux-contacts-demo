import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actions from './actions/contacts';

class ContactInput extends Component {

  addContact = (values) => {
    this.props.actions.addContact(values)
  }

  render () {
    return (
      <form onSubmit={ this.props.handleSubmit(this.addContact) }>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="picture">Picture</label>
          <Field name="picture" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <Field name="gender" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <Field name="company" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <Field name="phone" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <Field name="address" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="about">About</label>
          <Field name="about" component="textarea" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

ContactInput = reduxForm({
  // a unique name for the form
  form: 'contactInput'
})(ContactInput)

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ContactInput);
