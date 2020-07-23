import React, { Component } from "react";
import { connect } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import FilterContacts from "../filterContacts/FilterContacts";
import contactsOperations from "../../redux/contacts/contactOperations";
import { contactList } from "../../redux/contacts/contactSelectors";


class ContactList extends Component {
  componentDidMount() {
    const { getAllContacts } = this.props;
    getAllContacts();
  }

  render() {
    const { contactList, filter, onChange } = this.props;

    return (
      <>
        <h2 style={{ marginLeft: "30px", color: "blue" }}>Contacts</h2>
        <FilterContacts filter={filter} onChange={onChange} />
        <ul>
          {contactList.map((contact) => (
            <ContactItem id={contact.id} contact={contact} key={contact.id} />
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    contactList: contactList(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllContacts: () =>
      dispatch(contactsOperations.getAllContactsOperations()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);