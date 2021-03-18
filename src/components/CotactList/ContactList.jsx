import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, contactName, contactNumber }) => (
        <li key={id}>
          <span>{contactName}:</span>
          <span>{contactNumber}</span>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  contactName: PropTypes.string,
  contactNumber: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
