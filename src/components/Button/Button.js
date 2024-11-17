import './Button.styles.css';

/**
 * Create a simple button for vanilla JS
 * @param {string} label - The text to display on the button
 * @param {Function} onClick - The click event handler
 */
export function Button({ label, onClick }) {
  const button = document.createElement('button');
  button.innerText = label;
  button.className = 'ui-button';
  button.addEventListener('click', onClick);
  return button;
}
