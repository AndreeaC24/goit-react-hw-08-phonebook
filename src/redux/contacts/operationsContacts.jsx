import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify'; 

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number }); 
      return response.data;
    } catch (error) {
      toast.error('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      toast.error('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });
      response.data.isEditing = true;
      return response.data;
    } catch (error) {
      toast.error('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



