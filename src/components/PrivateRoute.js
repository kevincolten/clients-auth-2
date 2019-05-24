import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom";

export default class PrivateRoute extends Component {
  render() {
    return (
      <Route {...this.props} component={() => {
        if (!localStorage.getItem('token')) {
          return <Redirect to="/login" />;
        }
        const Komponent = this.props.component;
        return <Komponent {...this.props} />
      }} />
    )
  }
}
