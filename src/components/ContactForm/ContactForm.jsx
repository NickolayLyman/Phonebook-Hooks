import { useState } from 'react';
import shortid from 'shortid';

const ContactForm = ({ onSubmit }) => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const contactNameId = () => shortid.generate();
  const contactPhoneNumberId = () => shortid.generate();

  const handleFormChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setContactName(value);
        break;
      case 'number':
        setContactNumber(value);
        break;
      default:
        return;
    }
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit(contactName, contactNumber);
    resetForm();
  };

  const resetForm = () => {
    setContactName('');
    setContactNumber('');
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor={contactNameId}>
        Name
        <input
          type="text"
          name="name"
          value={contactName}
          onChange={handleFormChange}
          id={contactNameId}
        />
      </label>
      <label htmlFor={contactPhoneNumberId}>
        Phone Number
        <input
          type="text"
          name="number"
          value={contactNumber}
          onChange={handleFormChange}
          id={contactPhoneNumberId}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
