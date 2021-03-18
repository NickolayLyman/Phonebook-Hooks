import { useState, useEffect } from 'react';
import shortid from 'shortid';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/CotactList/ContactList';

const App = () => {
  const parseLocalStorage = JSON.parse(window.localStorage.getItem('contacts'));

  const [contacts, setContacts] = useState(() => {
    return parseLocalStorage ?? [];
  });

  const [filterContact, setFilterContact] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContactData = (contactName, contactNumber) => {
    if (contactName === '') {
      alert('Please, enter contact contactName');
      return;
    }

    if (contactNumber === '') {
      alert('Please, enter contact contactNumber');
      return;
    }
    if (contacts.find(contact => contact.contactcontactName === contactName)) {
      alert(`${contactName} is already exist`);
      return;
    }

    const newContact = {
      id: shortid.generate(),
      contactName,
      contactNumber,
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const changeContactsFilter = ({ target }) => {
    setFilterContact(target.value);
  };

  const getContactsVisible = () => {
    const normalizedFilter = filterContact.toLowerCase();
    return contacts.filter(contact =>
      contact.contactName.toLowerCase().includes(normalizedFilter),
    );
  };

  const handleContactDelete = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContactData} />
      <h2>Contacts</h2>
      <Filter value={filterContact} onChange={changeContactsFilter} />
      <ContactList
        contacts={getContactsVisible()}
        onDeleteContact={handleContactDelete}
      />
    </>
  );
};

export default App;
