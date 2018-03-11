import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="text-center text-primary d-flex">
      <div className="container my-auto">
        <div className="row">
          <div className="col-md-offset-4 whiteback">
            <div className="col-lg-10 mx-auto">
              <h1 className="text-uppercase">
                <strong>Welcome to Yummy Recipes</strong>
              </h1>
              <hr />
            </div>
            <div className="col-lg-8 mx-auto">
              <p className="text-faded mb-5">
                Create and share your savory ideas with us. Lets whet our
                palettes together. Happy creating
              </p>

              <Link to="/login" className="btn-lg">
                Login
              </Link>
              <Link to="/register" className="btn-lg">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
