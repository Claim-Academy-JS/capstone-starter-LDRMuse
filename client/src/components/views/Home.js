import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
  <>
    <div className="hero is-fullheight has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Brow and Arrow</h1>
          <div className="flex flex--align-center flex--column">
            <Link className="button is-primary my-2" to="/login">
              Get Started
            </Link>
            <Link className="button is-success is-small my-2" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>

    <section className="px-4 py-4">
      <div className="container">
        <h2 className="title">About Brow and Arrow</h2>
        <p>Brow and Arrow is a client management application</p>
      </div>
    </section>
  </>
);
