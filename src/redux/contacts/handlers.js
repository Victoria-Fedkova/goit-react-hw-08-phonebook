import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';

const { isAnyOf } = require('@reduxjs/toolkit');

export const handlePending = state => {
  state.isLoading = true;
};
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
export const handleFetch = (state, action) => {
  state.items = action.payload;
};
export const handleAddItem = (state, action) => {
  state.items.push(action.payload);
};
export const handleDelItem = (state, action) => {
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(index, 1);
};

export const handleEditContact = (state, action) => {
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(index, 1, { ...state.items[index], ...action.payload });
};

const arrThunks = [addContact, deleteContact, fetchContacts, editContact];
export const createStatus = type => isAnyOf(...arrThunks.map(el => el[type]));
