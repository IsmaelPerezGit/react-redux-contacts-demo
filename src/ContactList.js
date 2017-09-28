import React from 'react'

const ContactList = ({contacts}) => {
  console.log('contacts', contacts);
  let thecontacts = contacts.map(contact => <li key={contact.id}>{contact.name}</li>)
  return (
    <ul>{thecontacts}</ul>
  )
}

export default ContactList
