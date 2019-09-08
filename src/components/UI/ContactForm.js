import React, { Component } from 'react';
import { MdClose } from 'react-icons/md';
// ---------- Styles ---------- //
import { ButtonAlt, ButtonClose } from './index';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => this.props.hide())
      .catch(error => alert(error));
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form className='cm-form' onSubmit={this.handleSubmit}>
        <MdClose className='form-close' onClick={this.props.hide} />
        <h1>Contact Me</h1>
        <div className='form-elements'>
          <label>
            <div>Your Name: </div>
            <input
              type='text'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <div>Your Email: </div>
            <input
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <div>Message: </div>
            <textarea
              name='message'
              value={message}
              rows='4'
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className='form-btns'>
          <ButtonAlt>Send</ButtonAlt>
          <ButtonClose onClick={this.props.hide}>Close</ButtonClose>
        </div>
      </form>
    );
  }
}
