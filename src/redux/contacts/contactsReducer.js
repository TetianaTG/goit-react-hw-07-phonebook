import { combineReducers } from "redux";
import contactsType from "./contactsType";

const contactReducer = (state = [], action) => {
  switch (action.type) {
    case contactsType.GET_CONTACT_SUCCESS:
      return action.payload.contactList;

    case contactsType.ADD_CONTACT_SUCCESS:
      return [...state, action.payload.contact];

    case contactsType.DELETE_CONTACT_SUCCESS:
      return state.filter((contact) => contact.id !== action.payload.id);

    default:
      return state;
  }
};

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case contactsType.FILTER_CONTACT:
      return action.payload.name;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case contactsType.GET_CONTACT_START:
    case contactsType.ADD_CONTACT_START:
    case contactsType.DELETE_CONTACT_START:
      return true;

    case contactsType.GET_CONTACT_SUCCESS:
    case contactsType.GET_CONTACT_FAILURE:
      return true;
    case contactsType.ADD_CONTACT_SUCCESS:
    case contactsType.ADD_CONTACT_FAILURE:
     return true;
    
    case contactsType.DELETE_CONTACT_SUCCESS:
    case contactsType.DELETE_CONTACT_FAILURE:
      return false;

    default:
      return state;
  }
};

const contactErrorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case contactsType.GET_CONTACT_FAILURE:
    case contactsType.ADD_CONTACT_FAILURE:
    case contactsType.DELETE_CONTACT_FAILURE:
      return payload.error;

    case contactsType.GET_CONTACT_START:
    case contactsType.ADD_CONTACT_START:
    case contactsType.DELETE_CONTACT_START:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  contactReducer: contactReducer,
  filterReducer: filterReducer,
  loading: loadingReducer,
  contactError: contactErrorReducer,
});

