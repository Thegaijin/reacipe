import React from "react";

const Home = () => {
  return (
    <div className="masthead text-center text-primary d-flex">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="text-uppercase">
              <strong>Welcome to Yummy Recipes</strong>
            </h1>
            <hr />
          </div>
          <div className="col-lg-8 mx-auto">
            <p className="text-faded mb-5">
              Create and share your savory ideas with us. Lets whet our palettes
              together. Happy creating
            </p>
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
