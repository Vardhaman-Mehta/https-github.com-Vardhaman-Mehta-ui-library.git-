/**
 * Fade in animation
 * @param {HTMLElement} element - The element to animate
 * @param {number} duration - Duration in milliseconds
 */
export function fadeIn(element, duration = 300) {
    element.style.opacity = 0;
    element.style.transition = `opacity ${duration}ms ease-in`;
    requestAnimationFrame(() => {
      element.style.opacity = 1;
    });
  }
  