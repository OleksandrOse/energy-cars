import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { UploadFile } from '../UploadFile/UploadFile';
import { FormField } from '../FormField/FormField';
import { warningTimer } from '../../utils/warningTimer';
import { ButtonTypes } from '../../types/ButtonTypes';
import axios from 'axios';


import './NewAuto.scss';
import { Product } from '../../types/Product';

const API_URL = 'https://test-autodb.onrender.com/users';

type Props = {
  setVisibleProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export const NewAuto: React.FC<Props> = ({ setVisibleProducts }) => {
  const [submitting, setSubmitting] = useState(false);
  const [isValid, setIsValid] = useState({
    name: false,
    price: false,
    year: false,
  });
  const [warning, setWarning] = useState(false);
  const [photoName, setPhotoName] = useState('')
  const formData = new FormData();

  const [touched, setToched] = useState({
    name: false,
    price: false,
    year: false,
  });

  const [errors, setErrors] = useState({
    name: false,
    price: false,
    year: false,
    photo: false,
  });

  const [values, setValues] = useState({
    name: '',
    price: '',
    year: '',
    photo: null,
  });

  const { name, price, year, photo } = values;
  const clearForm = () => {
    setValues({
      name: '',
      price: '',
      year: '',
      photo: null,
    });

    setErrors({
      name: false,
      price: false,
      year: false,
      photo: false,
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name: field, value, type, checked } = event.target;


    if (event.target.files instanceof FileList) {
      const files = (event.target).files[0];
      const filesName = (event.target).files[0].name;

      setValues(current => ({ ...current, [field]: files }));
      setPhotoName(current => current = filesName);
    } else {
      setValues(current => ({
        ...current,
        [field]: type === 'checkbox' ? checked : value,
      }));
    }

    setErrors(current => ({ ...current, [field]: false }));
    setToched(current => ({ ...current, [field]: false }));
    setIsValid(current => ({ ...current, [field]: false }));
  };

  function sendMessage(data: any) {
    return axios.post(API_URL, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
    .then(res => {
      console.log(res)
      setVisibleProducts(curr => [...curr, res.data])
      setSubmitting(true);
      warningTimer(setSubmitting, false, 3000);
    })
    .catch(error => {
      console.log(error)
      setWarning(true);
      warningTimer(setWarning, false, 3000);
    });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (photo) {
      formData.append('name', name);
      formData.append('price', price);
      formData.append('year', year);
      formData.append('photo', photo);
    }

    setErrors({
      name: !name,
      price: !price,
      year: !year,
      photo: !photo,
    });

    if (!name.trim() || !price.trim() || !year.trim()) {
      return;
    }

    sendMessage(formData)
    console.log(formData.get('price'));


    setValues({
      name: '',
      price: '',
      year: '',
      photo: null,
    });
  };

  const validateFields = (text: string, field: string) => {
    
    //eslint-disable-next-line
    let pattern = /^[\+]{0,1}380([0-9]{9})$/;

    if (field === 'name') {
      //eslint-disable-next-line
      pattern = /^[a-zA-Z][a-zA-Z0-9-_\.]{2,60}$/;
    }

    if (field === 'year') {
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

    if (price || year || name) {
      setIsValid(current => ({
        ...current,
        [field]: validateFields(value, field),
      }));
    }
  };

  const errorName = touched.name || errors.name;
  const errorPrice = touched.price || errors.price;
  const errorYear = touched.year || errors.year;
  const isDisabled = !!name && !!price && !!year && !!photo;

  return (
    <section className="new-user" id="new-user">
      <div className="new-user__container">
        <h1 className="new-user__title">
          Додати авто
        </h1>

        <form
          onSubmit={(e) => handleSubmit(e)}
          onReset={clearForm}
          className="new-user__form"
        >
          <FormField
            title="Назва авто"
            nameField="name"
            type="text"
            value={name}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errorName}
          />

          <div className="new-user__distance">
            <p className="help is-danger" data-cy="ErrorMessage">
              {errorName && 'Name is required'}
              {isValid.name && !errorName && 'Name is not valid'}
            </p>
          </div>

          <FormField
            title="Ціна"
            nameField="price"
            type="text"
            value={price}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errorPrice}
          />

          <div className="new-user__distance">
            <p className="help is-danger" data-cy="ErrorMessage">
              {errorPrice && 'Ціна обовязкова'}
              {/* {isValid.price && !errorPrice && 'Email is not valid'} */}
            </p>
          </div>

          <FormField
            title="Рік"
            nameField="year"
            type="text"
            value={year}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errorYear}
          />

          <div className="new-user__distance new-user__distance--last">
            <p className="help is-danger" data-cy="ErrorMessage">
              {errorYear && 'Рік обовязковий'}
              {/* {isValid.year && !errorYear && 'Phone is not valid'} */}
            </p>
          </div>

          <UploadFile
            handleChange={handleChange}
            photoName={photoName}
          />

          <div className="new-user__distance">
            <p className="help is-danger" data-cy="ErrorMessage">
              {errors.photo && 'Photo is required'}
              {warning && 'Something went wrong, try again'}
            </p>

            <p className="help is-submit" data-cy="SubmitMessage">
              {submitting && 'User has been add.'}
            </p>
          </div>

          <Button
            type={ButtonTypes.Submit}
            title="Додати"
            isDisabled={!isDisabled}
          />
        </form>
      </div>
    </section>
  );
};
