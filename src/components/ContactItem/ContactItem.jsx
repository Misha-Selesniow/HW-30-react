import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import './ContactItem.css';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const initials = contact.name
    .split(/\s+/)
    .slice(0, 2)
    .map(part => part[0])
    .join('')
    .toLocaleUpperCase();

  return (
    <li className="contact-item">
      <span className="contact-item__avatar" aria-hidden="true">
        {initials}
      </span>
      <div className="contact-item__details">
        <span className="contact-item__name">{contact.name}</span>
        <a className="contact-item__number" href={`tel:${contact.number}`}>
          {contact.number}
        </a>
      </div>
      <button
        className="contact-item__delete"
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
        aria-label={`Видалити контакт ${contact.name}`}
        title="Видалити контакт"
      >
        ×
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
