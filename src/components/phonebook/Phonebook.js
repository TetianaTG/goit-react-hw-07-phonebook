import React, { Component } from "react";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contactOperations";
import styles from "./Phonebook.module.css";

class Phonebook extends Component {
  state = {
    contactName: "",
    number: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { contactName, number } = this.state;
    const { addContact } = this.props;

    this.setState({
      contactName: "",
      number: "",
    });
    addContact(contactName, number);
  };

  render() {
    
    const { contactName, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} style={{ marginLeft: "30px" }}>
        <h2 className={styles.title} >Phonebook</h2>

        <input
          className={styles.inputName}
          type="text"
          name="contactName"
          value={contactName}
          onChange={this.handleChange}
          placeholder="Enter name..."
          required
        ></input>

        <input
          className={styles.inputNumber}
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          placeholder="Number..."
          required
        ></input>

        <button type="submit" className={styles.btn}>Add contact</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addContact: (name, number) =>
    dispatch(contactsOperations.addContactOperations(name, number)),
});

export default connect(null, mapDispatchToProps)(Phonebook);



