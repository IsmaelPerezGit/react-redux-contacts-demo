export default(state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT_PENDING':
      return state;
    case 'ADD_CONTACT_FULFILLED':
      return [...action.payload.data]
    case 'GET_CONTACTS_PENDING':
      return state;
    case 'GET_CONTACTS_FULFILLED':
      return [...action.payload.data]
    default:
      return state;
  }
}
