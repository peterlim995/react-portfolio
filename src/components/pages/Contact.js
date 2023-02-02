import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-5">
    <div className="container">
      <h2 className="text-center">Contact</h2>
      <p className="text-center">Feel free to reach out to me:</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
    </div>
  </section>
  );
}
