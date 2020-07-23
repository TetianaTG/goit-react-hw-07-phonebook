import { combineReducers } from "redux";
import contactReducer from "./contacts/contactsReducer";

const rootReducer = combineReducers({
  contactRoot: contactReducer,
});

export default rootReducer;