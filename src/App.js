import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './containers/Login';
import Clients from './containers/Clients';
import PrivateRoute from './components/PrivateRoute';

export default class App extends React.Component {

  state = {
    loggedIn: !!localStorage.getItem('token')
  }

  onClick = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    this.setState({ loggedIn: false });
  }

  render = () => {
    return (
      <Router basename={'/clients-auth-2'}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/login">login</Link>
              </li>
              <li>
                <Link to="/clients">Clients</Link>
              </li>
              {/* <li>
                <Link to="/pets">pets</Link>
              </li> */}
              <li>
                <a href="#logout" onClick={this.onClick}>Logout</a>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/clients" component={Clients} />
          {/* <Route path="/pets" component={Pets} /> */}
        </div>
      </Router>
    );
  }
}