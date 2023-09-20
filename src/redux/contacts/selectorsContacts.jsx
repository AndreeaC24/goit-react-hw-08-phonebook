import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectFilters = state => state.filters;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
    [selectFilters, selectContacts],
    (filters, contacts) => {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filters.textFilter.toLowerCase())
      );
    }
  );