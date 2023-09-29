import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState } from '../../interfaces/interfaces';

const initialState: FormState = {
  email: '',
  address1: null,
  city: null,
  firstName: '',
  lastName: '',
  jobTitle: '',
  phone: '',
  reason: null,
  state: null,
  zip: null,
};

export const formSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<Partial<FormState>>) => {
      return {...state, ...action.payload}
    },
  },
});

export const { setForm } = formSlice.actions;
export default formSlice.reducer;
