import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactInput from './ContactInput';
import ContactList from './ContactList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contactsActions from './actions/contacts'

class App extends Component {
  componentWillMount() {
    console.log("this.props", this.props);
    this.props.actions.getContacts();
  }

  render() {
    return (
      <div className="App">
        <ContactInput />
        <ContactList contacts={this.props.contacts}/>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    contacts: state.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
