import React from "react";
import { connect } from "react-redux";
import contactsAction from "../../redux/contacts/contactsAction";
import { filterContact } from "../../redux/contacts/contactSelectors";

const FilterContacts = ({ filter, onChange }) => {
  return (
    <>
      <h4
        style={{
          marginLeft: "30px",
          letterSpacing: "1px",
        }}
      >
        Find contacts by name:
      </h4>
      <input
        style={{ marginLeft: "30px", height: "25px", marginBottom: "10px" }}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      ></input>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: filterContact(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => dispatch(contactsAction.filterContact(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);
