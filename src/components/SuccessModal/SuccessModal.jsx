import ModalWithForm from '../ModalWithForm/ModalWithForm';

function SuccessModal({ isOpen, onClose, onSwitchToLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSwitchToLogin();
  };
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      redirectButton={
        <button
          type="button"
          className="modal__redirect"
          onClick={onSwitchToLogin}
        >
          <span>or</span> <span className="signup-text">Sign in</span>
        </button>
      }
    ></ModalWithForm>
  );
}

export default SuccessModal;
