import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "Layout/Layout";
class Dashboard extends React.Component {
  componentDidMount() {}

  render() {
    const { user } = this.props;
    return (
      <Layout>
        <div className="col-md-offset-3">
          {/* <h1>Hi {user.username}!</h1> */}
          <p>You're logged into Yummy Recipes</p>
          <h3>Let's get cooking</h3>
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return {
    user
  };
}

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export { connectedDashboard as Dashboard };
