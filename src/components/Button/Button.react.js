import React from 'react';
import './Button.styles.css';

/**
 * React Button Component
 * @param {Object} props - Props for the button
 * @param {string} props.label - The text to display
 * @param {Function} props.onClick - Click handler
 */
export const Button = ({ label, onClick }) => {
  return (
    <button className="ui-button" onClick={onClick}>
      {label}
    </button>
  );
};
