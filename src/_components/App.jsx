import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers/history';
import * as alertActions from '../_actions/alert.actions';
// import { PrivateRoute } from '../_components/PrivateRoute';
import { Dashboard } from './Dashboard';
import HomePage from './HomePage';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import { PrivateRoute } from './PrivateRoute';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen(() => {
      // location, action
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div>
        <div className="container">
          <div className="">
            {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
            <Router history={history}>
              <div>
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
