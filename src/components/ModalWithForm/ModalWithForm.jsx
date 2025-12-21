import './ModalWithForm.css';
import { useEffect } from 'react';
import closeIcon from '/assets/images/close.svg';

function ModalWithForm({
  title,
  isOpen,
  onClose,
  onSubmit,
  buttonText,
  children,
  successMessage,
  redirectButton,
  isButtonDisabled = false,
}) {

  useEffect(() => {
    const handleEscape = (evt) => {
    if (evt.key === 'Escape') {
      onClose();
    }
    };

    if(isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? 'modal_opened' : ''}`} onClick={handleOverlayClick}>
      <div className="modal__content">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeIcon} alt="Close" />
        </button>
        <h2 className="modal__title">{title}</h2>

        <form onSubmit={onSubmit} className="modal__form" name={name}>
          {children}

          <div className="modal__buttons">
            {buttonText && (
            <button className="modal__submit" type="submit" disabled={isButtonDisabled}>
              {buttonText}
            </button>
            )}
            {redirectButton}
          </div>
        </form>

        {successMessage && <p className="success">{successMessage}</p>}
      </div>
    </div>
  );
}

export default ModalWithForm;
