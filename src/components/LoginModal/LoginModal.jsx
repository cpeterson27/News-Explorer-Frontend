import { useState, useEffect } from 'react';

import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useForm } from '../../hooks/useForm';

const defaultValues = {
  email: '',
  password: '',
};

function LoginModal({
  isOpen,
  onClose,
  onLogin,
  onSwitchToRegister,
}) {
  const { values, handleChange, setValues } = useForm(defaultValues);
  const [errorMessage, setErrorMessage] = useState('');
  
  const isFormValid = () => {
    return values.email.trim() !== '' && values.password.trim() !== '';
  }

  useEffect(() => {
    if (isOpen) {
      setValues(defaultValues);
      setErrorMessage('');
    }
  }, [isOpen, setValues]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setErrorMessage('');

    try {
      await onLogin(values);
      setValues(defaultValues);
      onClose();
    } catch (error) {
      console.log('Login error:', error); 
      if (error.status === 401) {
        setErrorMessage('Invalid email or password.');
      } else if (error.message) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Login failed. Please try again');
      }
    }
  };

  const isEmailError = errorMessage && (
    errorMessage.includes('email') || 
    errorMessage.includes('Invalid email address')
  );
  
  const isPasswordError = errorMessage && errorMessage.toLowerCase().includes('password');

  if (!isOpen) return null;

  return (
    <ModalWithForm
      title="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Sign in"
      isButtonDisabled={!isFormValid()}
      redirectButton={
        <button
          type="button"
          className="modal__redirect"
          onClick={onSwitchToRegister}
        >
          <span>or</span> <span className="signup-text">Sign up</span>
        </button>
      }
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          id="email"
          type="email"
          name="email"
          className={`modal__input ${isEmailError ? 'modal__input_error' : ''}`}
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange}
          required
        />
        {isEmailError && (
          <span className="modal__error modal__error_visible">
            {errorMessage}
          </span>
        )}
      </label>

      <label htmlFor="password" className="modal__label">
        Password
        <input
          id="password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          className={`modal__input ${isPasswordError ? 'modal__input_error' : ''}`}
          placeholder="Enter password"
          required
          minLength="8"
        />
        {isPasswordError && (
          <span className="modal__error modal__error_visible">
            {errorMessage}
          </span>
        )}
      </label>

      {errorMessage && !isEmailError && !isPasswordError && (
        <p className="modal__error modal__error_visible">{errorMessage}</p>
      )}
    </ModalWithForm>
  );
}

export default LoginModal;