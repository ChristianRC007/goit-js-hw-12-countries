import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const { error } = require('@pnotify/core');

const cautionNotify = () => {
  const options = {
    text: 'Too many matches found. Please enter a more specific query!',
    delay: 3000,
  };
  error(options);
};

export default cautionNotify;
