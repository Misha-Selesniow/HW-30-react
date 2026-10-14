import { useSelector } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import './App.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <main className="app">
      <header className="app__header">
        <p className="app__eyebrow">PERSONAL DIRECTORY</p>
        <h1 className="app__title">Книга контактів</h1>
        <p className="app__intro">
          Усі важливі люди — в одному місці.
        </p>
      </header>

      <section className="app__workspace" aria-label="Керування контактами">
        <ContactForm />

        <div className="app__contacts">
          <div className="app__section-heading">
            <div>
              <p className="app__eyebrow">ВАШ СПИСОК</p>
              <h2 className="app__section-title">Контакти</h2>
            </div>
            <span className="app__count" aria-label={`${contacts.length} контактів`}>
              {contacts.length}
            </span>
          </div>
          {contacts.length > 0 ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            <p className="app__empty">
              Тут поки порожньо. Додайте перший контакт за допомогою форми.
            </p>
          )}
        </div>
      </section>
      <footer className="app__footer">Ваш список зберігається на цьому пристрої.</footer>
    </main>
  );
};
