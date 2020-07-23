import contactsType from "./contactsType";

/* GET */
const getContactStart = () => ({
  type: contactsType.GET_CONTACT_START,
});

const getContactSuccess = (contactList) => ({
  type: contactsType.GET_CONTACT_SUCCESS,

  payload: { contactList },
});

const getContactFailure = (error) => ({
  type: contactsType.GET_CONTACT_FAILURE,

  payload: { error },
});

/* ADD */
const addContactStart = () => ({
  type: contactsType.ADD_CONTACT_START,
});

const addContactSuccess = (contact) => ({
  type: contactsType.ADD_CONTACT_SUCCESS,

  payload: {
    contact,
  },
});

const addContactFailure = (error) => ({
  type: contactsType.ADD_CONTACT_FAILURE,

  payload: { error },
});

/* DELETE */
const deleteContactStart = () => ({
  type: contactsType.DELETE_CONTACT_START,
});

const deleteContactSuccess = (idContactDelete) => ({
  type: contactsType.DELETE_CONTACT_SUCCESS,

  payload: { id: idContactDelete },
});

const deleteContactFailure = (error) => ({
  type: contactsType.DELETE_CONTACT_FAILURE,

  payload: { error },
});

/* FILTER */
const filterContact = (nameContact) => ({
  type: contactsType.FILTER_CONTACT,

  payload: {
    name: nameContact,
  },
});

export default {
  getContactStart,
  getContactSuccess,
  getContactFailure,

  addContactStart,
  addContactSuccess,
  addContactFailure,

  deleteContactStart,
  deleteContactSuccess,
  deleteContactFailure,

  filterContact,
};