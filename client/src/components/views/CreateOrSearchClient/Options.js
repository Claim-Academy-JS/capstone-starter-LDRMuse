import React from "react";
import PropTypes from "prop-types";

//TODO: get text to fit in buttons
// TODO: Fix bugs in button when one option is displayed, get rid of empty button

export const Options = ({ searchClientMode, handler, addClientMode }) => {
  const buttonOptions1 = !searchClientMode ? "Add Client" : searchClientMode;
  const buttonOptions2 = !addClientMode ? "Search Client" : addClientMode;

  return (
    <section className="px-4 py-4 has-text-centered mt-4 mb-4">
      <div className="container">
        <button className="button is-primary mr-2" onClick={handler}>
          {buttonOptions1}
        </button>
        <button className="button is-primary mr-2" onClick={handler}>
          {buttonOptions2}
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
