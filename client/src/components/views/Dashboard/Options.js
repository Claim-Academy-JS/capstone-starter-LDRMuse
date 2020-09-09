import React from "react";
import PropTypes from "prop-types";

// TODO: Fix bugs in button when one option is displayed, get rid of empty button

export const Options = ({ mode, handler }) => {
  return (
    <section className="px-4 py-4 has-text-centered mt-4 mb-4">
      <div className="container">
        <button className="button is-primary mr-2" onClick={handler}>
          Add Client
        </button>
        <button className="button is-primary mr-2" onClick={handler}>
          Search Clients
        </button>
      </div>
    </section>
  );
};

Options.propTypes = {
  mode: PropTypes.string,
  handler: PropTypes.func,
};
