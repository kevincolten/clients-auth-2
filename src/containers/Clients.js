import React, { Component } from 'react'

export default class Clients extends Component {
  state = {
    clients: []
  }

  componentDidMount = async () => {
    try {
      const response = await fetch('/api/clients', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const clients = await response.json();
      this.setState({
        clients: clients
      });
    } catch (error) {
      localStorage.removeItem('token');
      this.setState({ clients: [] });
      console.error(error)
    }
  }

  render = () => {
    return (
      <ul>
        {this.state.clients.map(client => <li key={client.id}>{client.name}</li>)}
      </ul>
    )
  }
}
