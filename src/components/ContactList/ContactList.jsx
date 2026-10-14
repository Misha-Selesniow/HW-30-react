import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import './ContactList.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter).trim().toLocaleLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter)
  );

  if (visibleContacts.length === 0) {
    return <p className="contact-list__empty">За цим запитом контактів не знайдено.</p>;
  }

  return (
    <ul className="contact-list">
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
