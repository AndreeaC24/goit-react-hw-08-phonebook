import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, editContact, } from './operationsContacts';
import { logOut } from 'redux/auth/operationsAuth';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  toast.error(
    `${action.payload}` === 'Network Error' ? `${action.payload}` : 'Something went wrong.Check your data and try again' );
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    // isLoading: false,
    isLoading: true,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.items.unshift(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editContact.rejected, handleRejected)

      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
