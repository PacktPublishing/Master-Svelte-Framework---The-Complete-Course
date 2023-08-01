import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

const store = writable({ contacts: [], editId: undefined });

export default {
  subscribe: store.subscribe,
  add: (name, phone, description) => {
    store.update(({ contacts }) => {
      const newContacts = [
        { name, phone, description, id: uuidv4() },
        ...contacts,
      ];
      return { contacts: newContacts, editId: undefined };
    });
  },
  editContact: (contactId) => {
    store.update(({ contacts }) => {
      return { contacts, editId: contactId };
    });
  },
  edit: (contactId, name, phone, description) => {
    store.update(({ contacts }) => {
      const newContacts = contacts.map((contact) => {
        if (contact.id === contactId) {
          return { id: contactId, name, phone, description };
        }

        return contact;
      });
      return { contacts: newContacts, editId: undefined };
    });
  },
  delete: (contactId) => {
    store.update(({ contacts }) => {
      const newContacts = contacts.filter((c) => c.id !== contactId);
      return { contacts: newContacts, editId: undefined };
    });
  },
};
