import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Login extends Component {

  state = {
    loggedIn: !!localStorage.getItem('token')
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: event.target.elements.username.value,
        password: event.target.elements.password.value
      })
    });
    const token = await response.text();
    localStorage.setItem('token', token);
    this.setState({ loggedIn: true });
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to='/clients' />
    }
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Username
          <input type="text" name="username" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <input type="Submit" />
      </form>
    )
  }
}
