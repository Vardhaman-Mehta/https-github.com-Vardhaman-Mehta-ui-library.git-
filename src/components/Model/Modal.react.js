import React from 'react';
import './Modal.styles.css';

export const Modal = ({ content, onClose }) => {
  return (
    <div className="ui-modal">
      <div className="ui-modal-overlay" onClick={onClose}></div>
      <div className="ui-modal-content">{content}</div>
    </div>
  );
};
