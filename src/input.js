import React, { useState } from 'react';

function Input() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the user's name (e.g., send it to an API, display it, etc.).
    console.log('User entered name:', name);
  };

  return (
    <div>
      <h1>Enter your name:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Your Name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Input;