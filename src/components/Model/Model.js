import './Modal.styles.css';

export function Modal({ content, onClose }) {
  const modal = document.createElement('div');
  modal.className = 'ui-modal';

  const overlay = document.createElement('div');
  overlay.className = 'ui-modal-overlay';
  overlay.addEventListener('click', onClose);

  const modalContent = document.createElement('div');
  modalContent.className = 'ui-modal-content';
  modalContent.innerHTML = content;

  modal.appendChild(overlay);
  modal.appendChild(modalContent);

  document.body.appendChild(modal);
  return modal;
}
