import React, { Component } from 'react';
import { MdClose } from 'react-icons/md';

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
      <form onSubmit={this.handleSubmit} className='cm-form'>
        <MdClose className='form-close' onClick={this.props.hide} />
        <h1>Contact Me</h1>
        <div className='form-elements'>
          <p>
            <label>
              Your Name:{' '}
              <input
                type='text'
                name='name'
                value={name}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Your Email:{' '}
              <input
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Message:{' '}
              <textarea
                name='message'
                value={message}
                rows='4'
                onChange={this.handleChange}
              />
            </label>
          </p>
        </div>
        <div className='form-btns'>
          <p>
            <button type='submit'>Send</button>
          </p>
          <p>
            <button className='close-btn' onClick={this.props.hide}>
              Close
            </button>
          </p>
        </div>
      </form>
    );
  }
}
