import { createSelector } from "reselect";

export const getContact = (state) => state.contactRoot.contactReducer;
export const isLoading = (state) => state.contactRoot.loadingReducer;
export const getError = (state) => state.contactRoot.contactErrorReducer;
export const filterContact = (state) => state.contactRoot.filterReducer;

export const contactList = createSelector(
  [getContact, filterContact],
  (contacts, searchInput) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
);
