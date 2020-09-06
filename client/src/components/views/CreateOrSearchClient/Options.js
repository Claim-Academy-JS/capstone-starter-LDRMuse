import React from "react";
import PropTypes from "prop-types";

//TODO: get text to fit in buttons

export const Options = ({ searchClientMode, handler }) => {
  return (
    <section className="px-4 py-4 has-text-centered mt-4 mb-4">
      <div className="container">
        <button className="button is-primary mr-2" onClick={handler}>
          {searchClientMode ? "Add New Client?" : "Search Client?"}
        </button>
        {!searchClientMode ? (
          <button className="button is-primary ml-2" onClick={handler}>
            {searchClientMode ? "Search Client?" : "Add New Client?"}
          </button>
        ) : null}
      </div>
    </section>
  );
};

Options.propTypes = {
  searchClientMode: PropTypes.bool,
  handler: PropTypes.func,
};

Options.defaultProps = { loginMode: false };
