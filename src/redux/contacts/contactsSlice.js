import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';
import {
  createStatus,
  handleAddItem,
  handleDelItem,
  handleEditContact,
  handleFetch,
  handleFulfilled,
  handlePending,
  handleRejected,
} from './handlers';

const STATUSES = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    editeContactdId: null,
  },
  extraReducers: builder => {
    const { PENDING, REJECTED, FULFILLED } = STATUSES;
    builder
      .addCase(fetchContacts.fulfilled, handleFetch)
      .addCase(addContact.fulfilled, handleAddItem)
      .addCase(deleteContact.fulfilled, handleDelItem)
      .addCase(editContact.fulfilled, handleEditContact)
      .addMatcher(createStatus(PENDING), handlePending)
      .addMatcher(createStatus(REJECTED), handleRejected)
      .addMatcher(createStatus(FULFILLED), handleFulfilled);
  },
  reducers: {
    setEditedContactId(state, action) {
      state.editeContactdId = action.payload;
    },
  },
});
export const { setEditedContactId } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
