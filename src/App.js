import { ReactButton } from 'ui-library';
import { fadeIn } from 'ui-library';

ReactButton({ label: "Click Me", onClick: () => alert('Hello') });


import { setTheme } from 'ui-library';

document.getElementById('themeSwitcher').addEventListener('click', () => {
  setTheme('dark'); // or 'light'
});


// Instead of:
import { Button, Modal } from 'ui-library';

// Allow:

import React from 'react';
import Button from 'ui-library/components/Button';
import Modal from 'ui-library/components/Modal';

function App() {
  const openModal = () => {
    alert('Modal Opened!');
  };

  return (
    <div>
      <h1>Testing UI Library</h1>
      <Button label="Click Me" onClick={openModal} />
      <Modal content="Hello from Modal!" onClose={() => console.log('Modal closed')} />
    </div>
  );
}

export default App;
