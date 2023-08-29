// contactsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: boolean;
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [
    {
      id: 42847,
      firstName: "Ajay",
      lastName: "Sharma",
      status: true,
    },
    {
      id: 6124,
      firstName: "Mani",
      lastName: "Shankar",
      status: false,
    },
  ],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const { id } = action.payload;
      const index = state.contacts.findIndex((contact) => contact.id === id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, updateContact, deleteContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;
