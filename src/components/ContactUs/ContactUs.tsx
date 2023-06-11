/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect, useContext } from 'react';
import { send } from 'emailjs-com';
import classNames from 'classnames';

import './ContactUs.scss';
import { warningTimer } from '../../helpers/warningTimer';
import { TouchContext } from '../../helpers/TouchProvider';

export const ContactUs: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [isValid, setIsValid] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const [warning, setWarning] = useState(false);
  const { isTouchOpen } = useContext(TouchContext);

  const [touched, setToched] = useState({
    name: false,
    email: false,
    phone: false,
    body: false,
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    body: false,
  });

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    body: '',
  });

  const { name, email, body, phone } = values;

  const clearForm = () => {
    setValues({
      name: '',
      email: '',
      phone: '',
      body: '',
    });

    setErrors({
      name: false,
      email: false,
      body: false,
      phone: false,
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name: field, value } = event.target;

    setValues(current => ({ ...current, [field]: value }));
    setErrors(current => ({ ...current, [field]: false }));
    setToched(current => ({ ...current, [field]: false }));
    setIsValid(current => ({ ...current, [field]: false }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setErrors({
      name: !name,
      email: !email,
      phone: !phone,
      body: !body,
    });

    if (!name.trim() || !email.trim() || !phone.trim() || !body.trim()) {
      return;
    }

    send(
      "service_8h3lzq6",
      "template_zyfxasb",
      values,
      "Z10Puj4no99H3y9KI",
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitting(true);
      warningTimer(setSubmitting, false, 3000);

      setValues({
        name: '',
        email: '',
        phone: '',
        body: '',
      });
    })
    .catch(() => {
      setWarning(true);
      warningTimer(setWarning, false, 3000);

      setValues(current => ({ ...current, body: '' }));
    });
  };

  const errorName = touched.name || errors.name;
  const errorEmail = touched.email || errors.email;
  const errorPhone = touched.phone || errors.phone;
  const errorBody = touched.body || errors.body;

  const validateFields = (text: string, field: string) => {
    //eslint-disable-next-line
    let pattern = /^[\+]{0,1}380([0-9]{9})$/;

    if (field === 'name') {
      //eslint-disable-next-line
      pattern = /^[a-zA-Z][a-zA-Z0-9-_\.]{2,60}$/;
    }

    if (field === 'email') {
      // eslint-disable-next-line max-len
      pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }

    return !pattern.test(text);
  };

  const handleBlur = (value: string, field: string) => {
    console.log(1);
    if (!value.trim().length) {
      setToched(current => ({
        ...current,
        [field]: true,
      }));
    }

    if (email || phone || name) {
      setIsValid(current => ({
        ...current,
        [field]: validateFields(value, field),
      }));
    }
  };

  return (
    <section
      className="page__section contact-us"
      id="contact-us"
      hidden={isTouchOpen}
    >
      <div className="contact-us__container">
        <div className="grid grid--tablet">
          <div
            className="
              grid__item
              grid__item--tablet-1-3
              grid__item--dekstop-1-5
            "
          >
            <form
              onSubmit={handleSubmit}
              onReset={clearForm}
              className="contact-us__form"
            >
              <input
                name="name"
                type="text"
                className={classNames(
                  "form-field",
                  { 'is-danger': errorName },
                )}
                placeholder="Ім'я"
                value={name}
                onChange={handleChange}
                onBlur={() => handleBlur(name, 'name')}
              />

              <div className="contact-us__distance">
                <p className="help is-danger" data-cy="ErrorMessage">
                  {errorName && 'Name is required'}
                </p>
              </div>

              <input
                name="email"
                type="email"
                className="form-field"
                placeholder="E-mail"
                value={email}
                onChange={handleChange}
                onBlur={() => handleBlur(email, 'email')}
              />

              <div className="contact-us__distance">
                <p className="help is-danger" data-cy="ErrorMessage">
                  {errorEmail && 'Email is required'}
                  {isValid.email && !errorEmail && 'Email is not valid'}
                </p>
              </div>

              <input
                name="phone"
                type="tel"
                className="form-field"
                placeholder="Телефон"
                value={phone}
                onChange={handleChange}
                onBlur={() => handleBlur(phone, 'phone')}
              />

              <div className="contact-us__distance">
                <p className="help is-danger" data-cy="ErrorMessage">
                  {errorPhone && 'Phone is required'}
                  {isValid.phone && !errorEmail && 'Phone is not valid'}
                </p>
              </div>

              <textarea
                name="body"
                className="
                  form-field
                  form-field-textarea
                "
                placeholder="Текст повідомлення"
                value={body}
                onChange={handleChange}
                onBlur={() => handleBlur(body, 'body')}
              />

              <div className="contact-us__distance contact-us__distance--last">
                <p className="help is-danger" data-cy="ErrorMessage">
                  {errorBody && 'Введіть своє повідомлення'}
                  {warning && 'Something went wrong, try again'}
                </p>
                <p className="help is-submit" data-cy="ErrorMessage">
                  {submitting && 'Your message has been sent, we will definitely contact you.'}
                </p>
              </div>

              <button
                type="submit"
                className={classNames(
                  "button",
                  { 'is-loading': submitting },
                )}
              >
                Відправити
              </button>
            </form>
          </div>

          <div className="
            grid__item
            grid__item--tablet-4-6
            grid__item--dekstop-6-12"
          >
            <div className="contact-us__info">
              <h2 className="contact-us__title">
                Отримайте безкоштовну консультацію зараз
              </h2>
              
              <p className="contact-us__text">заповніть, будь ласка форму і з вами звяжеться наш менеджер</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
