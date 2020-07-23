import api from "../services/api";
import contactsActions from "./contactsAction";

const getAllContactsOperations = () => (dispatch) => {
  dispatch(contactsActions.getContactStart());

  api
    .getAllContacts()
    .then(({ data }) => dispatch(contactsActions.getContactSuccess(data)))
    .catch((error) => dispatch(contactsActions.getContactFailure(error)));
};

const addContactOperations = (name, number) => (dispatch) => {
  dispatch(contactsActions.addContactStart());

  api
    .addContact({ name, number })
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch((error) => dispatch(contactsActions.addContactFailure(error)));
};

const deleteContactOperations = (id) => (dispatch) => {
  dispatch(contactsActions.deleteContactStart());

  api
    .deleteContact(id)
    .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
    .catch((error) => dispatch(contactsActions.deleteContactFailure(error)));
};

export default {
  getAllContactsOperations,
  addContactOperations,
  deleteContactOperations,
};
