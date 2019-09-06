import React, { Component } from 'react';
import { MdClose } from 'react-icons/md';
// ---------- Styles ---------- //
import { Form, Label, ButtonAlt } from './index';

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
      <Form onSubmit={this.handleSubmit}>
        <MdClose className='form-close' onClick={this.props.hide} />
        <h1>Contact Me</h1>
        <div className='form-elements'>
          <Label>
            Your Name:{' '}
            <input
              type='text'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
          </Label>
          <Label>
            Your Email:{' '}
            <input
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
          </Label>
          <Label>
            Message:{' '}
            <textarea
              name='message'
              value={message}
              rows='4'
              onChange={this.handleChange}
            />
          </Label>
        </div>
        <div className='form-btns'>
          <p>
            <ButtonAlt type='submit'>Send</ButtonAlt>
          </p>
          <p>
            <ButtonAlt className='close-btn' onClick={this.props.hide}>
              Close
            </ButtonAlt>
          </p>
        </div>
      </Form>
    );
  }
}
