import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/contactsSlice';
import './ContactForm.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const normalizedName = name.trim();
    const normalizedNumber = number.trim();

    if (!normalizedName || !normalizedNumber) {
      setError('Заповніть ім’я та номер телефону.');
      return;
    }

    if (
      contacts.some(
        contact => contact.name.toLocaleLowerCase() === normalizedName.toLocaleLowerCase()
      )
    ) {
      setError('Контакт із таким ім’ям уже є у списку.');
      return;
    }

    dispatch(addContact({ id: nanoid(), name: normalizedName, number: normalizedNumber }));
    setName('');
    setNumber('');
    setError('');
  };

  return (
    <section className="contact-form" aria-labelledby="contact-form-title">
      <p className="contact-form__eyebrow">НОВИЙ ЗАПИС</p>
      <h2 className="contact-form__title" id="contact-form-title">
        Додати контакт
      </h2>
      <form className="contact-form__form" onSubmit={handleSubmit}>
        <label className="contact-form__label" htmlFor="contact-name">
          Ім’я
        </label>
        <input
          className="contact-form__input"
          id="contact-name"
          type="text"
          autoComplete="name"
          minLength="2"
          required
          value={name}
          onChange={event => {
            setName(event.target.value);
            setError('');
          }}
          placeholder="Наприклад, Олена Коваль"
        />

        <label className="contact-form__label" htmlFor="contact-number">
          Номер телефону
        </label>
        <input
          className="contact-form__input"
          id="contact-number"
          type="tel"
          autoComplete="tel"
          minLength="7"
          required
          value={number}
          onChange={event => {
            setNumber(event.target.value);
            setError('');
          }}
          placeholder="+380 00 000 00 00"
        />

        {error && (
          <p className="contact-form__error" role="alert">
            {error}
          </p>
        )}
        <button className="contact-form__submit" type="submit">
          <span aria-hidden="true">+</span> Зберегти контакт
        </button>
      </form>
    </section>
  );
};
