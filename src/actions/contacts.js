import axios from 'axios';

export const addContact = (contact) => {
  contact.spokenToRecently = false;
  return {
    type: 'ADD_CONTACT',
    payload: axios.post(`https://thecontactsdb.herokuapp.com/contacts`, contact)
  }
}

export const getContacts = (contact) => {
  return {
    type: 'GET_CONTACTS',
    payload: axios.get(`https://thecontactsdb.herokuapp.com/contacts`)
  };
}

export const removeContact = (id) => {
  return {
    type: 'REMOVE_CONTACT',
    payload: axios.delete(`https://thecontactsdb.herokuapp.com/contacts/${id}`)
  };
}
