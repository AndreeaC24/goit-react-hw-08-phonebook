import { createSlice} from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operationsAuth';

const filtersInitialState = {
  textFilter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    changeTextFilter: (state, action) => { 
      state.textFilter = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, state => {
      state.textFilter = '';  
    });
  },
});

export const { changeTextFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
