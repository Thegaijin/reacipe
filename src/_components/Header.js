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
          <nav className="navbar navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar"
                  aria-expanded="false"
                  aria-controls="navbar"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="#" />
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li onClick={this.logOut} className="active">
                    <Link to="/">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default connect(null, { logout })(Header);
