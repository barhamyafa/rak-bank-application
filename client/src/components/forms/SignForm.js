import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FaEyeSlash } from 'react-icons/fa';

import Button from '../Button';

/*
  This Folder will be shared between SignIn and Sign Up in the Future
*/
function SignForm(props) {
  const [passwordReveal, setPasswordReveal] = useState(false);
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className='text-error'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  const renderInput = ({ input, type, meta, placeholder, icon }) => {
    const className = `relative mb-7 field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <input {...input} type={type} autoComplete='off'
          placeholder={placeholder}
          className='block w-full bg-inputBg rounded-md border border-stone-300 p-3 text-gray-900 placeholder-neutralText focus:outline-none' />
        {icon ? icon : ''}
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    props.onSubmit(formValues)
  };

  return (
    <form
      onSubmit={props.handleSubmit(onSubmit)}
    >
      <Field name='fullname'
        component={renderInput}
        placeholder='FullName'
        tupe='text'
      />
      <Field name='email'
        component={renderInput}
        placeholder='Email'
        type='text'
      />
      <Field
        name='password'
        component={renderInput}
        placeholder='Password'
        type={passwordReveal ? 'password' : 'text'}
        icon={<FaEyeSlash className='fill-neutralText absolute right-1.5 top-5'
          onClick={() => setPasswordReveal(!passwordReveal)} />}
      />
      <Button primary className='w-full'>Continue</Button>
    </form>
  );
}

const validate = formValues => {
  const errors = {};

  if (!formValues.fullname) {
    errors.fullname = 'You must enter your full name';
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
    errors.email = 'You must enter a valid email';
  }

  if (!formValues.email) {
    errors.email = 'You must enter an email';
  }

  if (!formValues.password) {
    errors.password = 'You must enter a password';
  }
  if (formValues.password && formValues.password.length < 8) {
    errors.password = 'Your password must be eight digits at least';
  }
  return errors;
};

export default reduxForm({
  form: 'signForm',
  validate
})(SignForm);
