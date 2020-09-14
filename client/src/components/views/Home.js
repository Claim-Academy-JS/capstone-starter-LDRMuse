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
        <h2 className="title mt-6">About Brow and Arrow</h2>
        <p className="mb-4">
          Brow and Arrow is a versatile Client Management Application designed
          solely with the PMU artist in mind.
        </p>{" "}
        <p>
          Easily chart on clients, upload before and after photos and store
          consent forms in this all-in-one application.
        </p>
      </div>
    </section>
  </>
);
