import React from "react";
import PropTypes from "prop-types";

//TODO: get text to fit in buttons
// TODO: Fix bugs in buttons
//when add new client is clicked, display add client form
//when search client id click, display search client form
//fix bug after certain button is click to display opposite button option

export const Options = ({ searchClientMode, handler, addClientMode }) => {
  return (
    <section className="px-4 py-4 has-text-centered mt-4 mb-4">
      <div className="container">
        <button className="button is-primary mr-2" onClick={handler}>
          {addClientMode ? "Add New Client" : "Search Client"}
        </button>
        <button className="button is-primary mr-2" onClick={handler}>
          {searchClientMode ? "Search Client" : "Add New Client"}
        </button>
      </div>
    </section>
  );
};

Options.propTypes = {
  searchClientMode: PropTypes.bool,
  handler: PropTypes.func,
  addClientMode: PropTypes.bool,
};

Options.defaultProps = { loginMode: false };
