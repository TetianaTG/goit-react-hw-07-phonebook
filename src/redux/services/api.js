import axios from "axios";

axios.defaults.baseURL = "http://localhost:4242";

const getAllContacts = () => axios.get("/contacts");

const addContact = (contact) => axios.post("/contacts", contact);

const deleteContact = (id) => axios.delete(`/contacts/${id}`);

export default { getAllContacts, addContact, deleteContact };