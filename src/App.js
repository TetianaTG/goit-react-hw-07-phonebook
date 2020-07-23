import React, { Component } from "react";
import Phonebook from "./components/phonebook/Phonebook";
import ContactList from "./components/contactList/ContactList";
import withTheme from "./hoc/withTheme";

class App extends Component {
  state = {
    filter: "",
  };

  componentDidMount() {
    const contactStorage = localStorage.getItem("contacts");
    if (contactStorage) {
      this.setState({ contacts: JSON.parse(contactStorage) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  filterByName = () => {};

  deleteContact = (id) => {};

  render() {
   
    
    const {
      themeConfig: { fontColor, bodybg },
    } = this.props;
    const { filter } = this.state;
    return (
      <div style={{ color: fontColor, background: bodybg }}>
        <button
          type="submit"
          style={{
            marginLeft: "30px",
            marginTop: "20px",
            borderColor: "white",
            height: "35px",
            width: "150px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
          onClick={this.props.toggleTheme}
        >
          Change theme
        </button>
        <Phonebook name={this.state.name} number={this.state.number} />

        <ContactList filter={filter} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default withTheme(App);
