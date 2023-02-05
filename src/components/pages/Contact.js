import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';


export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    } 
    // else {
    //   setPassword(inputValue);
    // }
  };


  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Here we check to see if the name is empty. If so, we set an error message to be displayed on the page.
    if (!name) {
      setErrorMessage('Name is required');
      return;
    }

    // First we check to see if the email is not valid. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      
    }
    
    // Here we check to see if the message is empty. If so, we set an error message to be displayed on the page.
    if(!message) {
      setErrorMessage('Message is required');
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');    
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-3">
      
      <div className="container">
        <h2 className="text-center">Contact</h2>
        <p className="text-center">Feel free to reach out to me:</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text" 
              className="form-control" 
              id="name" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email" 
              className="form-control" 
              id="email" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              value={message}
              name="message"
              onChange={handleInputChange}
              className="form-control" 
              id="message" 
              rows="3">
            </textarea>
          </div>
          <button type="submit" onClick={handleFormSubmit} className="btn btn-primary btn-block">Submit</button>
        </form>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}      
      </div>
    </section>
  );
}
