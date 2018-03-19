import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../_actions/user.actions';

class Header extends React.Component {
  logOut = () => {
    this.props.logout();
    console.log('^*^*^*^*^*^*^*^*^*logout actions^*^*^*^*^*^*^*^*^*^');
  };

  render() {
    return (
      <header>
        <div className="container">
          <nav className="navbar navbar-inverse navbar-fixed-top menu">
            <ul className="menu">
              <li onClick={this.logOut} className="active">
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default connect(null, { logout })(Header);
