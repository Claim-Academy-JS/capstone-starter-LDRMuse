import React from "react";
import PropTypes from "prop-types";

//TODO: get text to fit in buttons

export const Options = ({ searchClientMode, handler }) => {
  return (
    <div>
      <button className="button mt-4 ml-2" onClick={handler}>
        {searchClientMode ? "Add New Client" : "Search Client?"}
      </button>
      <button className="button mt-4 ml-2" onClick={handler}>
        {!searchClientMode ? "Search Client?" : null}
      </button>
      <br></br>
    </div>
  );
};

Options.propTypes = {
  searchClientMode: PropTypes.bool,
  handler: PropTypes.func,
};

Options.defaultProps = { loginMode: false };
