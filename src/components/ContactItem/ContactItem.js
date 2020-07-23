import React from "react";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contactOperations";
import styles from "./ContactItem.module.css";

const ContactItem = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button
        type="button"
        className={styles.btnDelete}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    deleteContact: () =>
      dispatch(contactsOperations.deleteContactOperations(id)),
  };
};

export default connect(null, mapDispatchToProps)(ContactItem);

