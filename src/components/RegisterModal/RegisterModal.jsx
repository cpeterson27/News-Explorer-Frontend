import './RegisterModal.css';

import ModalWithForm from '../ModalWithForm/ModalWithForm';

function RegisterModal({ isOpen, onClose, onRegister, onSwitchToLogin, errorMessage }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    onRegister({ email, password, name });
  };

const isEmailError = errorMessage && errorMessage.includes('email');
const isPasswordError = errorMessage && errorMessage.toLowerCase().includes('password');
const isNameError = errorMessage && errorMessage.includes('name');

  return (
    <ModalWithForm
      title="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Sign up"
        redirectButton={
        <button
          type="button"
          className="modal__redirect"
          onClick={onSwitchToLogin}
        >
          <span>or</span> <span className="signup-text">Sign in</span>
        </button>
      }
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          placeholder="Enter email"
          required
        />
        {isEmailError && (
          <span className="modal__error modal__error_visible">
            {errorMessage}
          </span>
        )}
      </label>

      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          placeholder="Enter password"
          required
        />
        {isPasswordError && (
          <span className="modal__error modal__error_visible">
            {errorMessage}
          </span>
        )}
      </label>

      <label className="modal__label">
        Username
        <input
          type="text"
          name="name"
          className="modal__input"
          placeholder="Enter your username"
          required
        />
        {isNameError && (
          <span className="modal__error modal__error_visible">
            {errorMessage}
          </span>
        )}
      </label>

      {errorMessage && !isEmailError && !isPasswordError && !isNameError && (
        <div className="modal__error modal__error_visible">
          {errorMessage}
          </div>
      )}
    </ModalWithForm>
  );
}

export default RegisterModal;